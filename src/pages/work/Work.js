// import React, { useState, useRef,useEffect } from "react";
// import Navbar from "../../component/navbar/Navbar";
// import Footer from "../../component/footer/Footer";

// const Work = () => {
//   const categories = ["Show All", "UGC Videos",  "Ad Film","Podcast", "Influencer"];

//   const videos = [
//     // {
//     //   id: 1,
//     //   title: "Sigle ID" ,
//     //   category: "UGC Videos",
//     //   video: "./assets/Single ID/SingleIDFreeSnacks.mp4",
//     //   isVertical: true,
//     //   thumbnail: "/assets/SingleIDfreeSnacksvideo.png",
//     // },
//     // {
//     //   id: 2,
//     //   title: "Sigle ID" ,
//     //   category: "UGC Videos",
//     //   video: "/assets/SingleIDFreePizza.mp4",
//     //   isVertical: true,
//     //   thumbnail: "/assets/SingleIDfreeSnacksvideo.png",
//     // },
//     // {
//     //   id: 3,
//     //   title: "bacca bucci" ,
//     //   category: "Podcast",
//     //   video: "/assets/Podcast/Ashneer Grover Reel.mp4",
//     //   isVertical: true,
//     //   thumbnail: "/assets/Podcast/11.png",
//     // },
//     // {
//     //   id: 4,
//     //   title: "bacca bucci" ,
//     //   category: "Podcast",
//     //   video: "/assets/Podcast/Vinita Said That Reel.mp4",
//     //   isVertical: true,
//     //   thumbnail: "/assets/Podcast/11.png",
//     // },
//     // {
//     //   id: 5,
//     //   title: "NCD Schabang " ,
//     //   category: "Podcast",
//     //   video: "/assets/Podcast/Pod Aditya Teaser.mp4",
//     //   isVertical: true,
//     //   thumbnail: "/assets/Podcast/11.png",
//     // },
//     // {
//     //   id: 6,
//     //   title: "CHTR Social" ,
//     //   category: "Podcast",
//     //   video: "/assets/Podcast/SnapSave.io-Meet Darshil Shah from @chtrsocial share the virality concept __ Viral Janta Karti Hai! Aap Nahi __.mp4",
//     //   isVertical: true,
//     //   thumbnail: "/assets/Podcast/11.png",
//     // },
//     {
//       id: 7,
//       title: "Fakeeh Hospital Dubai",
//       category: "Ad Film",
//       video: "/assets/Digital Ad Films/Fakeeh University Hospital Dubai.mp4",
//       isVertical: false,
//       thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
//     },
//     {
//       id: 8,
//       title: "Cult Fit",
//       category: "Ad Film",
//       video: "/assets/Digital Ad Films/Copy of cult_massager_ad (1440p).mp4",
//       isVertical: false,
//       thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
//     },
//     {
//       id: 9,
//       title: "Estuary",
//       category: "Ad Film",
//       video: "/assets/Digital Ad Films/Copy of HOME Ad film Video.mp4",
//       isVertical: false,
//       thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
//     },
//     // {
//     //   id: 10,
//     //   title: "Cult Fit",
//     //   category: "Ad Film",
//     //   video: "/assets/CultFitPromo.mp4",
//     //   isVertical: true,
//     //   thumbnail: "/assets/SingleIDfreeSnacksvideo.png",
//     // },
//     {
//       id: 11,
//       title: "Estuary" ,
//       category: "UGC Videos",
//       video: "/assets/Estuary/UGC Video.mp4",
//       isVertical: true,
//       thumbnail: "/assets/Estuary/4.png",
//     },
//     {
//       id: 12,
//       title: "Estuary" ,
//       category: "UGC Videos",
//       video: "/assets/Estuary/Home UGC Video.mp4",
//       isVertical: true,
//       thumbnail: "/assets/Estuary/Estuarycash1lakhvideo.png",
//     },
//     {
//       id: 13,
//       title: "Estuary" ,
//       category: "UGC Videos",
//       video: "/assets/Estuary/UGC.mp4",
//       isVertical: true,
//       thumbnail: "/assets/Estuary/Estuarywhiskeyfallingvideo.png",
//     },
//     {
//       id: 14,
//       title: "Lakme" ,
//       category: "Influencer",
//       video: "/assets/Influencer/Lakme1.mp4",
//       isVertical: true,
//       thumbnail: "/assets/Influencer/Lakme.jpg",
//     },
//     {
//       id: 15,
//       title: "Loreal" ,
//       category: "Influencer",
//       video: "/assets/Influencer/SameeraLoreal.mp4",
//       isVertical: true,
//       thumbnail: "/assets/Influencer/Loreal1.jpg",
//     },
//     {
//       id: 16,
//       title: "Vicks" ,
//       category: "Influencer",
//       video: "/assets/Influencer/VICKS02.mp4",
//       isVertical: true,
//       thumbnail: "/assets/Influencer/Vicks.jpg",
//     },
//     {
//       id: 17,
//       title: "Mangalam" ,
//       category: "UGC Videos",
//       video: "/assets/Mangalam/Celebration Box Hook 1.mp4",
//       isVertical: true,
//       thumbnail: "/assets/Mangalam/3.png",
//     },
//     {
//       id: 18,
//       title: "Mangalam" ,
//       category: "UGC Videos",
//       video: "/assets/Mangalam/Mangalam Giant Cone Hook 1.mp4",
//       isVertical: true,
//       thumbnail: "/assets/Mangalam/7.png",
//     },
//     {
//       id: 19,
//       title: "Mangalam" ,
//       category: "UGC Videos",
//       video: "/assets/Mangalam/Mangalam Liquid Vaporaiser Hook 1.mp4",
//       isVertical: true,
//       thumbnail: "/assets/Mangalam/1.png",
//     },
//     {
//       id: 20,
//       title: "My11Circle" ,
//       category: "UGC Videos",
//       video: "/assets/My11Circle/HOME Fighting (1080X1920).mp4",
//       isVertical: true,
//       thumbnail: "/assets/My11Circle/9.png",
//     },
//     {
//       id: 21,
//       title: "My11Circle" ,
//       category: "UGC Videos",
//       video: "/assets/My11Circle/Home Combo offer.mp4",
//       isVertical: true,
//       thumbnail: "/assets/My11Circle/10.png",
//     },
//     {
//       id: 22,
//       title: "Perfora" ,
//       category: "UGC Videos",
//       video: "/assets/Perfora/HOME Page Perfora UGC .mp4",
//       isVertical: true,
//       thumbnail: "/assets/Perfora/2.png",
//     },

