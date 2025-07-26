import { Variants } from "framer-motion";

export const fadeToBlackVariants: Variants = {
  hidden: { opacity: 0, backgroundColor: "black" },
  visible: { opacity: 1, backgroundColor: "transparent" },
  exit: { opacity: 0, backgroundColor: "black" },
};

export const fadeToWhiteVariants: Variants = {
  hidden: { opacity: 0, backgroundColor: "white" },
  visible: { opacity: 1, backgroundColor: "transparent" },
  exit: { opacity: 0, backgroundColor: "white" },
};

export const fadeWithScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const fadeWithBlurVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(10px)" },
};

export const radialFadeVariants: Variants = {
  hidden: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
  visible: { opacity: 1, clipPath: "circle(100% at 50% 50%)" },
  exit: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
};

export const directionalFadeVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const colorFadeVariants: (color: string) => Variants = (color) => ({
  hidden: { opacity: 0, backgroundColor: color },
  visible: { opacity: 1, backgroundColor: "transparent" },
  exit: { opacity: 0, backgroundColor: color },
});