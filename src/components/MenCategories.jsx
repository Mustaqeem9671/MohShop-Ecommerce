import React, { useEffect, useState } from "react";
import '../styles/MEnCategories.css'

const MenCategories = () => {
  const [category, setCategory] = useState("shoes");
  const [menShoes, setMenShoes] = useState([]);
  const [menJeans, setMenJeans] = useState([]);
  const [menTshirts, setMenTshirts] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="men-Categories">
      <div className="btn">
        <button onClick={() => setCategory("Menshoes")}>Men Shoes</button>
        <button onClick={() => setCategory("jeans")}>Men Jeans</button>
        <button onClick={() => setCategory("t-shirts")}>Men T-Shirts</button>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {isMenuOpen && (
        <div className="menu">
          <div onClick={() => setCategory("Menshoes")}>Men Shoes</div>
          <div onClick={() => setCategory("jeans")}>Men Jeans</div>
          <div onClick={() => setCategory("t-shirts")}>Men T-Shirts</div>
        </div>
      )}

      <div className="men-sub-category">
        {renderCategory().map((item) => (
          <div key={item.id} className="men-card">
            <img src={item.image} alt={item.title} />
            <h2>{item.brand}</h2>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCategories;
