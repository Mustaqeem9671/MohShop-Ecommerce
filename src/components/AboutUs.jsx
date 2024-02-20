import React from "react";
import "../styles/About.css";
import mustaqeemImage from "./image/foundar.jpeg";
// model
import model1 from "./image/virat3.jpg";
import model2 from "./image/srkimage.png";
import model3 from "./image/alluimage.jpg";
import model4 from "./image/saif.jpg";
import model5 from "./image/ram.jpg";
import model6 from "./image/dulkar.jpg";
import model7 from "./image/jackie2.jpg";
import model8 from "./image/salman.jpg";
import model9 from "./image/tomimage.jpg";

// our team
import CEO from "./image/ceo.jpg";
import Department from "./image/dpartment head.jpg";
import TechnicalSupport from "./image/tech suppot.jpg";
import COO from "./image/coo.jpg";
import Recruitment from "./image/reqeutment head.jpg";
import delivery from "./image/head of delivery.jpg";

import cultureinmohshop from "./image/technology-image.png";
import ourpackaging from "./image/package-box-2.jpg";

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
      {/* about section  */}
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
          Established in March 2021, MohShop has helped millions of sellers,
          merchants, and small businesses join India's digital commerce
          revolution. With over 150 million registered customers, MohShop offers
          a wide variety of products across 50+ categories, and we're always
          adding more. Currently, we have thousands of sellers on our platform,
          including local sellers. We're dedicated to empowering every Indian
          through technology and innovation, creating jobs and supporting the
          growth of entrepreneurs. MohShop is known for services like Cash on
          Delivery, No Cost EMI, and easy returns, making online shopping easier
          and more affordable for millions of people.
        </p>
        <p>
          In our country, we're a platform that offers various services for
          different needs. In the future, we're coming up with new ways to
          deliver orders faster. We're the first e-commerce service to provide
          services before the deadline. Our team always ensures that we deliver
          products that are not faulty. If, by chance, there's a mistake, we
          take immediate action and offer discounts to affected customers.
        </p>
        {/* Add more details as needed */}
      </div>

      {/* employees policy  */}
      <div className="emp--policy">
        <h3>Employee Policy</h3>
        <p>
          At MohShop, we don't just look after our employees; we also make sure
          they can support their families. Our new employee policies are all
          about prioritizing health and well-being. We offer support for
          families, extra medical coverage, and flexible insurance plans. We're
          introducing initiatives like vaccination drives, health check-ups, and
          financial help during emergencies. The Flipkart Group is committed to
          meeting our employees' needs with care and urgency.
        </p>
      </div>

      {/* our team  */}
      <h1 style={{ textAlign: "center", marginTop: "3%" }}>
        Meet our <span style={{ fontStyle: "italic", color: "red" }}>Team</span>
      </h1>
      <div className="our-team--members">
        <div className="team---members">
          <img src={CEO} alt="Person 1" />
          <p>CEO </p>
          <h3>Mr Joseph William</h3>
        </div>
        <div className="person">
          <img src={COO} alt="Person 2" />
          <p>COO</p>
          <h3>Mr Abraham </h3>
        </div>
        <div className="person">
          <img src={Department} alt="Person 3" />
          <p>Head of Departments</p>
          <h3>Ismail Shiekh</h3>
        </div>
        <div className="person">
          <img src={Recruitment} alt="Person 3" />
          <p>Head of Recruitment</p>
          <h3>Shrelay Jhon</h3>
        </div>
        <div className="person">
          <img src={TechnicalSupport} alt="Person 3" />
          <p>Tech Head </p>
          <h3>Wongh Wohon</h3>
        </div>
        <div className="person">
          <img src={delivery} alt="Person 3" />
          <p>Head of Delivery Department</p>
          <h3>William Chris</h3>
        </div>
        {/* <!-- Add more persons as needed --> */}
      </div>

      {/* meet our model  */}
      <h1 style={{ textAlign: "center", marginTop: "3%" }}>
        Meet our{" "}
        <span style={{ fontStyle: "italic", color: "red" }}>models</span>
      </h1>
      <div className="meet-our-people">
        <div className="person">
          <img src={model1} alt="Person 1" />
          <p>Sports </p>
          <h3>Virat Kohli</h3>
        </div>
        <div className="person">
          <img src={model9} alt="Person 2" />
          <p>Weastern Men Fashion</p>
          <h3>Tom Cruise</h3>
          {/* <p style={{ paddingLeft: "5%", color: "#333" }}>American Actor</p> */}
        </div>
        <div className="person">
          <img src={model6} alt="Person 3" />
          <p>Indian Weastern </p>
          <h3>dulquer salmaan</h3>
        </div>
        <div className="person">
          <img src={model3} alt="Person 3" />
          <p>South Model</p>
          <h3>Allu Arjun</h3>
        </div>
        <div className="person">
          <img src={model4} alt="Person 3" />
          <p>Indian Weddings</p>
          <h3>Saif Ali Khan</h3>
        </div>
        <div className="person">
          <img src={model5} alt="Person 3" />
          <p>South Model</p>
          <h3>Ram Charan</h3>
        </div>
        <div className="person">
          <img src={model2} alt="Person 3" />
          <p>Bollywod Model</p>
          <h3>Shahrukh Khan</h3>
        </div>

        <div className="person">
          <img src={model8} alt="Person 3" />
          <p>Fitness </p>
          <h3>Salman Khan</h3>
        </div>
        <div className="person">
          <img src={model7} alt="Person 3" />
          <p>Chinese Culture</p>
          <h3>jackie chan</h3>
        </div>
        {/* <!-- Add more persons as needed --> */}
      </div>


      {/* culture section  */}
      <div className="culture--in--mohshop">
        <img src={cultureinmohshop} alt="" />
        <div className="culture--text">
          <h3>TECHNOLOGY AT MohShop</h3>
          <h1>INNOVATION</h1>
          <p>
            At MohShop, our technology is all about creating innovative
            solutions that focus on customers. We make sure that Indian shoppers
            can easily access top-quality products online. Our goal is to make
            the online shopping experience convenient, easy to use, and smooth.
          </p>
          <div className="package-btn">
            <button className="btn btn-primary">READ MORE</button>
          </div>
        </div>
      </div>

      {/* package section  */}
      <div className="our-packaging">
        <h1>Preservation</h1>
        <div className="package--details ">
          <img src={ourpackaging} alt="" />
          <p>
            The future of online shopping is focused on being environmentally
            friendly, fair, and accessible to everyone. As we make improvements
            in how we do things, our goal is to have a positive effect on the
            environment and the people in our communities.
          </p>
        </div>
        <div className="package-btn ">
          <button className="btn btn-primary">know more</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
