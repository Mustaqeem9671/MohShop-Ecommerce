import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NewUserRegistration.css";
import newuserProfile from "../components/image/profileImage.jpg";

const NewUserRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    verificationCode: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch states data
    fetch("http://localhost:4000/indianStates")
      .then((response) => response.json())
      .then((data) => setStates(data));
  }, []);

  useEffect(() => {
    // Fetch cities data
    fetch("http://localhost:4000/indianCities")
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData((prevData) => ({ ...prevData, city: selectedCity }));
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      state: selectedState,
      city: "", // Reset city when state changes
    }));

    // Fetch cities for the selected state
    fetch(`http://localhost:4000/indianCities?state=${selectedState}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Cities for selected state:", data);
        // setCities(data);
      });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      navigate("/profile");
    });
  };

  return (
    <div className="newuser-main">
      <h2> New Registration</h2>
      <Link to='/navbarheader'>Go</Link>
      <form onSubmit={handleRegistration} className="newuser-form">
        <div className="newuser-img">
          <img src={newuserProfile} alt="" />
        </div>
        <div className="newuser-details">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="verificationCode"
            placeholder="Verification Code"
            value={formData.verificationCode}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirm Email"
            value={formData.confirmEmail}
            onChange={handleInputChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />

          <select
            name="state"
            value={formData.state}
            onChange={handleStateChange}
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>

          <select
            name="city"
            value={formData.city}
            onChange={handleCityChange}
            required
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <button  type="submit">Register</button>
        </div>
        {/* <div className="newuser-btn"> */}
        {/* </div> */}
      </form>
    </div>
  );
};

export default NewUserRegistration;
