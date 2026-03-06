import { motion, useScroll, useTransform } from "framer-motion";

// A decorative floating cow emoji that animates with scroll - like snabbit's scroll effect
const ScrollAnimatedCow = () => {
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -200]);
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 5, -3, 5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);
  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 30, -20, 40, 0]);

  return (
    <motion.div
      style={{ y, rotate, scale, x }}
      className="fixed right-4 bottom-24 z-40 pointer-events-none hidden lg:block"
    >
      <div className="text-6xl drop-shadow-lg select-none" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" }}>
        🐄
      </div>
      {/* Grass effect */}
      <motion.div
        animate={{ scaleY: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-2xl text-center -mt-2 select-none"
      >
        🌿
      </motion.div>
    </motion.div>
  );
};

export default ScrollAnimatedCow;
