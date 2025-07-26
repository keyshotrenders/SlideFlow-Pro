import { Variants } from "framer-motion";

export const zoomInVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
};

export const zoomOutVariants: Variants = {
  hidden: { scale: 1.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 1.5, opacity: 0 },
};

export const kenBurnsVariants: Variants = {
  hidden: { scale: 1, opacity: 0 },
  visible: { scale: 1.2, opacity: 1, transition: { duration: 5 } },
  exit: { scale: 1, opacity: 0 },
};

export const scaleRotateVariants: Variants = {
  hidden: { scale: 0, opacity: 0, rotate: 360 },
  visible: { scale: 1, opacity: 1, rotate: 0 },
  exit: { scale: 0, opacity: 0, rotate: -360 },
};

export const bounceZoomVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  exit: { scale: 0.5, opacity: 0 },
};