import { Variants } from "framer-motion";

export const splitHorizontalVariants: Variants = {
  hidden: { clipPath: "inset(50% 0 50% 0)" },
  visible: { clipPath: "inset(0 0 0 0)" },
  exit: { clipPath: "inset(50% 0 50% 0)" },
};

export const splitVerticalVariants: Variants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: { clipPath: "inset(0 0 0 0)" },
  exit: { clipPath: "inset(0 50% 0 50%)" },
};

export const splitDiagonalVariants: Variants = {
  hidden: { clipPath: "polygon(0 0, 0 0, 100% 100%, 100% 100%)" },
  visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  exit: { clipPath: "polygon(100% 0, 100% 0, 0 100%, 0 100%)" },
};

export const barnDoorVariants: Variants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: { clipPath: "inset(0 0 0 0)" },
  exit: { clipPath: "inset(0 50% 0 50%)" },
};

export const irisInVariants: Variants = {
  hidden: { clipPath: "circle(100% at 50% 50%)" },
  visible: { clipPath: "circle(0% at 50% 50%)" },
  exit: { clipPath: "circle(100% at 50% 50%)" },
};

export const irisOutVariants: Variants = {
  hidden: { clipPath: "circle(0% at 50% 50%)" },
  visible: { clipPath: "circle(100% at 50% 50%)" },
  exit: { clipPath: "circle(0% at 50% 50%)" },
};