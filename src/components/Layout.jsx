// Layout.jsx
import React from "react";
import Category from "./Category";
import Navbar from "./Navbar";

const Layout = ({ children, setActiveCategory }) => {
  return (
    <div>
      <Navbar />
      <Category setActiveCategory={setActiveCategory} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
