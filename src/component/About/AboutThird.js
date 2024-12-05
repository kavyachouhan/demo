import React from "react";
import { motion } from "framer-motion";

const AboutThird = () => {
  return (
    <div className="px-4 md:px-8 flex-col justify-center w-full bg-[#1c2321] text-white min-h-screen flex items-center">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-3xl"
      >
        {/* Title Centered */}
        <h1 className="text-center text-[#f85a23] text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-wide">
          WHAT WE BELIEVE
        </h1>

        {/* Paragraphs Left-Aligned on Larger Screens */}
        <div className="text-center md:text-left">
          <p className="text-lg sm:text-md md:text-2xl leading-relaxed mb-4 text-[#cfc9a3]">
            We believe that every Ad should have a purpose. At{" "}
            <span className="font-bold text-[#f85a23]">True Bridge Media</span>{" "}
            that purpose is simple:{" "}
            <span className="font-bold italic text-[#f85a23]">
              To drive results.
            </span>
          </p>
          <p className="text-lg sm:text-md md:text-2xl leading-relaxed text-[#cfc9a3]">  
            {/* text-lg md:text-xl */}
            During this journey, we realized that it’s a data-driven game of{" "}
            <span className="font-bold text-[#f85a23]">volume</span> and{" "}
            <span className="font-bold text-[#f85a23]">creative testing</span>.
            By producing multiple variations of ads, analyzing performance data,
            and identifying what works, we help brands find their{" "}
            <span className="italic font-bold text-[#f85a23]">
              winning creatives
            </span>{" "}
            and scale them effectively.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutThird;
