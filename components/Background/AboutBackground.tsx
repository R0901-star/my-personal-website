"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AboutBackground() {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700">
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-60"
        animate={{ x: [0, -120, 0], y: [0, -60, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-60"
        animate={{ x: [0, 140, 0], y: [0, 70, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
          style={{ top: sparkle.top, left: sparkle.left }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
            x: [0, sparkle.x, 0],
            y: [0, sparkle.y, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sparkle.delay,
          }}
        />
      ))}
    </div>
  );
}
