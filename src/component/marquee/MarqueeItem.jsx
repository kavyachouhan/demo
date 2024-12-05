// import React from "react";
// import { motion } from "framer-motion";

// const MarqueeItem = ({ textItems, from, to }) => {
//   return (
//     <div className="flex MyGradient pt-20 mt-4"> {/* Add margin-top to push the marquee below the navbar */}
//       <motion.div
//         initial={{ x: `${from}` }}
//         animate={{ x: `${to}` }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="flex flex-shrink-0"
//       >
//         {textItems.map((text, index) => {
//           return (
//             <span
//               className="h-6 w-auto pr-10 text-4xl text-[#f85a23]" // Increased text size and padding
//               key={index}
//             >
//               {text}
//             </span>
//           );
//         })}
//       </motion.div>

//       <motion.div
//         initial={{ x: `${from}` }}
//         animate={{ x: `${to}` }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="flex flex-shrink-0"
//       >
//         {textItems.map((text, index) => {
//           return (
//             <span
//               className="h-6 w-auto pr-10 text-4xl text-[#cfc9a3]" // Increased text size and padding
//               key={index}
//             >
//               {text}
//             </span>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default MarqueeItem;






// changes for image

import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ imageUrls, from, to }) => {
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
            alt={`UGC VIDEO ${index + 1}`}
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto pr-6 sm:pr-8 md:pr-12"
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
            alt={`UGC VIDEO ${index + 1}`}
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto pr-6 sm:pr-8 md:pr-12"
            key={index}
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
