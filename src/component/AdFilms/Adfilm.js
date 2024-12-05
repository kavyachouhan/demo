const items = [
  {
    id: 1,
    title: "TOP OF THE FUNNEL ADS",
    // video: "/assets/Digital Ad Films/Copy of HOME Ad film Video.mp4", // Local video
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Copy%20of%20HOME%20Ad%20film%20Video.mp4",
    desc: "Using these videos at the top of the funnel to grab attention and then retargeting the same audience with the bottom of the funnel UGC’s.",
    isVertical: false, // Horizontal video
  },
];

const Single = ({ item }) => {
  return (
    <section className="adfilm-section py-5">
      <div className="adfilm-container mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
        {/* Video Container */}
        <div className="adfilm-video-container flex-shrink-0 md:w-1/2 w-full">
          <video
            className="adfilm-video w-full h-auto rounded-lg shadow-lg"
            controls
            autoPlay
             preload="metadata"
             loading="lazy"
            muted
            loop
          >
            <source src={item.video} type="video/mp4" />
          </video>
        </div>

        {/* Text Container */}
        <div className="adfilm-text-container md:w-1/2 w-full text-center md:text-left">
          <h2 className="adfilm-title text-2xl md:text-3xl font-bold text-[#cfc9a3] mb-4">
            {item.title}
          </h2>
          <hr class="w-full max-w-[90%]  border-t-2 border-[#f85a23] my-2"/>
          <p className="adfilm-desc text-lg md:text-xl text-[#cfc9a3] mb-4">{item.desc}</p>
          {/* Uncomment the button below if needed */}
          {/* <button className="adfilm-button bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
            See Demo
          </button> */}
        </div>
      </div>
    </section>
  );
};

const Adfilm = () => {
  return (
    <div className="adfilm-portfolio">
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Adfilm;
