import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    // video: "./assets/Estuary/UGC Video.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/UGC%20Video.mp4",
    thumbnail: "./assets/Estuary/UGC-Thumbnail.jpg",
    name: "HIGH END UGC",
    logo: "	/assets/logo/Estuary.webp",
    brand: "ESTUARY",
  },
  {
    id: 2,
    // video: "./assets/Perfora/HOME Page Perfora UGC .mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/HOME%20Page%20Perfora%20UGC%20.mp4",
    thumbnail: "./assets/Perfora/2.png",
    name: "PHONE SHOT UGC",
    logo: "./assets//logo/Perforalogo.png",
    brand: "PERFORA",
  },
  {
    id: 3,
    // video: "./assets/P-TAL/HOMEP-TalBrassPatilaHook2.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/HOME%20P-Tal%20Brass%20Patila%20Hook%202%20.mp4",
    thumbnail: "./assets/P-TAL/UGC-Thumbnail.jpg",
    name: "CAMERA SHOT UGC",
    logo: "/assets/logo/P-tal.svg",
    brand: "P-TAL",
  },
  {
    id: 4,
    // video: "./assets/Mangalam/Mangalam Giant Cone Hook 1.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Mangalam%20Giant%20Cone%20Hook%201.MP4",
    thumbnail: "./assets/Mangalam/UGC-Thumbnail.jpg",
    name: "PHONE SHOT UGC",
    logo: "/assets/logo/Mangalam.png",
    brand: "MANGALAM",
  },
  {
    id: 5,
    // video: "./assets/My11Circle/HOME Fighting (1080X1920).mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/HOME%20Fighting%20(1080X1920).mp4",
    thumbnail: "./assets/Mangalam/UGC-Thumbnail.jpg",
    name: "PHONE SHOT UGC",
    logo: "/assets/logo/My11.png",
    brand: "My11Circle",
  },
  {
    id: 6,
    // video: "./assets/My11Circle/Home Combo offer.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Home%20Combo%20offer.mp4",
    thumbnail: "./assets/Mangalam/UGC-Thumbnail.jpg",
    name: "PHONE SHOT UGC",
    logo: "/assets/logo/My11.png",
    brand: "MANGALAM",
  },
];

const Cards = () => {
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
              <div className="rounded-lg shadow-lg border border-black">
                {/* Video or Thumbnail */}
                <div className="h-[400px] md:h-[300px]">
                  <video
                    className="h-full w-full object-contain"
                    preload="metadata"
                    loading="lazy" 
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
                      loading="lazy"
                      className="h-12 w-auto"
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

export default Cards;
