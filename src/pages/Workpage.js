import React, { useState, useRef } from "react";
import Navbar from "../component/navbar/Navbar";

const Workpage = () => {
  const categories = ["Show All", "UGC Videos", "Podcast", "Fashion", "Beauty"];

  const videos = [
    { id: 1, title: "Kay Beauty", category: "Fashion", video: "/assets/VideoHome.mp4" },
    { id: 2, title: "Ethnix by Raymond", category: "Fashion", video: "/assets/Video.mp4" },
    { id: 3, title: "Raniwala 1881", category: "Beauty", video: "/assets/Video.mp4" },
    { id: 4, title: "Raniwala 1881", category: "Beauty", video: "/assets/Video.mp4" },
    { id: 5, title: "Raniwala 1881", category: "Beauty", video: "/assets/Video.mp4" },
    { id: 6, title: "Raniwala 1881", category: "Beauty", video: "/assets/Video.mp4" },
    { id: 7, title: "Raniwala 1881", category: "Beauty", video: "/assets/Video.mp4" },    
    { id: 8, title: "Raniwala 1881", category: "Beauty", video: "/assets/Video.mp4" },
    { id: 9, title: "Raniwala 1881", category: "Beauty", video: "/assets/Video.mp4" },
    { id: 10, title: "Raniwala 1881", category: "Beauty", video: "/assets/Video.mp4" },
    
  ];

  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [modalVideo, setModalVideo] = useState(null);
  const videoRef = useRef(null);

  const filteredVideos =
    selectedCategory === "Show All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  const handleCloseModal = () => {
    setModalVideo(null);
  };

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-[#1c2321] text-white  px-4  pt-10 mt-20">
      
      <nav className="flex flex-wrap gap-4 border-b border-white pb-4 mb-6 justify-center md:justify-start">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`text-sm ${
              selectedCategory === category ? "text-white text-xl font-semibold" : "text-gray-400"
            } hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Video Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredVideos.map((video) => (
          <div key={video.id} className="relative group rounded-md overflow-hidden">
            {/* Video Element */}
            <video
              src={video.video}
              className="w-full h-40 object-cover rounded-lg"
              muted // Optionally mute the video to avoid autoplay issues
              />
            {/* Play Button Overlay */}
            <button
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition"
              onClick={() => setModalVideo(video.video)}
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
              </svg>
            </button>
            {/* Video Title */}
            <p className="mt-2 text-center text-sm font-semibold">{video.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalVideo && (
          <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
          >
          <div 
            className="relative w-11/12 md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Custom Close Button */}
            {/* <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 z-60"
              >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> */}

            {/* Video with Custom Controls */}
            <video
              ref={videoRef}
              src={modalVideo}
              className="w-full rounded-lg"
              controls
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
      </div>
  );
};

export default Workpage;