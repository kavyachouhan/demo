import React from 'react';

const Start = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* Video element */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/VideoHome.mp4"  // Replace with your video URL
        autoPlay
        loop
        muted
      />
      
      {/* Overlay content (if any, such as a title or other information) */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
        Welcome to Meet's <span style={{ color: 'orange' }}> Ladies ERA</span>

        </h1>
      </div>
    </div>
  );
};

export default Start;
