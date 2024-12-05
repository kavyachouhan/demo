import React from "react";
import { motion } from "framer-motion";

const AdfilmmarqueeItem = ({ imageUrls, from, to }) => {
  return (
    <div className="flex MyGradient pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      {/* First Marquee Row */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {imageUrls.map((url, index) => (
          <img
            src={url}
            alt={`Marquee Image ${index + 1}`}
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto  "
            key={index}
            loading="lazy"
          />
        ))}
      </motion.div>

      {/* Second Marquee Row */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {imageUrls.map((url, index) => (
          <img
            src={url}
            alt={`Marquee Image ${index + 1}`}
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto "
            key={index}
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AdfilmmarqueeItem;
