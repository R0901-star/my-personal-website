"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_BLOBS = 6;
const NUM_SQUARES = 20;

export default function HomeBackground() {
  const [blobs, setBlobs] = useState<{ x: number; y: number; delay: number }[]>(
    []
  );
  const [squares, setSquares] = useState<
    { x: number; y: number; size: number }[]
  >([]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;

    const newBlobs = Array.from({ length: NUM_BLOBS }).map(() => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      delay: Math.random() * 5,
    }));

    const newSquares = Array.from({ length: NUM_SQUARES }).map(() => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      size: 2 + Math.random() * 4,
    }));

    setBlobs(newBlobs);
    setSquares(newSquares);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-800">
      {/* Floating gradient blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 blur-3xl opacity-50"
          initial={{ x: blob.x, y: blob.y, scale: 0.6 }}
          animate={{
            x: [blob.x, Math.random() * window.innerWidth],
            y: [blob.y, Math.random() * window.innerHeight],
            scale: [0.6, 1.3, 0.9],
            rotate: [0, 120, 240, 360],
            opacity: [0.4, 0.7, 0.5],
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror",
            delay: blob.delay,
          }}
        />
      ))}
      {squares.map((square, i) => (
        <motion.div
          key={`square-${i}`}
          className="absolute rounded-full bg-white shadow-lg"
          style={{
            left: square.x,
            top: square.y,
            width: square.size,
            height: square.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
