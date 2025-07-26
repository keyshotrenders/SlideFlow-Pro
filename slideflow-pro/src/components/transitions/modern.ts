import { Variants } from "framer-motion";

export const glitchVariants: Variants = {
  hidden: {
    opacity: 0,
    x: Math.random() * 20 - 10,
    y: Math.random() * 20 - 10,
    skewX: Math.random() * 10 - 5,
  },
  visible: { opacity: 1, x: 0, y: 0, skewX: 0 },
  exit: {
    opacity: 0,
    x: Math.random() * 20 - 10,
    y: Math.random() * 20 - 10,
    skewX: Math.random() * 10 - 5,
  },
};

export const pixelateVariants: Variants = {
  hidden: { filter: "blur(20px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
  exit: { filter: "blur(20px)", opacity: 0 },
};

export const mosaicVariants: Variants = {
  hidden: {
    clipPath: "inset(50% 50% 50% 50%)",
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
  },
  exit: {
    clipPath: "inset(50% 50% 50% 50%)",
  },
};

export const rippleVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
    borderRadius: "100%",
  },
  visible: {
    scale: 1,
    opacity: 1,
    borderRadius: 0,
  },
  exit: {
    scale: 0,
    opacity: 0,
    borderRadius: "100%",
  },
};

export const shatterVariants: Variants = {
  hidden: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 0,
    scale: 0,
  },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    scale: 1,
  },
  exit: {
    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    opacity: 0,
    scale: 0,
  },
};

export const morphVariants: Variants = {
  hidden: {
    borderRadius: "50%",
    scale: 0,
    rotate: 180,
  },
  visible: {
    borderRadius: 0,
    scale: 1,
    rotate: 0,
  },
  exit: {
    borderRadius: "50%",
    scale: 0,
    rotate: -180,
  },
};

export const particleExplosionVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

export const liquidVariants: Variants = {
  hidden: {
    filter: "url(#liquid)",
    opacity: 0,
  },
  visible: {
    filter: "url(#none)",
    opacity: 1,
  },
  exit: {
    filter: "url(#liquid)",
    opacity: 0,
  },
};

export const origamiVariants: Variants = {
  hidden: {
    scaleY: 0,
    transformOrigin: "top",
  },
  visible: {
    scaleY: 1,
    transformOrigin: "top",
  },
  exit: {
    scaleY: 0,
    transformOrigin: "bottom",
  },
};

export const hologramVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -50,
    filter: "blur(10px)",
  },
};