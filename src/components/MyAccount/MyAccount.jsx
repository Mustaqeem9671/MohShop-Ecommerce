import React from "react";
import "./MyAccount.css";

const MyAccount = () => {
  return (
    <div className="my-account-page">
      <h1>My Account</h1>
      <div className="account--info">

      <div className="my--account--buttons">
        <button>My Details</button>
        <button>My Address Book</button>
        <button>My Activities</button>
        <button>Settings</button>
      </div>

      <div className="my--details" id="myDeatils">
        <h2>Personal Information</h2>
        <hr />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          ratione suscipit odit voluptates quas sed sequi, deserunt{" "}
        </p>
        <label htmlFor="">First Name</label>
        <input type="text" name="first-name" />
        <label htmlFor="">Last Name</label>
        <input type="text" name="last-name" />
        <label htmlFor="">start Date</label>
        <input type="date" name="date" id="" />
        <label htmlFor="">Phone Number</label>
        <input type="text" name="phone-number" />
        <p>from 0-10 digit</p>
        <button className="btn btn-primary">Save</button>
      </div>
      </div>
    </div>
  );
};

export default MyAccount;
