import { motion } from "framer-motion";

export default function PulsatingTitle() {
  return (
    <motion.h1
      className="absolute text-8xl font-bold text-white z-20"
      animate={{
        scale: [1, 1.1, 1],
        textShadow: [
          "0 0 10px rgba(255,255,255,0.5)",
          "0 0 20px rgba(255,255,255,0.7)",
          "0 0 10px rgba(255,255,255,0.5)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      INJU
    </motion.h1>
  );
}
