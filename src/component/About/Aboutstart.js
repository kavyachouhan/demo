// import React from "react";
// import { motion } from "framer-motion";

// const Aboutstart = () => {
//   return (
  
//       <div className="container mx-auto py-16 px-4 md:px-8 flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 w-full bg-[#1c2321] text-[#cfc9a3] min-h-screen flex items-center">
//         {/* Text Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -500 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2 }}
//           className="max-w-xl text-center md:text-left"
//         >
//           <h1 className="text-[#f85a23] text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
//             ABOUT
//           </h1>
//           <p className="text-lg sm:text-xl md:text-3xl mb-4 text-[#cfc9a3]">
//             Hi, I’m <span className="font-bold">Meet Dasani</span>
//           </p>
//           <p className="text-sm sm:text-md md:text-xl leading-relaxed text-[#cfc9a3]">
//             I started this agency after noticing a significant shift in how
//             people consume content—moving from{" "}
//             <span className="italic">static visuals</span> to{" "}
//             <span className="italic">videos</span>. Despite this change, many
//             big brands weren’t optimizing their ad spend with the right{" "}
//             <span className="font-bold text-[#f85a23]">
//               direct response video ads
//             </span>
//             . I saw an opportunity to bridge this gap by creating impactful,
//             data-driven video campaigns that not only capture attention but also
//             drive real results.
//           </p>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 500 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 2 }}
//           className="flex-shrink-0"
//         >
//           <div className="flex items-center justify-center md:justify-end">
//             <img
//               src="/assets/About.png"
//               alt="Meet Dasani"
//               className="rounded-lg w-[18rem] h-[14rem] sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[30rem] lg:h-[26rem] object-cover"
//             />
//           </div>
//         </motion.div>
//       </div>

//   );
// };


// export default Aboutstart;


import React from "react";
import { motion } from "framer-motion";

const Aboutstart = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 flex flex-col-reverse md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 w-full bg-[#1c2321] text-[#cfc9a3] min-h-screen items-center">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-[#f85a23] text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
          ABOUT
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl mb-4 text-[#cfc9a3]">
          Hi, I’m <span className="font-bold">Meet Dasani</span>
        </p>
        {/* Image Section for Small Screens */}
        <div className="block md:hidden mb-4">
          <img
            src="/assets/About.png"
            alt="Meet Dasani"
            loading="lazy"
            className="rounded-lg w-[18rem] h-[14rem] sm:w-60 sm:h-60 object-cover mx-auto"
          />
        </div>
        <p className="text-sm sm:text-md md:text-xl leading-relaxed text-[#cfc9a3]">
          I started this agency after noticing a significant shift in how
          people consume content—moving from {" "}
          <span className="italic">static visuals</span> to {" "}
          <span className="italic">videos</span>. Despite this change, many
          big brands weren’t optimizing their ad spend with the right {" "}
          <span className="font-bold text-[#f85a23]">
            direct response video ads
          </span>
          . I saw an opportunity to bridge this gap by creating impactful,
          data-driven video campaigns that not only capture attention but also
          drive real results.
        </p>
      </motion.div>

      {/* Image Section for Larger Screens */}
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="hidden md:flex flex-shrink-0"
      >
        <div className="flex items-center justify-center md:justify-end">
          <img
            src="/assets/About.png"
            alt="Meet Dasani"
            className="rounded-lg w-[18rem] h-[14rem] sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[30rem] lg:h-[26rem] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutstart;