//     {
//       id: 23,
//       title: "P-TAL" ,
//       category: "UGC Videos",
//       video: "/assets/P-TAL/HOME P-Tal Brass Dosa Tawa Hook 2.mp4",
//       isVertical: true,
//       thumbnail: "/assets/P-TAL/5.png",
//     },
//     {
//       id: 24,
//       title: "P-TAL" ,
//       category: "UGC Videos",
//       video: "/assets/P-TAL/HOMEP-TalBrassPatilaHook2.mp4",
//       isVertical: true,
//       thumbnail: "/assets/P-TAL/6.png",
//     },
    
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("Show All");
//   const [modalVideo, setModalVideo] = useState(null);
//   const [isVertical, setIsVertical] = useState(false);
//   const videoRef = useRef(null);

//   const filteredVideos = selectedCategory === "Show All" 
//     ? videos 
//     : videos.filter((video) => video.category === selectedCategory);

//   const handleOpenModal = (video) => {
//     setModalVideo(video.video);
//     setIsVertical(video.isVertical);
//   };

//   const handleCloseModal = () => {
//     setModalVideo(null);
//     setIsVertical(false);
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div>
//         <Navbar/>
//     <div className="min-h-screen bg-[#1c2321] text-white px-4 md:px-8 pt-14 my-9">
//       {/* Categories Nav */}
//       <nav className="flex flex-wrap gap-4 border-b border-white pb-4 mb-8">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`
//               px-4 py-2 rounded-full transition-all duration-300
//               ${selectedCategory === category 
//                 ? "bg-white text-black font-semibold" 
//                 : "text-gray-400 hover:text-white hover:bg-gray-800"
//               }
//             `}
//           >
//             {category}
//           </button>
//         ))}
//       </nav>

//       {/* Masonry Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[200px]">
//         {filteredVideos.map((video) => (
//           <div 
//             key={video.id} 
//             className={`
//               relative group rounded-lg overflow-hidden aspect-sqaure w-full transition-transform duration-300 hover:scale-[1.02]
//               ${video.isVertical ? 'row-span-2' : 'row-span-1'}
//             `}
//             // style={{
//             //   height: video.isVertical ? 'auto' : 'auto',
            
