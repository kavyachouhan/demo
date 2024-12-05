import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoLoader = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    // After the video ends, navigate to the homepage
    navigate('/');
  };

  return (
    <div style={styles.loaderContainer}>
      <video
        autoPlay
        muted
        onEnded={handleVideoEnd} // Trigger the navigation after the video ends
        style={styles.videoStyle}
      >
        <source src="/assets/animated-logo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// Styles
const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#1c2321', // Dark background for contrast
    color: 'white',
    fontFamily: "'Arial', sans-serif",
  },
  videoStyle: {
    width: '100%', // Makes the video fill the container
    height: 'auto', // Maintains aspect ratio
    objectFit: 'cover', // Ensure the video covers the container without distorting the aspect ratio
  },
};

export default VideoLoader;
