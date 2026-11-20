import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll reveal: fades and lifts its children once when they enter the viewport.
 * Motion is disabled for visitors who prefer reduced motion.
 */
export default function Reveal({ children, className, delay = 0, y = 26 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}