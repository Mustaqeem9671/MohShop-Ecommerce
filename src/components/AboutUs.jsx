import React from "react";
import "../styles/About.css";
import mustaqeemImage from "./image/foundar.jpeg"; // Replace with the actual path to the image
import model1 from "./image/virat3.jpg";
import model2 from "./image/srkimage.png";
import model3 from "./image/alluimage.jpg";
import model4 from "./image/saif.jpg";
import model5 from "./image/ram.jpg";
import model6 from "./image/dulkar.jpg";
import model7 from "./image/srkimage.png";
import model8 from "./image/salman.jpg";
import model9 from "./image/tomimage.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="founder-introduction">
        <div className="founder-image">
          <img src={mustaqeemImage} alt="Mustaqeem" />
        </div>
        <div className="founder-text">
          <h2>
            Mohammed Mustaqeem, <span>founder-----------</span>
          </h2>
          <p>
            Hi, I'm Mustaqeem, the founder of MohShop. Hailing from Haryana, I
            embarked on this journey in March 2021. The initial days were
            challenging, but I held firm to the belief that with dedication and
            perseverance, MohShop would emerge as one of the leading businesses
            in our country.
          </p>
          <p>
            We are a local e-commerce company committed to creating a
            sustainable business that fosters inclusive and impactful growth for
            all our partners. We embrace transformative innovation and aren't
            afraid to take risks. Instead of shying away from failure, we see it
            as an opportunity to learn. Our goal is to enhance customer
            experiences and bridge the gap between Bharat and India through
            digital commerce.
          </p>
        </div>
      </div>

      <div className="ecommerce-details">
        <h1
          style={{
            color: "red",
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "28px",
            textDecoration: "underline",
          }}
        >
          About
        </h1>
        <h2>MohShop</h2>
        <p>
          Established in 2007, Flipkart has empowered millions of sellers,
          merchants, and small businesses to be part of India's digital commerce
          revolution. With a registered customer base exceeding 500 million,
          Flipkart's marketplace offers a diverse range of over 150 million
          products across 80+ categories. Currently, there are over 14 lakh
          sellers on the platform, including Shopsy sellers. With a commitment
          to empowering and delighting every Indian through technology and
          innovation, Flipkart has generated lakhs of jobs in the ecosystem,
          fostering the growth of entrepreneurs and MSMEs. Flipkart is
          recognized for pioneering services like Cash on Delivery, No Cost EMI,
          and easy returns – customer-centric innovations that have made online
          shopping more accessible and affordable for millions of Indians.
        </p>
        {/* Add more details as needed */}
      </div>

        <h1 style={{ textAlign:"center" }}>Meet our <span style={{ fontStyle:"italic", color:"red" }} >models</span></h1>
      <div className="meet-our-people">
        <div className="person">
          <img src={model1} alt="Person 1" />
          <p>Name 1</p>
          <p>Name 1</p>
        </div>
        <div className="person">
          <img src={model2} alt="Person 2" />
          <p>Name 2</p>
        </div>
        <div className="person">
          <img src={model3} alt="Person 3" />
          <p>Name 3</p>
        </div>
        <div className="person">
          <img src={model3} alt="Person 3" />
          <p>Name 3</p>
        </div>
        <div className="person">
          <img src={model4} alt="Person 3" />
          <p>Name 3</p>
        </div>
        <div className="person">
          <img src={model5} alt="Person 3" />
          <p>Name 3</p>
        </div>
        <div className="person">
          <img src={model6} alt="Person 3" />
          <p>Name 3</p>
        </div>

        <div className="person">
          <img src={model8} alt="Person 3" />
          <p>Name 3</p>
        </div>
        <div className="person">
          <img src={model9} alt="Person 3" />
          <p>Name 3</p>
        </div>
        {/* <!-- Add more persons as needed --> */}
      </div>
    </div>
  );
};

export default AboutUs;
