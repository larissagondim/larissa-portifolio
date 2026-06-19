"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "left" | "right";
}

export function SlideIn({ children, delay = 0, className = "", direction = "left" }: SlideInProps) {
  const reduceMotion = useReducedMotion();

  const xOffset = direction === "left" ? -30 : 30;

  const item = {
    hidden: {
      opacity: 0,
      x: xOffset,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={reduceMotion ? undefined : item}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
