'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string | boolean;
  animate?: string | boolean;
  transition?: Record<string, unknown>; // More specific type can be used if needed
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  variants = defaultVariants,
  initial = "hidden",
  animate = "visible",
  transition = { duration: 0.5 }
}) => {
  return (
    <motion.section
      className={className}
      variants={variants}
      initial={initial as any} // Type assertion due to Framer Motion's flexible initial/animate props
      whileInView={animate as any} // Type assertion
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
