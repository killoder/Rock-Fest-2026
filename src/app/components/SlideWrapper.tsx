import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function SlideWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10%" }}
      className="relative w-full h-full overflow-hidden"
    >
      {/* Smooth entry effect instead of shake */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1
          }
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
