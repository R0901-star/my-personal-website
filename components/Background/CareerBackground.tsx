"use client";

import { motion } from "framer-motion";

export default function CareerBackground() {
  const stars = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 overflow-hidden top-0 left-0 w-full h-full -z-10 bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-700">
      {stars.map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "10px",
            height: "10px",
            background: "white",
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))",
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.4, 1],
            filter: [
              "drop-shadow(0 0 4px rgba(255,255,255,0.5))",
              "drop-shadow(0 0 8px rgba(186,230,253,0.9))",
              "drop-shadow(0 0 6px rgba(253,253,150,0.9))",
              "drop-shadow(0 0 4px rgba(255,255,255,0.5))",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 3 + 2,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}
