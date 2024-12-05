import React, { useState, useRef, useEffect } from "react";

function CaseStudytwo() {
  const videoRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInteraction = () => {
    setHasInteracted(true);
  };

  useEffect(() => {
    if (!hasInteracted) return;

    const videoElement = videoRef.current;

    if (videoElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && videoElement && !videoElement.paused) {
            videoElement.play().catch((error) => {
              console.log("Autoplay blocked:", error);
            });
          } else {
            videoElement.pause();
          }
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(videoElement);

      return () => {
        observer.unobserve(videoElement);
      };
    }
  }, [hasInteracted]);

  const frameworkItems = [
    { letter: "H", description: "Hook: Grab attention fast." },
    { letter: "E", description: "Explain Value early." },
    { letter: "A", description: "Actor: Confident and relatable talent." },
    { letter: "T", description: "Trends: Tap into current platform relevant trends." },
    { letter: "C", description: "Call to Action: End with a strong CTA" },
  ];

  return (
    <div className="min-h-screen bg-[#1c2321] text-white" onClick={handleInteraction}>
      <div className="container mx-auto px-4">
        {/* Small and Medium Screens */}
        <div className="lg:hidden space-y-8">
          {/* HEAT Framework */}
          <div className="text-center md:px-20">
            <h1 className="text-[#f85a23] text-4xl sm:text-5xl font-bold mb-8">
              CASE STUDY
            </h1>
            <h2 className="text-[#E2D7C1] text-3xl sm:text-4xl mb-6 md:text-center">
              HEAT C Framework
            </h2>
            <div className="space-y-4 md:flex md:flex-col md:items-center">
              {frameworkItems.map(({ letter, description }) => (
                <div key={letter} className="flex items-start gap-2 md:max-w-[600px]">
                  <span className="text-[#f85a23] font-bold">{letter}</span>
                  <span className="text-[#E2D7C1] text-left">{description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="p-6 rounded-xl flex justify-center">
            <div className="h-[400px] w-full bg-[#1c2321] flex justify-center items-center rounded-md overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                   preload="metadata"
                  loading="lazy"
                  // src="/assets/Single ID/Single ID Free Pizza.mp4"
                  src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/%20Single%20ID%20Free%20Pizza.mp4"
                  controls
                  className="h-full max-h-[400px] w-auto rounded-md"
                />
              </div>
          </div>

          {/* Results Section */}
          <div className="text-center md:px-20">
            <h2 className="text-[#E2D7C1] text-3xl sm:text-4xl mb-6 md:text-center">
              Results
            </h2>
            <p className="text-[#E2D7C1] text-center md:max-w-[600px] md:mx-auto">
              Single ID achieved a remarkable 55% reduction in cost per card link,
              significantly enhancing engagement and conversion rates.
            </p>
          </div>
        </div>

        {/* Large Screens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <div className="p-6 rounded-xl flex justify-center">
            <div className="h-auto w-full bg-[#1c2321] flex justify-center items-center rounded-md overflow-hidden">
              <video
                autoPlay
                muted
                loop
                 preload="metadata"
                  loading="lazy"
                // src="/assets/Single ID/Single ID Free Pizza.mp4"
                src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/%20Single%20ID%20Free%20Pizza.mp4"
                controls
                className="w-full max-w-[270px] h-auto rounded-md"
              />
            </div>
          </div>

          {/* HEAT Framework */}
          <div className="space-y-4">
            <h1 className="text-[#f85a23] text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              CASE STUDY
            </h1>
            <h2 className="text-[#E2D7C1] text-3xl sm:text-4xl lg:text-4xl mb-6">
              HEAT C Framework
            </h2>
            <div className="space-y-4">
              {frameworkItems.map(({ letter, description }) => (
                <div key={letter} className="flex items-start gap-2 ">
                  <span className="text-[#f85a23] font-bold">{letter}</span>
                  <span className="text-[#E2D7C1]  ">{description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section for Large Screens */}
        <div className="hidden lg:block pl-10">
          <h2 className="text-[#E2D7C1] text-3xl sm:text-4xl lg:text-4xl mb-6 text-left">
            Results
          </h2>
          <div className="bg-gradient-to-r from-[#f85a23] to-[#1c2321] p-6 rounded-lg shadow-lg">
            <p className="text-[#E2D7C1]">
              Single ID achieved a remarkable 55% reduction in cost per card link,
              significantly enhancing engagement and conversion rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudytwo;