import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Ensure Autoplay module is imported
import PodcastCard from './PodcastCard';
import 'swiper/css';
import './swiper.css';

const podcasts = [
  {
    title: 'Sharktank brand',
    video: '/assets/Estaury.mp4',
    logo: 'https://i.ibb.co/CwdfGHx/bacca-bucci.png',
  },
  {
    title: 'NCD Schbang',
    video: '/assets/Perfora.mp4',
    logo: 'https://i.ibb.co/f4KfXVt/schbang.png',
  },
  {
    title: 'Jheel Mehta TMKOC',
    video: '/assets/P-tal.mp4',
    logo: 'https://i.ibb.co/Yj8pMF8/tmkoc.png',
  },
  {
    title: 'Founder of Chtr Social',
    video: '/assets/Mangalam.mp4',
    logo: 'https://i.ibb.co/9tGxc6Z/chtr-social.png',
  },
  {
    title: 'Founder of Chtr Social',
    video: '/assets/Mangalam.mp4',
    logo: 'https://i.ibb.co/9tGxc6Z/chtr-social.png',
  },
];

const PodcastSwiper = () => {
  return (
    <div className="relative bg-[#1c2321] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10} // Reduced space between slides
          slidesPerView={4} // Default to 4 slides
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 card on small screens
            640: { slidesPerView: 2 }, // 2 cards on medium screens
            768: { slidesPerView: 3 }, // 3 cards on larger screens
            1024: { slidesPerView: 4 }, // 4 cards on wide screens
          }}
          className="podcast-swiper"
        >
          {podcasts.map((podcast, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <PodcastCard {...podcast} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PodcastSwiper;
