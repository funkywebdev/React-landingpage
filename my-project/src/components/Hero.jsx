import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Frame4 from '../assets/Frame4.png';

const Hero = () => {
  // List of messages that will rotate
  const messages = [
    "Learn in-demand tech skills from experts.",
    "Build real-world projects to boost your portfolio.",
    "Launch your career with confidence.",
  ];

  const [index, setIndex] = useState(0);

  // Change text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container px-4 py-6 mx-auto overflow-hidden text-center sm:py-8 lg:py-12">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[#163156] font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-4xl leading-snug"
      >
        Master In-Demand Tech Skills & Launch Your Dream Career
      </motion.h1>

      {/* Animated Subtitle */}
      <div className="h-[40px] mt-3">
        <AnimatePresence mode="wait">
          <motion.p
            key={messages[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-700 max-w-2xl mx-auto"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-4 mt-4 sm:flex-row"
      >
        <a
          href="#"
          className="border border-[#163156] text-[#163156] rounded-full px-6 py-2 cursor-pointer w-full sm:w-auto text-center transition hover:bg-[#163156] hover:text-white"
        >
          Explore courses
        </a>
        <a
          href="#"
          className="bg-[#163156] text-white rounded-full px-6 py-2 cursor-pointer w-full sm:w-auto text-center transition hover:bg-[#0f2440]"
        >
          Register now
        </a>
      </motion.div>

      {/* Image with Floating Animation */}
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { delay: 1, duration: 0.8 },
          y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
        }}
        className="w-full h-auto max-w-[950px] mx-auto mt-6"
        src={Frame4}
        alt="Hero illustration"
      />
    </div>
  );
};

export default Hero;

