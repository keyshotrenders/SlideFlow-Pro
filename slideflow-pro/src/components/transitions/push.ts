import { Variants } from "framer-motion";

export const pushLeftVariants: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

export const pushRightVariants: Variants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};