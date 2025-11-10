import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TechCareer = () => {
  const messages = [
    "Your tech career starts today — don’t wait.",
    "Transform your future with tech skills.",
    "Join a community of innovators and creators.",
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
    <div className="w-full">
      <div className="bg-[#365682] py-12 sm:py-12 px-4 sm:px-8 text-center text-white flex flex-col items-center justify-center overflow-hidden">
        {/* Animated headline */}
        <div className="h-[50px] mb-3 sm:mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={messages[index]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-[18px] sm:text-[22px] md:text-[28px] font-bold leading-snug px-2"
            >
              {messages[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Sliding paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[13px] sm:text-[15px] md:text-base max-w-[320px] sm:max-w-[500px] md:max-w-[650px] mx-auto px-3 leading-relaxed"
        >
          Join thousands of successful graduates who transformed their lives
          through tech education.
        </motion.p>

        {/* Button */}
        <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-white text-[#163156] font-semibold rounded-full w-fit cursor-pointer hover:bg-[#f1f1f1] transition-all duration-300 text-[13px] sm:text-sm md:text-base">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default TechCareer;
