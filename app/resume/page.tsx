"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import NavigationButtons from "@/components/NavigationButtons";
import ResumeBackground from "@/components/Background/ResumeBackground";

export default function Resume() {
  const [textColor, setTextColor] = useState("#bff776");

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <ResumeBackground onColorChange={setTextColor} />
      <Navbar />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.h1
          className="text-5xl font-bold text-center z-10 relative mb-8"
          animate={{ color: textColor }}
          transition={{ duration: 15, ease: "easeInOut" }}
        >
          Resume
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-white/20 p-8 rouunded-xl shadow-lg text-black text-center">
          <div className="max-w-4xl w-full">
            <a
              href="/resume.pdf"
              download
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-2xl 
            shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl mx-10 active:scale-95 w-56"
            >
              Download my resume
            </a>
          </div>
          <div className="max-w-4xl w-full">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="nonopener noreferrer"
              className="inline-block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-2xl 
            shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl mx-10 active:scale-95 w-56"
            >
              View my resume
            </a>
          </div>
        </div>
      </div>
      <NavigationButtons currentPage="resume" />
    </main>
  );
}
