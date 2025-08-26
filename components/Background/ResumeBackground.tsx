"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ResumeBackground({
  onColorChange,
}: {
  onColorChange?: (color: string) => void;
}) {
  const controls = useAnimation();
  const indexRef = useRef(0);

  const gradients = [
    { bg: "linear-gradient(135deg, #cedef3, #176df8)", text: "#ffffff" },
    { bg: "linear-gradient(135deg, #34d399, #3b82f6)", text: "#ffffff" },
    { bg: "linear-gradient(135deg, #f472b6, #fbbf24)", text: "#424dac" },
    { bg: "linear-gradient(135deg, #60a5fa, #a78bfa)", text: "#ffffff" },
  ];

  useEffect(() => {
    const first = gradients[0];

    controls.set({ background: first.bg });
    onColorChange?.(first.text);

    indexRef.current = 1;
    const interval = setInterval(() => {
      const next = gradients[indexRef.current % gradients.length];
      controls.start({ background: next.bg });
      onColorChange?.(next.text);
      indexRef.current++;
    }, 5000);

    return () => clearInterval(interval);
  }, [controls, onColorChange]);

  const shapes = Array.from({ length: 6 });
  const blurbs = [
    { size: 150, color: "bg-yellow-400", radius: 120, speed: 10 },
    { size: 180, color: "bg-pink-400", radius: 180, speed: 14 },
    { size: 100, color: "bg-purple-400", radius: 80, speed: 8 },
    { size: 130, color: "bg-cyan-400", radius: 140, speed: 12 },
  ];

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden z-0"
      animate={controls}
      transition={{ duration: 15, ease: "easeInOut" }}
    >
      {blurbs.map((blurb, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${blurb.color} rounded-full blur-3xl opacity-60`}
          style={{
            width: `${blurb.size}px`,
            height: `${blurb.size}px`,
            top: "50%",
            left: "50%",
            marginTop: `-${blurb.size / 2}px`,
            marginLeft: `-${blurb.size / 2}px`,
          }}
          animate={{
            x: [0, blurb.radius, 0, -blurb.radius, 0],
            y: [-blurb.radius, 0, blurb.radius, 0, -blurb.radius],
          }}
          transition={{
            repeat: Infinity,
            duration: blurb.speed,
            ease: "linear",
          }}
        />
      ))}
      {blurbs.map((blurb, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${blurb.color} rounded-full blur-3xl opacity-60`}
          style={{
            width: `${blurb.size}px`,
            height: `${blurb.size}px`,
            top: "50%",
            left: "50%",
            marginTop: `-${blurb.size / 2}px`,
            marginLeft: `-${blurb.size / 2}px`,
          }}
          animate={{
            x: [0, blurb.radius, 0, -blurb.radius, 0],
            y: [-blurb.radius, 0, blurb.radius, 0, -blurb.radius],
          }}
          transition={{
            repeat: Infinity,
            duration: blurb.speed,
            ease: "linear",
          }}
        />
      ))}
      {shapes.map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-white/20 blur-3xl"
          style={{
            width: `${100 + Math.random() * 150}px`,
            height: `${100 + Math.random() * 150}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 20 + Math.random() * 10,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </motion.div>
  );
}
