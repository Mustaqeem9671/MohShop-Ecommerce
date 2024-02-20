import React, { useState } from "react";
import "../styles/HomeTrending.css";
//   trending items
import trend1 from "./image/men-trending.webp";
import trend2 from "./image/men-trending2.webp";
import trend3 from "./image/men-trending3.webp";
import trend4 from "./image/women-trending.avif";
import trend5 from "./image/women-trending2.avif";
import trend6 from "./image/women-trending3.jpeg";
import trend7 from "./image/women-trending4.jpeg";
import trend8 from "./image/women-trending5.jpeg";
import trend9 from "./image/women-trending6.jpeg";
import trend10 from "./image/women-trending7.jpeg";
import trend11 from "./image/men-trending4.webp";
import trend12 from "./image/men-trending5.webp";
import trend13 from "./image/men-trending6.jpeg";
import trend14 from "./image/men-trending7.jpeg";
import trend15 from "./image/women-trending8.webp";
import trend16 from "./image/women-trending9.webp";
import trend17 from "./image/men-trending7.jpeg";
import trend18 from "./image/men-trending8.jpeg";
// ... (import other images as needed)

// trending footwears
import foottrend1 from "./image/men-campus.webp";
import foottrend2 from "./image/men-puma.webp";
import foottrend3 from "./image/women-skechers.webp";
import foottrend4 from "./image/men-skechers.webp";
import foottrend5 from "./image/women-puma5.webp";
import foottrend6 from "./image/men-pleto.webp";
import foottrend7 from "./image/women-puma5.webp";
import foottrend8 from "./image/men-asian.webp";
import foottrend9 from "./image/women-crocs2.webp";
import foottrend10 from "./image/men-baccabucci.webp";
import foottrend11 from "./image/women-crocs.webp";

const trendingItems = [
  {
    id: 1,
    image: trend1,
    title: "Elegant Shirt",
    brand: "FashionHub",
    price: "₹1499",
  },
  {
    id: 2,
    image: trend2,
    title: "Stylish Jacket",
    brand: "UrbanStyle",
    price: "₹2199",
  },
  {
    id: 3,
    image: trend3,
    title: "Casual Jeans",
    brand: "TrendyWear",
    price: "₹2999",
  },
  {
    id: 4,
    image: trend4,
    title: "Sporty Sneakers",
    brand: "ChicClothing",
    price: "₹3999",
  },
  {
    id: 5,
    image: trend5,
    title: "Formal Suit",
    brand: "StyleMasters",
    price: "₹4999",
  },
  {
    id: 6,
    image: trend6,
    title: "Cozy Sweater",
    brand: "FashionHub",
    price: "₹1499",
  },
  {
    id: 7,
    image: trend7,
    title: "Trendy Dress",
    brand: "UrbanStyle",
    price: "₹2199",
  },
  {
    id: 8,
    image: trend8,
    title: "Classic T-shirt",
    brand: "TrendyWear",
    price: "₹2999",
  },
  {
    id: 9,
    image: trend9,
    title: "Casual Sneakers",
    brand: "ChicClothing",
    price: "₹3999",
  },
  {
    id: 10,
    image: trend10,
    title: "Denim Jeans",
    brand: "StyleMasters",
    price: "₹4999",
  },
  {
    id: 11,
    image: trend11,
    title: "Printed Shirt",
    brand: "FashionHub",
    price: "₹1499",
  },
  {
    id: 12,
    image: trend12,
    title: "Leather Jacket",
    brand: "UrbanStyle",
    price: "₹2199",
  },
  {
    id: 13,
    image: trend13,
    title: "Summer Dress",
    brand: "TrendyWear",
    price: "₹2999",
  },
  {
    id: 14,
    image: trend14,
    title: "Athletic Shoes",
    brand: "ChicClothing",
    price: "₹3999",
  },
  {
    id: 15,
    image: trend15,
    title: "Winter Coat",
    brand: "StyleMasters",
    price: "₹4999",
  },
  {
    id: 16,
    image: trend16,
    title: "Cropped Pants",
    brand: "FashionHub",
    price: "₹1499",
  },
  {
    id: 17,
    image: trend16,
    title: "Striped Sweater",
    brand: "UrbanStyle",
    price: "₹2199",
  },
  {
    id: 18,
    image: trend17,
    title: "Denim Skirt",
    brand: "TrendyWear",
    price: "₹2999",
  },
  // ... Include other items with different titles, brands, and prices
];

