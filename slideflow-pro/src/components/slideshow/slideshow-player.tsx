"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  slideVariants,
  slideUpVariants,
  slideDownVariants,
  diagonalSlideVariants,
} from "../transitions/slide";
import {
  zoomInVariants,
  zoomOutVariants,
  kenBurnsVariants,
  scaleRotateVariants,
  bounceZoomVariants,
} from "../transitions/zoom";
import {
  rotateClockVariants,
  rotateCounterVariants,
  flipHorizontalVariants,
  flipVerticalVariants,
  cubeRotateVariants,
  cardFlipVariants,
} from "../transitions/rotation";
import {
  wipeLeftVariants,
  wipeRightVariants,
  wipeUpVariants,
  wipeDownVariants,
  circularWipeVariants,
  starWipeVariants,
  heartWipeVariants,
  diamondWipeVariants,
} from "../transitions/wipe";
import {
  splitHorizontalVariants,
  splitVerticalVariants,
  splitDiagonalVariants,
  barnDoorVariants,
  irisInVariants,
  irisOutVariants,
} from "../transitions/split";
import {
  glitchVariants,
  pixelateVariants,
  mosaicVariants,
  rippleVariants,
  shatterVariants,
  morphVariants,
  particleExplosionVariants,
  liquidVariants,
  origamiVariants,
  hologramVariants,
} from "../transitions/modern";
import {
  fadeToBlackVariants,
  fadeToWhiteVariants,
  fadeWithScaleVariants,
  fadeWithBlurVariants,
  radialFadeVariants,
  directionalFadeVariants,
  colorFadeVariants,
} from "../transitions/fade";
import { pushLeftVariants, pushRightVariants } from "../transitions/push";

export type TransitionType =
  | "fade"
  | "fade-to-black"
  | "fade-to-white"
  | "fade-with-scale"
  | "fade-with-blur"
  | "radial-fade"
  | "directional-fade"
  | "color-fade"
  | "slide"
  | "slide-up"
  | "slide-down"
  | "diagonal-slide"
  | "push-left"
  | "push-right"
  | "zoom-in"
  | "zoom-out"
  | "ken-burns"
  | "scale-rotate"
  | "bounce-zoom"
  | "rotate-clock"
  | "rotate-counter"
  | "flip-horizontal"
  | "flip-vertical"
  | "cube-rotate"
  | "card-flip"
  | "wipe-left"
  | "wipe-right"
  | "wipe-up"
  | "wipe-down"
  | "circular-wipe"
  | "star-wipe"
  | "heart-wipe"
  | "diamond-wipe"
  | "split-horizontal"
  | "split-vertical"
  | "split-diagonal"
  | "barn-door"
  | "iris-in"
  | "iris-out"
  | "glitch"
  | "pixelate"
  | "mosaic"
  | "ripple"
  | "shatter"
  | "morph"
  | "particle-explosion"
  | "liquid"
  | "origami"
  | "hologram";

interface SlideshowPlayerProps {
  images: string[];
  duration?: number; // in seconds
  transitionType?: TransitionType;
  textOverlays?: string[];
}

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const transitions: Record<TransitionType, Variants | ((color: string) => Variants)> = {
  fade: fadeVariants,
  "fade-to-black": fadeToBlackVariants,
  "fade-to-white": fadeToWhiteVariants,
  "fade-with-scale": fadeWithScaleVariants,
  "fade-with-blur": fadeWithBlurVariants,
  "radial-fade": radialFadeVariants,
  "directional-fade": directionalFadeVariants,
  "color-fade": colorFadeVariants("blue"), // Default color
  slide: slideVariants,
  "slide-up": slideUpVariants,
  "slide-down": slideDownVariants,
  "diagonal-slide": diagonalSlideVariants,
  "push-left": pushLeftVariants,
  "push-right": pushRightVariants,
  "zoom-in": zoomInVariants,
  "zoom-out": zoomOutVariants,
  "ken-burns": kenBurnsVariants,
  "scale-rotate": scaleRotateVariants,
  "bounce-zoom": bounceZoomVariants,
  "rotate-clock": rotateClockVariants,
  "rotate-counter": rotateCounterVariants,
  "flip-horizontal": flipHorizontalVariants,
  "flip-vertical": flipVerticalVariants,
  "cube-rotate": cubeRotateVariants,
  "card-flip": cardFlipVariants,
  "wipe-left": wipeLeftVariants,
  "wipe-right": wipeRightVariants,
  "wipe-up": wipeUpVariants,
  "wipe-down": wipeDownVariants,
  "circular-wipe": circularWipeVariants,
  "star-wipe": starWipeVariants,
  "heart-wipe": heartWipeVariants,
  "diamond-wipe": diamondWipeVariants,
  "split-horizontal": splitHorizontalVariants,
  "split-vertical": splitVerticalVariants,
  "split-diagonal": splitDiagonalVariants,
  "barn-door": barnDoorVariants,
  "iris-in": irisInVariants,
  "iris-out": irisOutVariants,
  glitch: glitchVariants,
  pixelate: pixelateVariants,
  mosaic: mosaicVariants,
  ripple: rippleVariants,
  shatter: shatterVariants,
  morph: morphVariants,
  "particle-explosion": particleExplosionVariants,
  liquid: liquidVariants,
  origami: origamiVariants,
  hologram: hologramVariants,
};

export function SlideshowPlayer({
  images,
  duration = 3,
  transitionType = "fade",
  textOverlays = [],
}: SlideshowPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [images, duration]);

  if (images.length === 0) {
    return <div>No images to display.</div>;
  }

  const transitionVariantOrFn = transitions[transitionType];
  const transitionVariants =
    typeof transitionVariantOrFn === "function"
      ? transitionVariantOrFn("blue")
      : transitionVariantOrFn;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={transitionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            style={{ objectFit: "contain" }}
          />
          {textOverlays.map((text, index) => (
            <div
              key={index}
              className="absolute bottom-10 left-10 text-white text-4xl font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              {text}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}