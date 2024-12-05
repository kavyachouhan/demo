import { useRef } from "react";
import "./adfilms.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Updated the item array to include the YouTube video URL for id 3
const items = [
 
  {
    id: 1,
    title: "In Association with Vyshakh Sudhakaran",
    // video: "/assets/Digital Ad Films/Copy of cult_massager_ad (1440p).mp4", // Local video
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Copy%20of%20cult_massager_ad%20(1440p).mp4",
    desc: "Right use of VFX to grab attention and to amplify the key value preposition of curing body stiffness with the gun massager.",
    isVertical: false, // Vertical video
  },
  {
    id: 2,
    title: "In Association with The Sassy Insights",
    video: "", // No local video
    youtubeEmbedLink: "https://www.youtube.com/embed/mk50ZsxCe0c?si=SDWNdg1cUj3HovXF", // YouTube embed link
    desc: "LA game show format allows to drive higher engagement and extended watch time. It builds better brand recall value in the long run",
    isVertical: false, // Vertical video
  },
  {
    id: 3,
    title: "In Association with Vyshakh Sudhakaran",
    // video: "/assets/Digital Ad Films/Fakeeh University Hospital Dubai.mp4", // Local video
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Fakeeh%20University%20Hospital%20Dubai.mp4",
    desc: "Fakeeh University Hospital approached us with a clear vision: to highlight their patient centric approach. Using impactful VFX, we visually amplified their message",
    isVertical: false, // Vertical video
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  // Check if the video source is a YouTube link
  const isYouTube = item.youtubeEmbedLink && item.youtubeEmbedLink !== "";
  const videoClass = item.isVertical ? "verticalVideo" : "horizontalVideo";

  // Highlight specific words for titles of videos with id 1 and 3
  const getTitle = () => {
    if (item.id === 1) {
      return (
        <>
          In Association with <br/> 
          <span style={{ color: "#f85a23" }}>Vyshakh Sudhakaran</span>
          <hr class="w-full max-w-[90%]  border-t-2 border-[#f85a23] my-2"/>
        </>
      );
    } else if (item.id === 2) {
      return (
        <>
          In Association with <br/>
          <span style={{ color: "#f85a23" }}>The Sassy Insights</span>
          <hr class="w-full max-w-[90%]  border-t-2 border-[#f85a23] my-2"/>

        </>
      );
    }
    else if (item.id === 3) {
      return (
        <>
          In Association with <br/>
          <span style={{ color: "#f85a23" }}>Vyshakh Sudhakaran</span>
          <hr class="w-full max-w-[90%]  border-t-2 border-[#f85a23] my-2"/>
        </>
      );
    }
    return item.title;
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper flex justify-center items-center">
          <div className="imageContainer " ref={ref}>
            {isYouTube ? (
              // Render the YouTube embed if the link is provided
              <iframe
                className={`video ${videoClass}`}
                width="100%"
                height="315"
                src={item.youtubeEmbedLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              // Render local video for other items
              <video
                className={`video ${videoClass}`}
                controls
                preload="metadata"
                loading="lazy" 
                width="100%"
                autoPlay
                muted
                loop
              >
                <source src={item.video} type="video/mp4" />
              </video>
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{getTitle()}</h2>
            <p className="text-[#cfc9a3]">{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Adfilms = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
   
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.div style={{ scaleX }} className="progressBar mt-10"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
        
      ))}
    </div>
  );
};

export default Adfilms;
