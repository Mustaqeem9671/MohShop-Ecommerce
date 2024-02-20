

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const ContactPage = () => {
  const formRef = useRef(null);
  const [indianStates, setIndianStates] = useState([]);
  const [indianCities, setIndianCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resStates = await fetch("http://localhost:4000/indianStates");
        const dataStates = await resStates.json();
        setIndianStates(dataStates || []);

        const resCities = await fetch("http://localhost:4000/indianCities");
        const dataCities = await resCities.json();
        setIndianCities(dataCities || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    formRef.current.reset();
    setSelectedState("");
    setSelectedCity("");
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hc3o9qi",
        "template_f3ieije",
        formRef.current,
        "A7KdIaEiER3UvnzmR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Set the state to indicate successful submission
          setTimeout(() => {
            setIsSubmitted(false); // Reset the state after a delay
            formRef.current.reset(); // Reset the form fields
          }, 3000); // Reset after 3 seconds (adjust as needed)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        {/* <p className="sub--title">Get In Touch</p> */}
        <h2>Contact Our Team </h2>
        <p className="text-lg">
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit. */}
        </p>
      </div>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        {/* Render alert message if form is submitted successfully */}
        {isSubmitted && (
          <div className="alert alert-success" role="alert">
            Message sent successfully!
          </div>
        )}
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="second_name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_name"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="mobile_number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label className="contact--label" htmlFor="state">
          <span className="text-md">State</span>
        </label>
        <select
          className="contact----select"
          id="state"
          name="state"
          onChange={handleStateChange}
          required
          value={selectedState}
        >
          <option value="" disabled>
            Select State
          </option>
          {indianStates.map((state) => (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>

        <label className="contact--label" htmlFor="city">
          <span className="text-md">City</span>
        </label>
        <select
          className="contact----select"
          id="city"
          name="city"
          required
          onChange={handleCityChange}
          value={selectedCity}
        >
          <option value="" disabled>
            Select City
          </option>
          {indianCities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <label htmlFor="address" className="contact--label">
          <span className="text-md">Address</span>
          <textarea
            className="contact--input text-md"
            id="address"
            rows="4"
            name="address"
            placeholder="Type your address..."
          ></textarea>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            name="message"
            placeholder="Type your message..."
          ></textarea>
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div className="buttons">
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
