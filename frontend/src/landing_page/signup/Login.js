import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./Signup.css";
import { handlError, handleSuccess } from "../../utils";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  // Handle form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handlError("Email and password are required");
    }

    try {
      const url = `${process.env.REACT_APP_API_BASE_URL}/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, error, jwtToken, username } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", username);
        window.location.href = "https://zerodha-dashboard-six.vercel.app/";
      } else if (error) {
        handlError(error?.details[0].message);
      } else {
        handlError(message);
      }
    } catch (err) {
      handlError(err);
    }
  };

  return (
    <div className="form-main-container">
      <div className="form_container">
        <h2 className="Title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
            />
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginInfo.password}
            />
          </div>

          <button type="submit">Login</button> {/* FIXED */}
          <span>
            Don't have an account?{" "}
            <Link to="/signup" className="Link">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
