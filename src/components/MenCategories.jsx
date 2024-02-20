import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/MEnCategories.css";

const MenCategories = () => {
  const [category, setCategory] = useState("shoes");
  const [menShoes, setMenShoes] = useState([]);
  const [menJeans, setMenJeans] = useState([]);
  const [menTshirts, setMenTshirts] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { itemId } = useParams();

  useEffect(() => {
    const fetchMenData = async () => {
      try {
        const resMenShoes = await fetch("http://localhost:4000/Menshoes");
        const menshoesData = await resMenShoes.json();
        setMenShoes(menshoesData);

        const resJeans = await fetch("http://localhost:4000/jeans");
        const dataJeans = await resJeans.json();
        setMenJeans(dataJeans);

        const resTshirts = await fetch("http://localhost:4000/t-shirts");
        const dataTshirts = await resTshirts.json();
        setMenTshirts(dataTshirts);
      } catch (err) {
        console.log("Error: ", err);
      }
    };

    fetchMenData();
  }, []);

  const renderCategory = () => {
    switch (category) {
      case "Menshoes":
        return menShoes;
      case "jeans":
        return menJeans;
      case "t-shirts":
        return menTshirts;
      default:
        return [];
    }
  };

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
      setSelectedItem(item); // Set selected item when adding to cart
    }
  };

  const viewItems = (id) => {
    const selectedItem = renderCategory().find((item) => item.id === itemId);
    setSelectedItem(selectedItem);
    navigate(`/viewitems/${id}`);
  };

  return (
    <div className="men-Categories">
      <div className="men-btns">
        <button
          onClick={() => setCategory("Menshoes")}
          className="btn btn-primary"
        >
          Men Shoes
        </button>
        <button
          onClick={() => setCategory("jeans")}
          className="btn btn-primary"
        >
          Men Jeans
        </button>
        <button
          onClick={() => setCategory("t-shirts")}
          className="btn btn-primary"
        >
          Men T-Shirts
        </button>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {isMenuOpen && (
        <div className="men--menu">
          <button onClick={() => { setCategory("Menshoes"); closeMenu(); }}>
            Men Shoes
          </button>
          <button onClick={() => { setCategory("jeans"); closeMenu(); }}>
            Men Jeans
          </button>
          <button onClick={() => { setCategory("t-shirts"); closeMenu(); }}>
            Men T-Shirts
          </button>
        </div>
      )}

      <div className="men-sub-category">
        {renderCategory().map((item) => (
          <div key={item.id} className="men-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.brand}</h3>
            <p>{item.title}</p>
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
    </div>
  );
};

export default MenCategories;
