import { Variants } from "framer-motion";

export const rotateClockVariants: Variants = {
  hidden: { rotate: -360, scale: 0 },
  visible: { rotate: 0, scale: 1 },
  exit: { rotate: 360, scale: 0 },
};

export const rotateCounterVariants: Variants = {
  hidden: { rotate: 360, scale: 0 },
  visible: { rotate: 0, scale: 1 },
  exit: { rotate: -360, scale: 0 },
};

export const flipHorizontalVariants: Variants = {
  hidden: { rotateY: -180, scale: 0.8, opacity: 0 },
  visible: { rotateY: 0, scale: 1, opacity: 1 },
  exit: { rotateY: 180, scale: 0.8, opacity: 0 },
};

export const flipVerticalVariants: Variants = {
  hidden: { rotateX: -180, scale: 0.8, opacity: 0 },
  visible: { rotateX: 0, scale: 1, opacity: 1 },
  exit: { rotateX: 180, scale: 0.8, opacity: 0 },
};

export const cubeRotateVariants: Variants = {
  hidden: {
    rotateY: 90,
    scale: 0.8,
    opacity: 0,
    transformOrigin: "right center",
  },
  visible: {
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transformOrigin: "right center",
  },
  exit: {
    rotateY: -90,
    scale: 0.8,
    opacity: 0,
    transformOrigin: "left center",
  },
};

export const cardFlipVariants: Variants = {
  hidden: { rotateY: 180, opacity: 0 },
  visible: { rotateY: 0, opacity: 1 },
  exit: { rotateY: -180, opacity: 0 },
};