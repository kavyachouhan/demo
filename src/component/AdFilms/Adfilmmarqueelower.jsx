// changes for image

import React from "react";
import AdfilmmarqueeItem from "./AdfilmmarqueeItem";

const Adfilmmarqueelower = () => {
  const lowerMarqueeImages = [
    "/assets/adfilm1.png",
    "/assets/adfilm1.png",
    "/assets/adfilm1.png",
    "/assets/adfilm1.png",
    "/assets/adfilm1.png",
  
  ];

  return (
    <div className="container mx-auto">
      <AdfilmmarqueeItem imageUrls={lowerMarqueeImages} from={"-100%"} to={0} />
    </div>
  );
};

export default Adfilmmarqueelower;
