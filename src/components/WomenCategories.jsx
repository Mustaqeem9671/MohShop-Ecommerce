import React, { useEffect, useState } from "react";
import "../styles/WomenCategories.css";
import Cart from "./Cart";
import { Link, useNavigate, useParams } from "react-router-dom";
import ViewItem from "./ViewItem";

const WomenCategories = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { itemId } = useParams();

  const [womenFootwear, setWomenFootwear] = useState([]);
  const [womenClothes, setWomenClothes] = useState([]);
  const [womenJewelry, setWomenJewelry] = useState([]);
  const [womenMakeup, setWomenMakeup] = useState([]);
  const [westerWear, setWesterWear] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [itemsmera, setitemsmera] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("footwear");

  useEffect(() => {
    const fetchWomenData = async () => {
      try {
        const resWomenFootwear = await fetch(
          "http://localhost:4000/WomenFootwear"
        );
        const dataWomenFootwear = await resWomenFootwear.json();
        setWomenFootwear(dataWomenFootwear);
        console.log(dataWomenFootwear);

        if (dataWomenFootwear.length > 0) {
          const defaultSelectedItem = dataWomenFootwear.find(
            (item) => item.id === itemId
          );
          setSelectedItem(defaultSelectedItem || dataWomenFootwear[0]);
        }

        const resWomenClothes = await fetch("http://localhost:4000/womenDress");
        const dataWomenClothes = await resWomenClothes.json();
        setWomenClothes(dataWomenClothes);

        const resWomenJewelry = await fetch(
          "http://localhost:4000/womenJewelry"
        );
        const dataWomenJewelry = await resWomenJewelry.json();
        setWomenJewelry(dataWomenJewelry);

        const resWomenMakeup = await fetch("http://localhost:4000/womenMakeup");
        const dataWomenMakeup = await resWomenMakeup.json();
        setWomenMakeup(dataWomenMakeup);

        const reswesterWear = await fetch("http://localhost:4000/westerWear");
        const datawesterWear = await reswesterWear.json();
        setWesterWear(datawesterWear);

        const resnewArrivals = await fetch("http://localhost:4000/newArrivals");
        const datanewArrivals = await resnewArrivals.json();
        setNewArrivals(datanewArrivals);

        const itemsnew = await fetch("http://localhost:4000/items");
        const dataitemsnew = await itemsnew.json();
        setitemsmera(dataitemsnew);
      } catch (err) {
        console.log("Error", err);
      }
    };

    // Call function here
    fetchWomenData();
  }, [itemId]);

  const renderCategory = () => {
    const categoryState = {
      WomenFootwear: womenFootwear,
      womenDress: womenClothes,
      womenJewelry: womenJewelry,
      womenMakeup: womenMakeup,
      westerWear: westerWear,
      newArrivals: newArrivals,
      items: itemsmera,
    };

    return categoryState[selectedCategory] || [];
  };

  useEffect(() => {
    // If selectedItem is updated, display it in the Cart component
    if (selectedItem) {
      console.log(
        "WomenCategories - selectedItem before rendering ViewItem:",
        selectedItem
      );

      setCart([selectedItem]);
    }
  }, [selectedItem, navigate]);

  const handleAddToCart = (item) => {
    alert(`Item ${item.id} added to cart`);
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) {
      setCart((prevCart) => [...prevCart, item]);
      setSelectedItem(item); // Set selected item when adding to cart
    }
  };

  const viewItems = (id) => {
    const selectedItem = renderCategory().find((item) => item.id === itemId);
    setSelectedItem(selectedItem);
    navigate(`/viewitems/${id}`);
  };

  return (
    <div className="women-categories">
      <div className="women-btns">
        <button
          onClick={() => setSelectedCategory("newArrivals")}
          className="btn btn-primary"
        >
          New Arrivals
        </button>
        <button
          onClick={() => setSelectedCategory("WomenFootwear")}
          className="btn btn-primary"
        >
          Footwear
        </button>
        <button
          onClick={() => setSelectedCategory("womenDress")}
          className="btn btn-primary"
        >
          Clothes
        </button>
        <button
          onClick={() => setSelectedCategory("womenJewelry")}
          className="btn btn-primary"
        >
          Jewelry
        </button>
        <button
          onClick={() => setSelectedCategory("womenMakeup")}
          className="btn btn-primary"
        >
          Makeup
        </button>
        <button
          onClick={() => setSelectedCategory("westerWear")}
          className="btn btn-primary"
        >
          Western Wear
        </button>
        <button
          onClick={() => setSelectedCategory("items")}
          className="btn btn-primary"
        >
          click here
        </button>
        {/* Add more buttons for other categories as needed */}
      </div>

      <div className="women-sub-category">
        {renderCategory().map((item) => (
          <div
            key={item.id}
            className="women-card"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img src={item.image} alt={item.title} />
           
            <h3>{item.brand}</h3>
            <h4>{item.title}</h4>
            <p>{item.price}</p>
            <div className="viewandcart">
              <Link to={`/viewitems/${item.id}`}>
                <button
                  className="view"
                  id=""
                  onClick={() => viewItems(item.id)}
                >
                  View
                </button>
                <button
                  className="cart"
                  id=""
                  onClick={() => {
                    handleAddToCart(item);
                    setSelectedItem(item); // Set selected item when adding to cart
                  }}
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <ViewItem selectedItem={selectedItem} />
      <Cart cartItems={cart} setCart={setCart} />
    </div>
  );
};

export default WomenCategories;
