"use client";

import { Slide } from "@/types";
import { TransitionType } from "@/components/slideshow/slideshow-player";

interface PropertiesPanelProps {
  selectedSlide: Slide | null;
  onUpdateSlide: (slide: Slide) => void;
  transitionType: TransitionType;
  onTransitionChange: (transition: TransitionType) => void;
}

export function PropertiesPanel({
  selectedSlide,
  onUpdateSlide,
  transitionType,
  onTransitionChange,
}: PropertiesPanelProps) {
  if (!selectedSlide) {
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-muted-foreground">Select a slide to see its properties</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold">Slide Properties</h3>
      <div className="mt-4">
        <label htmlFor="transition-select" className="block mb-2">
          Transition Effect:
        </label>
        <select
          id="transition-select"
          value={transitionType}
          onChange={(e) => onTransitionChange(e.target.value as TransitionType)}
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
    </div>
  );
}