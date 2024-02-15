


// Category.jsx
import '../styles/Category.css'
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MenCategories from "./MenCategories";
import WomenCategories from "./WomenCategories";
import ChildrenCategories from './ChildrenCategories';

const Category = () => {
  return (
    <div className="category-main">
      <div className="category-buttons">
        <Link to="men">Men</Link>
        <Link to="women">Women</Link>
        <Link to="children">Children</Link>
        {/* Add more links for other categories as needed */}
      </div>

      <Routes>
        <Route path="/men" element={<MenCategories />} />
        <Route path="/women" element={<WomenCategories />} />
        <Route path="/children" element={<ChildrenCategories />} />
        {/* Add more routes for other categories as needed */}
      </Routes>
    </div>
  );
};

export default Category;


