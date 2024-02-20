import "./App.css";

import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Category from "./components/Category";
import ContactPage from "./components/ContactPage";
import Home from "./components/Home";
import MenCategories from "./components/MenCategories";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WomenCategories from "./components/WomenCategories";
import ViewItem from "./components/ViewItem";
import { useState } from "react";
import LoginPage from "./authPages/LoginPage";
import SignupPage from "./authPages/SignupPage";
import LandingPage from "./components/LandingPage";
import LandingOrder from "./orderPages/LandingOrder";
import ChildrenCategories from "./components/ChildrenCategories";
import Profile from "./authPages/Profile";
import NewUserRegistration from "./authPages/NewUserRegistration";
import MainPage from "./welcome/MainPage";
import FavoritesPage from "./components/FavoritesPage";
// import NavbarHeader from "./welcome/NavbarHeader";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/loginPage" element={<LoginPage />} />

          <Route path="/newuserRegister" element={<NewUserRegistration />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/category/*" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/favoritespage" element={<FavoritesPage />} />

          <Route path="/men" element={<MenCategories />} />
          <Route path="/women" element={<WomenCategories />} />
          <Route path="/children" element={<ChildrenCategories />} />

          <Route path="/viewitems/:itemId" element={<ViewItem />} />
          <Route path="/landingorder" element={<LandingOrder />} />

          {cart.length > 0 && (
            <Route
              element={<Cart cart={cart} setCart={setCart} />}
              path="/cart"
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
