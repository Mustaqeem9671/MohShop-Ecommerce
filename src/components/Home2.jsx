import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "../styles/Home2.css";
// import homeCoverImage1 from "./image/main-cover.avif";
import homeCoverImage2 from "./image/coverpage.avif";
import homeCoverImage3 from "./image/cover-image1.avif";
import homeCoverImage4 from "./image/cover-image2.avif";
import homeCoverImage5 from "./image/cover-image3.avif";
import { Link } from "react-router-dom";
import HomeVideos from "./HomeVideos";
import menIcon from "./image/men-icon.png";
import womenIcon from "./image/women-icon.jpeg";
import childIcon from "./image/child-icon.png";
import Footer from "./Footer";
import HomeTrendings from "./HomeTrendings";
import WhatsappScan from "./WhatsappScan";

const images = [
  // homeCoverImage1,
  homeCoverImage2,
  homeCoverImage3,
  homeCoverImage4,
  homeCoverImage5,
];

const bestSellerImages = [
  //best seller
  homeCoverImage2,
  homeCoverImage3,
  homeCoverImage4,
  homeCoverImage5,
];

const Home2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const bestSellerSettings = {
    dots: true,
    infinite: true,
    speed: 1800, // Set a slower speed 
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2, 
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: "-1px", 
  };

  return (
    <div className="home-2">
      <div className="home-2-img">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
          <div className="image-text-overlay">
        <div className="text">
          <h1>Digital Libray</h1> <hr />
          <p>
            When the Libraries are closed, use our convenient book drops to
            return materials. Visit our Digital Library for 24/7 access to
            eBooks, audiobooks, magazines, movies, music, learning and more.
          </p>
          <input type="button" value="Learn ->" />
        </div>
      </div>
      </div>

      <div className="boxes">
        <h2>Best Seller</h2>
        <Slider {...bestSellerSettings}>
          {bestSellerImages.map((bestSellerImage, index) => (
            <div key={index} className="box-image">
              <img src={bestSellerImage} alt={`Best Seller ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="home-category">
        <h2>Select Category</h2>
        <div className="category-box">
          <Link to="/category/*">
            <div className="category-item">
              <img src={menIcon} alt="Men" />
              <p>Men</p>
            </div>
          </Link>
          <Link to="/women">
            <div className="category-item">
              <img src={womenIcon} alt="Women" />
              <p>Women</p>
            </div>
          </Link>
          <Link to="/children">
            <div className="category-item">
              <img src={childIcon} alt="Children" />
              <p>Children</p>
            </div>
          </Link>
        </div>
      </div>

      <HomeTrendings />
      <HomeVideos />
      <WhatsappScan />
      <Footer />
    </div>
  );
};

export default Home2;