//             // }}
//           >
//             {/* Video Thumbnail */}
//             <div 
//               className="absolute inset-0 bg-cover bg-top"
//               style={{ backgroundImage: `url(${video.thumbnail})` }}
//             />
            
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <button
//                   onClick={() => handleOpenModal(video)}
//                   className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all duration-300"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     className="w-8 h-8"
//                   >
//                     <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//                 <h3 className="mt-4 text-lg font-semibold text-white">{video.title}</h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {modalVideo && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
//           onClick={handleCloseModal}
//         >
//           <div 
//             className={`relative max-w-7xl mx-auto ${isVertical ? 'w-[480px]' : 'w-full'}`}
//             onClick={(e) => e.stopPropagation()}
//             >
//             <button
//               onClick={handleCloseModal}
//               className="absolute -top-12 right-0 text-white hover:text-gray-300"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="w-8 h-8"
//               >
//                 <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <video
//               ref={videoRef}
//               src={modalVideo}
//               className="w-full rounded-lg shadow-2xl"
//               style={{
//                 maxHeight: '85vh',
//                 objectFit: isVertical ? 'contain' : 'cover',
//               }}
//               controls
//               autoPlay
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       )}
//     </div>
//     <Footer/>
//               </div>
//   );
// };

// export default Work;




import React, { useState, useRef } from "react";
import Footer from "../../component/footer/Footer";

const VideoGallery = () => {
  const categories = ["Show All", "UGC Videos", "Podcast", "Fashion", "Beauty"];

  const videos = [
    // Video data as provided earlier
    {id: 1,
    title: "Mangalam",
    category: "UGC Videos",
    // video: "/assets/Digital Ad Films/Copy of HOME Ad film Video.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Mangalam%20Liquid%20Vaporaiser%20Hook%201.MP4",
    isVertical: false,
    thumbnail: "/assets/Thumbnail/MangalamLiquidVaporaiserHook1.png",
  },
  {id: 2,
    title: "Perfora",
    category: "UGC Videos",
    // video: "/assets/Digital Ad Films/Copy of HOME Ad film Video.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/HOME%20Page%20Perfora%20UGC%20.mp4",
    isVertical: false,
    thumbnail: "/assets/Thumbnail/HOMEPagePerforaUGC.png",
  },
  {id: 3,
    title: "Estuary",
    category: "UGC Videos",
    // video: "/assets/Digital Ad Films/Copy of HOME Ad film Video.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/UGC%20Video.mp4",
    isVertical: false,
    thumbnail: "/assets/Thumbnail/UGCVideo.png",
  },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [modalVideo, setModalVideo] = useState(null);
  const [isVertical, setIsVertical] = useState(false);
  const videoRef = useRef(null);

  const filteredVideos = selectedCategory === "Show All" 
    ? videos 
    : videos.filter((video) => video.category === selectedCategory);

  const handleOpenModal = (video) => {
    setModalVideo(video.video);
    setIsVertical(video.isVertical);
  };

  const handleCloseModal = () => {
    setModalVideo(null);
    setIsVertical(false);
  };

  return (
    <>
    <div className="min-h-screen bg-[#1c2321] text-white px-4 py-16 md:px-8">
      {/* Categories Nav */}
      <nav className="flex flex-wrap gap-4 border-b border-gray-700 pb-4 mb-8">
        {categories.map((category) => (
          <button
          key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-4 py-2 rounded-full transition-all duration-300
              ${selectedCategory === category 
                ? "bg-white text-black font-semibold" 
                : "text-gray-400 hover:text-white hover:bg-gray-800"
              }
              `}
              >
            {category}
          </button>
        ))}
      </nav>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <div 
          key={video.id} 
            className="relative group rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            style={{
              width: '100%',
              paddingBottom: '100%', // Maintain 1:1 aspect ratio
            }}
            >
            {/* Thumbnail */}
            <div 
              className="absolute inset-0 bg-cover bg-center top-0 "
              style={{ backgroundImage: `url(${video.thumbnail})` }}
              />

            {/* Play Button */}
            <button
  onClick={() => handleOpenModal(video)}
  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12 text-white bg-opacity-50 backdrop-blur rounded-full"
    >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
      clipRule="evenodd"
      />
  </svg>
</button>

          </div>
        ))}
      </div>

      {/* Modal */}
      {/* Modal */}
{modalVideo && (
  <div 
  className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
  onClick={handleCloseModal}
  >
    <div 
      className={`relative ${isVertical ? 'max-w-[480px]' : 'max-w-7xl'} w-full mx-auto`}
      onClick={(e) => e.stopPropagation()}
      >
      <button
        onClick={handleCloseModal}
        className="absolute -top-12 right-0 text-white hover:text-gray-300"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
          >
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
      <video
  ref={videoRef}
  src={modalVideo}
  className="w-full rounded-lg shadow-2xl max-h-[85vh] sm:max-w-[480px] md:max-w-[720px] lg:max-w-[1080px] mx-auto"
  style={{
    objectFit: 'contain',
  }}
  controls
  preload="metadata"
  loading="lazy"
  autoPlay
>
  Your browser does not support the video tag.
</video>

    </div>
  </div>
)}

    </div>
    <Footer/>
</>
  );
};

export default VideoGallery;



