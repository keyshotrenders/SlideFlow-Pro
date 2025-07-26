import { Variants } from "framer-motion";

export const wipeLeftVariants: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0 0 0)" },
  exit: { clipPath: "inset(0 0 0 100%)" },
};

export const wipeRightVariants: Variants = {
  hidden: { clipPath: "inset(0 0 0 100%)" },
  visible: { clipPath: "inset(0 0 0 0)" },
  exit: { clipPath: "inset(0 100% 0 0)" },
};

export const wipeUpVariants: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: { clipPath: "inset(0 0 0 0)" },
  exit: { clipPath: "inset(0 0 100% 0)" },
};

export const wipeDownVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: { clipPath: "inset(0 0 0 0)" },
  exit: { clipPath: "inset(100% 0 0 0)" },
};

export const circularWipeVariants: Variants = {
  hidden: { clipPath: "circle(0% at 50% 50%)" },
  visible: { clipPath: "circle(100% at 50% 50%)" },
  exit: { clipPath: "circle(0% at 50% 50%)" },
};

export const starWipeVariants: Variants = {
  hidden: {
    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    scale: 0,
  },
  visible: {
    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    scale: 1,
  },
  exit: {
    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    scale: 0,
  },
};

export const heartWipeVariants: Variants = {
  hidden: {
    clipPath: "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')",
    scale: 0,
  },
  visible: {
    clipPath: "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')",
    scale: 1,
  },
  exit: {
    clipPath: "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')",
    scale: 0,
  },
};

export const diamondWipeVariants: Variants = {
  hidden: {
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    scale: 0,
  },
  visible: {
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    scale: 1,
  },
  exit: {
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    scale: 0,
  },
};