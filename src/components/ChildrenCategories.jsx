// ChildrenCategories.jsx
import React, { useEffect, useState } from "react";
import "../styles/ChildrenCategories.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import FavoritesPage from "./FavoritesPage";

const ChildrenCategories = () => {
  const [childrenFootwear, setChildrenFootwear] = useState([]);
  const [gender, setGender] = useState("boy");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { itemId } = useParams();

  useEffect(() => {
    const fetchChildrenData = async () => {
      try {
        const resChildrenFootwear = await fetch(
          `http://localhost:4000/childrenFootwear?gender=${gender}`
        );
        const dataChildrenFootwear = await resChildrenFootwear.json();
        setChildrenFootwear(dataChildrenFootwear);
      } catch (err) {
        console.log("Error: ", err);
      }
    };

    // Call function here
    fetchChildrenData();
  }, [gender]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleAddToCart = (item) => {
    alert(`Item ${item.id} added to cart`);
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) {
      setCart((prevCart) => [...prevCart, item]);
      setSelectedItem(item);
    }
  };

  const handleAddToFavorites = (item) => {
    const isItemInFavorites = favorites.some((favItem) => favItem.id === item.id);
    if (!isItemInFavorites) {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    }
  };

  const viewItems = (id) => {
    const selectedItem = childrenFootwear.find((item) => item.id === itemId);
    setSelectedItem(selectedItem);
    navigate(`/viewitems/${id}`);
  };

  return (
    <div className="children-categories">
      <div className="child--buttons">
        <button onClick={() => setGender("Boys")} className="btn btn-primary">
          Boys Footwear
        </button>
        <button onClick={() => setGender("Girls")} className="btn btn-primary">
          Girls Footwear
        </button>
        {/* Add more buttons for other categories as needed */}
      </div>

      <div className="child--menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {isMenuOpen && (
        <div className="child--menu">
          <button
            onClick={() => {
              setGender("Boys");
              closeMenu();
            }}
          >
            Boys
          </button>
          <button
            onClick={() => {
              setGender("Girls");
              closeMenu();
            }}
          >
            Girls
          </button>
        </div>
      )}

      <div className="children-sub-category">
        {childrenFootwear.map((item) => (
          <div key={item.id} className="children-card">
            <img src={item.image} alt={item.title} />
            <h4>Size {item.size}</h4>
            <h3>{item.title}</h3>
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
              </Link>
              <button
                className="cart"
                id=""
                onClick={() => {
                  handleAddToCart(item);
                  setSelectedItem(item);
                }}
              >
                Add to cart
              </button>
              <button
                className="favorite"
                id=""
                onClick={() => handleAddToFavorites(item)}
              >
                Add to favorites
              </button>
            </div>
          </div>
        ))}
      </div>
      <FavoritesPage favoriteItems={favorites} setFavorites={setFavorites} />
    </div>
  );
};

export default ChildrenCategories;
