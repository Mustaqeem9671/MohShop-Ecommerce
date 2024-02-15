import React, { useState } from "react";
import '../styles/SignupPage.css'
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Form submitted!");
  };

  return (
    <div className="signup-main">
      <div className="signup-sub">
        <h1>Sign Up</h1>
        <form action="" className="form-signup" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" required />
          <br />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="pwd"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase letter. Must contain at least eight characters."
            placeholder="Password"
            required
          />
          <br />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPwd"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase letter. Must contain at least eight characters."
            placeholder="Confirm Password"
            required
          />
          <br />
          <label htmlFor="showPass">Show Password</label>
          <input
            type="checkbox"
            onClick={toggleShowPassword}
            id="showPass"
          />
          <br /><br/>
          <button type="submit">Submit</button>
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
