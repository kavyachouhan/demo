import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    // video: "./assets/Podcast/Ashneer Grover Reel.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Ashneer%20Grover%20Reel.mp4",
    name: "Sharktank Brand",
    logo: "./assets/logo/baccabucci.jpg",
    brand: "bacca bucci",
  },
  {
    id: 2,
    // video: "./assets/Podcast/Pod Aditya Teaser.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Pod%20Aditya%20Teaser.MP4",
    name: "NCD Schbang",
    logo: "./assets/logo/Schbang.jpg",
    brand: "Schbang",
  },
  {
    id: 3,
    // video: "./assets/Podcast/Vinita Said That Reel.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Vinita%20Said%20That%20Reel.mp4",
    name: "Sharktank Brand",
    logo: "./assets/logo/baccabucci.jpg",
    brand: "bacca bucci",
  },
  {
    id: 4,
    // video: "./assets/Podcast/SnapSave.io-Meet Darshil Shah from @chtrsocial share the virality concept __ Viral Janta Karti Hai! Aap Nahi __.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/SnapSave.io-Meet%20Darshil%20Shah%20from%20%40chtrsocial%20share%20the%20virality%20concept%20__%20Viral%20Janta%20Karti%20Hai!%20Aap%20Nahi%20__.mp4",
    name: "Founder of Chtr Social ",
    logo: "/assets/logo/Chtr.png",
    brand: "Chtr Social",
  },
];

const Podcast = () => {
  const [hovered, setHovered] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-8 ">
      <div className="mt-2">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.id}
              className="px-4"
              onMouseEnter={() => setHovered(d.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="rounded-lg shadow-lg overflow-hidden border border-black">
                {/* Video */}
                <div className="h-[400px] md:h-[300px]">
                  <video
                    className="h-full w-full object-contain"
                    preload="auto" 
                    controls={hovered === d.id}
                  >
                    <source src={d.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <p className="text-[#cfc9a3] uppercase font-bold text-md">
                    {d.name}
                  </p>
                  <hr className="w-14 mx-auto border-t-2 border-[#f85a23] my-2" />
                  <div className="flex justify-center items-center mt-4">
                    <img
                      src={d.logo}
                      alt={`${d.brand} logo`}
                      className="h-12 w-auto"
                      loading="lazy" // Lazy load the logo
                    />
                  </div>
                  {/* <p className="text-[#cfc9a3] font-semibold mt-2">
                    {d.brand}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Podcast;
