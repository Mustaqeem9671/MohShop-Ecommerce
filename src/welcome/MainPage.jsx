import React, { useRef, useEffect, useState } from "react";
import "./WecomePage.css"; // Create a separate CSS file for styling
import Logo1 from "../components/image/logo1.jpeg";
import bgMusic1 from "../components/audiio/better-day.mp3";
import bgMusic2 from "../components/audiio/throwback-177263.mp3";
import animVideo1 from "../components/videos/animVideo.mp4";
import video2 from "../components/videos/video2.mp4";
import video3 from "../components/videos/video3.mp4";
import video4 from "../components/videos/video4.mp4";
import video5 from "../components/videos/video5.mp4";
import LogoWight from "../components/image/logo-wight.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  const videos = [ video2, video3, video4, video5];
  const bgMusics = [bgMusic1, bgMusic2];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMusicPlaying, setMusicPlaying] = useState(true);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const logoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    // Change music when a video completes
    audioRef.current.src = bgMusics[currentVideoIndex];
    audioRef.current.play();
  };

  const handleDoubleClick = () => {
    setMusicPlaying((prevValue) => !prevValue);
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const logo = logoRef.current;
      if (logo) {
        const scrollY = window.scrollY;
        logo.style.transform = `translateY(${scrollY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Reset video playback when the current video index changes
    videoRef.current.load();
  }, [currentVideoIndex, setCurrentVideoIndex]);

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  return (
    <div
      className="welcome-page"
      onClick={handleDoubleClick}
      onDoubleClick={(e) => e.preventDefault()}
    >
      <div className="video-container">
        <video ref={videoRef} autoPlay loop muted onEnded={handleVideoEnd}>
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <audio ref={audioRef} loop>
          <source src={bgMusics[currentVideoIndex]} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>

      <div className="content">
        <h1 className="welcome-text">Welcome to Our Shop</h1>
        <div className="about-business">
          <p>Explore the latest trends in online clothing.</p>
          <p>Find exclusive styles for every occasion.</p>
          <p>Quality fashion delivered to your doorstep.</p>
          <p>Experience the convenience of online shopping.</p>
        </div>

        <div className="logo-container">
          {/* Logo source should be replaced with the actual logo image */}
          <img
            ref={logoRef}
            className="main-logo"
            src={Logo1}
            alt="Main Logo"
          />
        </div>

        <div className="buttons">
          <Link to="/loginPage" className="login-button">
            Login
          </Link>
          <Link to="/newuserRegister" className="new-user-button">
            New User
          </Link>
        </div>
      </div>
      <div className="logo-left">
        <img src={LogoWight} alt="Logo" />
      </div>
      <div className="logo-follow">
        <img src={Logo1} alt="Logo" />
      </div>
    </div>
  );
};

export default MainPage;
