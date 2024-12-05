// import React from "react";
// import MarqueeItem from "./MarqueeItem";

// const Marqueelower = () => {


//   const lowerMarquee = [
//     "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos",
//     "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos"
//   ];

//   return (
//     <div className="container mx-auto">
//       <MarqueeItem textItems={lowerMarquee} from={"-100%"} to={0} />
//     </div>
//   );
// };

// export default Marqueelower;


// changes for image

import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marqueelower = () => {
  const lowerMarqueeImages = [
    "/assets/ugc.png",
    "/assets/ugc.png",
    "/assets/ugc.png",
    "/assets/ugc.png",
    "/assets/ugc.png",
  
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem imageUrls={lowerMarqueeImages} from={"-100%"} to={0} />
    </div>
  );
};

export default Marqueelower;
