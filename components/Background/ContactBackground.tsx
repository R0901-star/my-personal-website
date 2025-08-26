"use client";

import { motion } from "framer-motion";

export default function ContactBackground() {
  const circles = [
    { size: 80, color: "bg-blue-400", opacity: 1 },
    { size: 160, color: "bg-sky-400", opacity: 0.8 },
    { size: 320, color: "bg-indigo-400", opacity: 0.6 },
    { size: 640, color: "bg-blue-400", opacity: 0.4 },
  ];

  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-300 to-pink-300">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className={`${circle.color} rounded-full absolute`}
          style={{
            width: circle.size,
            height: circle.size,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [circle.opacity, circle.opacity + 0.2, circle.opacity],
          }}
          transition={{
            duration: 2 + i, // slightly different speed per circle
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
