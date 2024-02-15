// HomeVideos.js

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../styles/HomeVideos.css";

const videoSources = [
  "./videos/home-video1.mp4",
  "./videos/home-video2.mp4",
  "./videos/home-video3.mp4",
  "./videos/home-video4.mp4",
  "./videos/home-video5.mp4",
  "./videos/home-video6 (3).mp4",
  "./videos/home-video7.mp4",
  "./videos/home-video8.mp4",
  // Add more video sources as needed
];

const HomeVideos = () => {
  const sliderRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1800, // Adjust as needed
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "-1px",
    afterChange: (currentSlide) => setPlayingIndex(currentSlide),
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="box-videos">
      <h2>Our Services</h2>
      <Slider ref={sliderRef} {...sliderSettings}>
        {videoSources.map((videoSource, index) => (
          <div className="video-item" key={index}>
            <video
              controls
              autoPlay={index === playingIndex}
              muted={index !== playingIndex}
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeVideos;
