import React, { useState, useRef } from 'react';

const PodcastCard = ({ video, title, logo }) => {
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsClicked(true);
    }
  };

  return (
    <div className="relative group max-w-[220px] mx-auto">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
        <video
          ref={videoRef}
          src={video}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          muted={!isClicked}
          loop
          playsInline
          controls={isClicked}
          onClick={handleClick}
        />
        {!isClicked && (
          <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={handleClick}
              className="bg-[#f85a23] p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <svg
                className="w-8 h-8 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold text-[#cfc9a3]">{title}</h3>
        <img src={logo} alt={`${title} logo`} className="h-8 object-contain" />
      </div>
    </div>
  );
};

export default PodcastCard;
