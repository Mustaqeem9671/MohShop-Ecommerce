import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Profile.css';
import profileImage from "../components/image/profileImage.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const [userName] = useState(generateRandomName());
  const [state] = useState(generateRandomState());
  const [city] = useState(generateRandomCity());
  const [address] = useState(generateRandomAddress());
  const [profileImg, setProfileImg] = useState(profileImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
   
    console.log("Logout clicked. Navigating to the login page...");
   
    navigate('/');
  };

  function generateRandomName() {
    const names = ["John Doe", "Jane Doe", "Alice", "Bob", "Eve"];
    return names[Math.floor(Math.random() * names.length)];
  }

  function generateRandomState() {
    const states = ["California", "New York", "Texas", "Florida", "Illinois"];
    return states[Math.floor(Math.random() * states.length)];
  }

  function generateRandomCity() {
    const cities = ["Los Angeles", "New York City", "Houston", "Miami", "Chicago"];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  function generateRandomAddress() {
    const addresses = ["123 Main St", "456 Oak St", "789 Pine St", "101 Elm St", "202 Maple St"];
    return addresses[Math.floor(Math.random() * addresses.length)];
  }

  return (
    <div className="profile-main">
      <div className="profile-img">
        <label htmlFor="profileImageInput">
          <img src={profileImg} alt="profile" />
        </label>
        <input
          type="file"
          id="profileImageInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
      <div className="profile-detail">
        <h1>{userName}</h1>
        <p>contact number</p>
        <p>{state}</p>
        <p>{city}</p>
        <p>{address}</p>
      </div>
      <div className="profile-order-details">
        <p>Order Details</p>
        <p>Total Orders</p>
        <p>Total Purchase</p>
      </div>
      <div className="profile-logout-btn">
        <button type="button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
