import React from "react";
import { motion } from "framer-motion";

const Homesecond = () => {
  return (
    <section className="bg-[#1c2321] text-white min-h-screen flex items-center">
      <div className="py-16 px-4 md:px-8 flex flex-col items-center justify-center space-y-8 w-full">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-[#f85a23] text-3xl md:text-5xl font-extrabold mb-6 tracking-wide">
            HOW WE MAKE A DIFFERENCE
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed mb-4 text-[#cfc9a3] text-left">
            We strategize and{" "}
            <span className="font-bold text-[#f85a23]">craft the perfect ads</span>{" "}
            tailored to every stage of the marketing funnel.
          </p>
          <p className="text-lg md:text-2xl leading-relaxed mb-4 text-[#cfc9a3] text-left">
            Our approach is{" "}
            <span className="font-bold text-[#f85a23]">data-driven</span> and
            backed by insights.
          </p>
          <p className="text-lg md:text-2xl leading-relaxed mt-4 text-[#cfc9a3] text-left">
            This enables us to optimize{" "}
            <span className="font-bold text-[#f85a23]">performance marketing</span>{" "}
            efforts for maximum impact, resulting in higher conversions and{" "}
            <span className="font-bold text-[#f85a23]">sales.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Homesecond;
