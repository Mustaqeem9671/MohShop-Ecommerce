import React, { useEffect, useState, useRef } from 'react';
import '../styles/Contact.css';

const ContactPage = () => {
  const [indianStates, setIndianStates] = useState([]);
  const [indianCities, setIndianCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resStates = await fetch('http://localhost:4000/indianStates');
        const dataStates = await resStates.json();
        setIndianStates(dataStates || []);
        
        // Reset selectedState to an empty string when fetching states
        setSelectedState('');

        const resCities = await fetch('http://localhost:4000/indianCities');
        const dataCities = await resCities.json();
        setIndianCities(dataCities || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    // Reset the form using the reset method
    formRef.current.reset();
    // Reset selectedState after form submission
    setSelectedState('');
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" required />

        <label htmlFor="state">State:</label>
        <select id="state" name="state" onChange={handleStateChange} required value={selectedState}>
          <option value="" disabled>
            Select State
          </option>
          {indianStates.map((state) => (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>

        <label htmlFor="city">City:</label>
        <select id="city" name="city" required onChange={handleStateChange} value={selectedState}>
          <option value="" disabled>
            Select City
          </option>
          {indianCities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" rows="4" required></textarea>

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
