"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const OFFSET = 36;

const ease = [0.16, 1, 0.3, 1] as const;

export type RevealFrom = "left" | "right" | "up";

function hiddenState(from: RevealFrom) {
  switch (from) {
    case "left":
      return { opacity: 0, x: -OFFSET, y: 0 };
    case "right":
      return { opacity: 0, x: OFFSET, y: 0 };
    case "up":
      return { opacity: 0, x: 0, y: OFFSET };
    default:
      return { opacity: 0, x: 0, y: OFFSET };
  }
}

const shownState = { opacity: 1, x: 0, y: 0 };

type RevealProps = {
  children: ReactNode;
  className?: string;
  from?: RevealFrom;
  /** Seconds */
  delay?: number;
  /** Hero: animate on mount. Sections: animate when scrolled into view. */
  trigger?: "mount" | "view";
  /** Used with trigger="view" */
  viewportAmount?: number | "some" | "all";
};

export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  trigger = "view",
  viewportAmount = 0.25,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const initial = hiddenState(from);

  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={shownState}
        transition={{ duration: 0.65, delay, ease }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={shownState}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Parent for staggered children (each child uses `variants={staggerItemVariants}`). */
export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export const staggerItemFromLeftVariants = {
  hidden: { opacity: 0, x: -24, y: 0 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};
