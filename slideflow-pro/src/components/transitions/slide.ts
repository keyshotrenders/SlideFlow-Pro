import { Variants } from "framer-motion";

export const slideVariants: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export const slideUpVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

export const slideDownVariants: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

export const diagonalSlideVariants: Variants = {
  hidden: { x: "100%", y: "100%", opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
  exit: { x: "-100%", y: "-100%", opacity: 0 },
};