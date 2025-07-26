import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

let ffmpeg: FFmpeg | null;

export async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg;
  }

  ffmpeg = new FFmpeg();
  await ffmpeg.load({
    coreURL: "/ffmpeg/ffmpeg-core.js",
    wasmURL: "/ffmpeg/ffmpeg-core.wasm",
    workerURL: "/ffmpeg/ffmpeg-core.worker.js",
  });

  return ffmpeg;
}

export async function exportToVideo(
  images: string[],
  transition: string,
  duration: number
) {
  const ffmpeg = await getFFmpeg();

  for (let i = 0; i < images.length; i++) {
    const fileData = await fetchFile(images[i]);
    await ffmpeg.writeFile(`input${i}.jpg`, fileData);
  }

  const transitionFilter = `blend=all_expr='A*(if(gte(T,${duration}),0,1))+B*(1-if(gte(T,${duration}),0,1))'`;

  await ffmpeg.exec([
    "-framerate",
    "1",
    "-i",
    "input%d.jpg",
    "-vf",
    transitionFilter,
    "-r",
    "30",
    "-c:v",
    "libx264",
    "output.mp4",
  ]);

  const data = await ffmpeg.readFile("output.mp4");
  return new Blob([data], { type: "video/mp4" });
}