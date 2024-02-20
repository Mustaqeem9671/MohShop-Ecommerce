import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MenCategories from "./MenCategories";
import WomenCategories from "./WomenCategories";
import ChildrenCategories from "./ChildrenCategories";
import "../styles/Category.css";

const Category = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="category-main">
      <div className="category-buttons">
        <Link to="men" onClick={closeMenu}>
          Men
        </Link>
        <Link to="women" onClick={closeMenu}>
          Women
        </Link>
        <Link to="children" onClick={closeMenu}>
          Children
        </Link>
      </div>
      
       {/* Routes  */}
      <Routes>
        <Route path="/men" element={<MenCategories />} />
        <Route path="/women" element={<WomenCategories />} />
        <Route path="/children" element={<ChildrenCategories />} />
      </Routes>
    </div>
  );
};

export default Category;
