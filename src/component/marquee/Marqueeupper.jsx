import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marqueeupper = () => {


  const upperMarquee = [
    "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos",
    "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos", "UGC Videos"
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem textItems={upperMarquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marqueeupper;
