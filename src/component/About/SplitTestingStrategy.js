import React from "react";
import { motion } from "framer-motion";

const SplitTestingStrategy = () => {
  return (
    <div className="bg-[#1c2321] min-h-screen p-8 lg:p-16 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Strategy Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 text-[#cfc9a3]"
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="text-[#f85a23] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider mb-6 sm:mb-8 lg:mb-12 text-center 
              sticky top-6 z-10 bg-[#1c2321] 
              lg:static lg:bg-transparent lg:z-0"
            >
              SPLIT TESTING STRATEGY
            </motion.h1>

            <ul className="space-y-6 text-xl">
              {[
                {
                  text: "Strategizing persona testing for ",
                  highlight: "My11Circle",
                },
                {
                  text: "Creating ",
                  highlight: "2 identical ads",
                  continuation:
                    " — one with an average-looking actor and one with a good-looking influencer.",
                },
                {
                  text: "This ",
                  highlight: "data-driven",
                  continuation: " approach helps optimize Ads and ",
                  highlight2: "maximize user acquisition",
                },
                {
                  text: "The goal is to refine messaging and ",
                  highlight: "enhance ad performance",
                  continuation: " for better results.",
                },
              ].map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start space-x-2"
                >
                  <span className="text-lg">
                    {point.text}
                    <span className="text-[#f85a23] font-semibold">
                      {point.highlight}
                    </span>
                    {point.continuation}
                    {point.highlight2 && (
                      <span className="text-[#f85a23] font-semibold">
                        {point.highlight2}
                      </span>
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Videos Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Female Influencer Video */}
            <div className="flex flex-col items-center space-y-4">
              <div className="h-[400px] w-full bg-[#1c2321] flex justify-center items-center rounded-md overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  loading="lazy"
                  // src="/assets/My11Circle/2. Kajal Water splash(9X16).mp4"
                  src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/2.%20Kajal%20Water%20splash(9X16).mp4"
                  controls
                  className="h-full max-h-[400px] w-auto rounded-md "
                />
              </div>
              <img
                src="/assets/logo/My112.png"
                alt="My11Circle Logo"
                loading="lazy"
                className="w-auto h-20 object-contain mt-2"
              />

              <h3 className="text-[#cfc9a3] text-lg font-bold tracking-wide">
                FEMALE INFLUENCER
              </h3>
            </div>

            {/* Male Actor Video */}
            <div className="flex flex-col items-center space-y-4">
              <div className="h-[400px] w-full bg-[#1c2321] flex justify-center items-center rounded-md overflow-hidden">
                <video
                  autoPlay
                  muted
                   preload="metadata"
                  loading="lazy"
                  loop
                  // src="/assets/My11Circle/3. Vertical 9X16.mp4"
                  src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/3.%20Vertical%209X16.mp4"
                  controls
                  className="h-full max-h-[400px] w-auto rounded-md"
                />
              </div>
              <img
                src="/assets/logo/My112.png"
                alt="My11Circle Logo"
                loading="lazy" 
                className="w-auto h-20 object-contain mt-2"
              />

              <h3 className="text-[#cfc9a3] text-lg font-bold tracking-wide">
                MALE ACTOR
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SplitTestingStrategy;