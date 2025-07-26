"use client";

import { useState, useEffect } from "react";
import {
  SlideshowPlayer,
  TransitionType,
} from "@/components/slideshow/slideshow-player";
import { Dropzone } from "@/components/ui/dropzone";
import { TimelineEditor } from "@/components/editor/timeline-editor";
import { PropertiesPanel } from "@/components/editor/properties-panel";
import { AudioPanel } from "@/components/editor/audio-panel";
import { TextOverlayPanel } from "@/components/editor/text-overlay-panel";
import { ExportPanel } from "@/components/editor/export-panel";
import { Slide } from "@/types";
import { exportToVideo } from "@/lib/ffmpeg";

export default function EditorPage() {
  const [transitionType, setTransitionType] = useState<TransitionType>("fade");
  const [slides, setSlides] = useState<Slide[]>([]);
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [textOverlays, setTextOverlays] = useState<string[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    const newSlides = acceptedFiles.map((file, index) => ({
      id: `${file.name}-${index}`,
      src: URL.createObjectURL(file),
    }));
    setSlides(newSlides);
    if (newSlides.length > 0 && !selectedSlide) {
      setSelectedSlide(newSlides[0]);
    }
  };

  const handleReorder = (reorderedSlides: Slide[]) => {
    setSlides(reorderedSlides);
  };

  const handleUpdateSlide = (updatedSlide: Slide) => {
    const newSlides = slides.map((slide) =>
      slide.id === updatedSlide.id ? updatedSlide : slide
    );
    setSlides(newSlides);
  };

  const handleAudioUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setAudioUrl(url);
  };

  const handleAddText = (text: string) => {
    setTextOverlays([...textOverlays, text]);
  };

  const handleExport = async (format: "mp4" | "webm" | "gif") => {
    try {
      const blob = await exportToVideo(
        slides.map((slide) => slide.src),
        transitionType,
        3 // duration
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `slideshow.${format}`;
      a.click();
    } catch (error) {
      console.error("Error exporting video:", error);
    } finally {
      // setIsExporting(false); // Removed as isExporting is not used
    }
  };

  useEffect(() => {
    // Clean up object URLs on unmount
    return () => {
      slides.forEach((slide) => URL.revokeObjectURL(slide.src));
    };
  }, [slides]);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Editor</h1>
      <p className="text-muted-foreground">Main editing interface.</p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Upload Images</h2>
        <div className="mt-4">
          <Dropzone onDrop={handleDrop} />
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="transition-select" className="block mb-2">
          Transition Effect:
        </label>
        <select
          id="transition-select"
          value={transitionType}
          onChange={(e) => setTransitionType(e.target.value as TransitionType)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="fade">Fade</option>
          <option value="fade-to-black">Fade to Black</option>
          <option value="fade-to-white">Fade to White</option>
          <option value="fade-with-scale">Fade with Scale</option>
          <option value="fade-with-blur">Fade with Blur</option>
          <option value="radial-fade">Radial Fade</option>
          <option value="directional-fade">Directional Fade</option>
          <option value="color-fade">Color Fade</option>
          <option value="slide">Slide</option>
          <option value="slide-up">Slide Up</option>
          <option value="slide-down">Slide Down</option>
          <option value="diagonal-slide">Diagonal Slide</option>
          <option value="push-left">Push Left</option>
          <option value="push-right">Push Right</option>
          <option value="zoom-in">Zoom In</option>
          <option value="zoom-out">Zoom Out</option>
          <option value="ken-burns">Ken Burns</option>
          <option value="scale-rotate">Scale & Rotate</option>
          <option value="bounce-zoom">Bounce Zoom</option>
          <option value="rotate-clock">Rotate Clockwise</option>
          <option value="rotate-counter">Rotate Counter-Clockwise</option>
          <option value="flip-horizontal">Flip Horizontal</option>
          <option value="flip-vertical">Flip Vertical</option>
          <option value="cube-rotate">Cube Rotate</option>
          <option value="card-flip">Card Flip</option>
          <option value="wipe-left">Wipe Left</option>
          <option value="wipe-right">Wipe Right</option>
          <option value="wipe-up">Wipe Up</option>
          <option value="wipe-down">Wipe Down</option>
          <option value="circular-wipe">Circular Wipe</option>
          <option value="star-wipe">Star Wipe</option>
          <option value="heart-wipe">Heart Wipe</option>
          <option value="diamond-wipe">Diamond Wipe</option>
          <option value="split-horizontal">Split Horizontal</option>
          <option value="split-vertical">Split Vertical</option>
          <option value="split-diagonal">Split Diagonal</option>
          <option value="barn-door">Barn Door</option>
          <option value="iris-in">Iris In</option>
          <option value="iris-out">Iris Out</option>
          <option value="glitch">Glitch</option>
          <option value="pixelate">Pixelate</option>
          <option value="mosaic">Mosaic</option>
          <option value="ripple">Ripple</option>
          <option value="shatter">Shatter</option>
          <option value="morph">Morph</option>
          <option value="particle-explosion">Particle Explosion</option>
          <option value="liquid">Liquid</option>
          <option value="origami">Origami</option>
          <option value="hologram">Hologram</option>
        </select>
      </div>
      <div className="mt-8 w-full aspect-video">
        <SlideshowPlayer
          images={slides.map((slide) => slide.src)}
          transitionType={transitionType}
          textOverlays={textOverlays}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <div className="mt-4">
          <TimelineEditor
            slides={slides}
            onReorder={handleReorder}
            onSelectSlide={setSelectedSlide}
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Properties</h2>
        <div className="mt-4">
          <PropertiesPanel
            selectedSlide={selectedSlide}
            onUpdateSlide={handleUpdateSlide}
            transitionType={transitionType}
            onTransitionChange={setTransitionType}
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Audio</h2>
        <div className="mt-4">
          <AudioPanel onAudioUpload={handleAudioUpload} audioUrl={audioUrl} />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Text Overlays</h2>
        <div className="mt-4">
          <TextOverlayPanel onAddText={handleAddText} />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Export</h2>
        <div className="mt-4">
          <ExportPanel onExport={handleExport} />
        </div>
      </div>
    </div>
  );
}