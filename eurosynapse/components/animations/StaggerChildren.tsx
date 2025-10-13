"use client";

import { motion, useInView, UseInViewOptions, Variants } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  once?: boolean;
}

const StaggerChildren = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className = "",
  once = true,
}: StaggerChildrenProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 } as UseInViewOptions);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Small delay to ensure hydration is complete
    const timer = setTimeout(() => setHasAnimated(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: hasAnimated ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerChildren;
