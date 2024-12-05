import React from 'react';
import Podcast from './Podcast';

const Podcastpage = () => {
  return (
    <div className="">
      {/* Heading Section */}
      <div className="px-4 md:px-12 py-3 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#f85a23] font-display font-bold leading-tight">
          CONVERSATION WITH D2C FOUNDERS <br className="hidden lg:block" />
          AND MARKETERS
        </h1>
      </div>

      {/* Podcast Section */}
      <Podcast />
    </div>
  );
};

export default Podcastpage;
