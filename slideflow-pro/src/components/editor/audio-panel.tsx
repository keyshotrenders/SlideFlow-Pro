"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

interface ReactPlayerComponentProps {
  url: string;
  playing: boolean;
  controls: boolean;
  width: string;
  height: string;
}

interface AudioPanelProps {
  onAudioUpload: (file: File) => void;
  audioUrl: string | null;
}

export function AudioPanel({ onAudioUpload, audioUrl }: AudioPanelProps) {
  const [playing, setPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as ComponentType<ReactPlayerComponentProps>;

  const Player = ReactPlayer;

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold">Background Music</h3>
      <div className="mt-4">
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => {
            if (e.target.files) {
              onAudioUpload(e.target.files[0]);
            }
          }}
        />
      </div>
      {isClient && audioUrl && (
        <div className="mt-4">
          <Player
            url={audioUrl}
            playing={playing}
            controls
            width="100%"
            height="50px"
          />
          <button onClick={() => setPlaying(!playing)}>
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      )}
    </div>
  );
}