const trendingFootwears = [
  {
    id: 1,
    image: foottrend1,
    title: "Casual Sneakers",
    brand: "FashionHub",
    price: "₹1499",
  },
  {
    id: 2,
    image: foottrend2,
    title: "Sporty Shoes",
    brand: "UrbanStyle",
    price: "₹2199",
  },
  {
    id: 3,
    image: foottrend3,
    title: "Comfortable Sandals",
    brand: "TrendyWear",
    price: "₹2999",
  },
  {
    id: 4,
    image: foottrend4,
    title: "Running Shoes",
    brand: "ChicClothing",
    price: "₹3999",
  },
  {
    id: 5,
    image: foottrend5,
    title: "Fashionable Boots",
    brand: "StyleMasters",
    price: "₹4999",
  },
  {
    id: 6,
    image: foottrend6,
    title: "Classic Loafers",
    brand: "FashionHub",
    price: "₹1499",
  },
  {
    id: 7,
    image: foottrend7,
    title: "Stylish Flats",
    brand: "UrbanStyle",
    price: "₹2199",
  },
  {
    id: 8,
    image: foottrend8,
    title: "Athletic Shoes",
    brand: "TrendyWear",
    price: "₹2999",
  },
  {
    id: 9,
    image: foottrend9,
    title: "Casual Sandals",
    brand: "ChicClothing",
    price: "₹3999",
  },
  {
    id: 10,
    image: foottrend10,
    title: "Formal Shoes",
    brand: "StyleMasters",
    price: "₹4999",
  },
  {
    id: 11,
    image: foottrend11,
    title: "Comfortable Slippers",
    brand: "FashionHub",
    price: "₹1499",
  },
  // Add more items as needed
];

const HomeTrendings = () => {
  const [displayedItems, setDisplayedItems] = useState(4);
  const [displayFootwears, setDisplayedFootwears] = useState(4);

  const handleSeeMore = () => {
    setTimeout(() => {
      setDisplayedItems((prev) => prev + 4);
    }, 1000);
  };

  const handleClose = () => {
    setTimeout(() => {
      setDisplayedItems(4);
    }, 500);
  };

  const handleSeeMoreFootwears = () => {
    setTimeout(() => {
      setDisplayedFootwears((prev) => prev + 4);
    }, 1000);
  };

  const handleCloseFootwears = () => {
    setTimeout(() => {
      setDisplayedFootwears(4);
    }, 500);
  };

  return (
    <div className="home-trendings">
      <div className="dress-trending-slider-text">
        <marquee behavior="scroll" direction="left">
          <p>DRESSES TRENDING NOW</p>
        </marquee>
      </div>
      <div className="dress-trending-text">
        <h2>Elevate Your Style with our Trending Dresses</h2>
        <p>
          Indulge in the latest fashion trends and redefine your wardrobe with
          our exclusive collection of dresses. Whether you're looking for casual
          chic or a statement piece for a special occasion, we have something
          for every style.
        </p>
        <p>
          From vibrant prints to timeless classics, our trending dresses are
          carefully curated to keep you ahead in the fashion game. Explore the
          perfect blend of comfort and style, and make a lasting impression
          wherever you go.
        </p>
        <p>
          Refresh your wardrobe and embrace the season's hottest looks. Shop now
          and discover the joy of expressing yourself through fashion!
        </p>
      </div>

      <div className="dress-trending">
        <h1>Trending In Dresses</h1>
        <div className="trendings-grid">
          {trendingItems.slice(0, displayedItems).map((item) => (
            <div key={item.id} className="trending-item">
              <img src={item.image} alt={item.title} />
              <h2>{item.brand}</h2>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        {displayedItems > 4 && (
          <button  style={{ color: "black", margin: "5px 1%", fontWeight: "600" }} className="btn btn-primary" onClick={handleClose}>
            Close
          </button>
        )}
        {displayedItems < trendingItems.length && (
          <button  style={{ color: "black", margin: "5px 1%", fontWeight: "600" }} className="btn btn-primary" onClick={handleSeeMore}>
            See More
          </button>
        )}
      </div>

      {/* //trending in footwears */}
      <div className="footweartrending">
        <div className="dress-trending-slider-text">
          <marquee behavior="scroll" direction="left">
            <p>FOOTWEAR TRENDING NOW</p>
          </marquee>
        </div>

        <div className="footwear-trending-text">
          <h2>Step into Style with Our Trending Footwear</h2>
          <p>
            Elevate your look from head to toe with our latest collection of
            trending footwears. Whether you're seeking comfort, fashion-forward
            designs, or classic staples, we've got the perfect pair for every
            occasion. Walk with confidence and make a statement with your
            stride!
          </p>
          <p>
            Explore a fusion of comfort and style. Our trending footwears are
            carefully selected to keep you on-trend and comfortable, ensuring
            your feet are ready for any adventure. Find your perfect fit and
            step into a world of fashion and functionality.
          </p>
        </div>

        <h1>Trending In Footwears</h1>
        <div className="footWear-trendings-grid">
          {trendingFootwears.slice(0, displayFootwears).map((x) => (
            <div key={x.id} className="footWear-trending-item">
              <img src={x.image} alt={x.title} />
              <h3>{x.brand}</h3>
              <h3>{x.title}</h3>
              <p>{x.price}</p>
            </div>
          ))}
        </div>

        {displayFootwears > 4 && (
          <button
            style={{ color: "black", margin: "5px 1%", fontWeight: "600" }}
            className="btn btn-primary"
            onClick={handleCloseFootwears}
          >
            Close
          </button>
        )}
        {displayFootwears < trendingFootwears.length && (
          <button
            style={{ color: "black", margin: "5px 1%", fontWeight: "600" }}
            className="btn btn-primary"
            onClick={handleSeeMoreFootwears}
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeTrendings;
