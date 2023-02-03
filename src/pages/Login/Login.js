import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, redirect, Navigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    navigate("/", { replace: true });
  };
  const onSubmitFailure = (err) => {
    setMessage(err);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const userDetails = { email, password };
    const url =
      "https://bridgestone-backend.project-test.online/api/auth/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.token !== undefined) {
      onSubmitSuccess(data.token);
    } else {
      onSubmitFailure(data.message);
    }
  };
  return (
    <form onSubmit={submitForm}>
      <div className="FullLoginContainer">
        <div className="loginContainer">
          <div className="loginDetailsContainer">
            <div className="loginDetails">
              <img
                className="logoImage"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1675145868/Bridgestone-Dueler-HT-Tyres-1200x675_1_rro5lx.svg"
                alt="logo"
              />
              <h1 className="reworkHeading">REWORK TRACKING DIGITALIZATION</h1>
              <h1 className="loginHeading">Login</h1>
              <div className="inputContainer">
                <label htmlFor="userInput" className="userName">
                  Username
                </label>
                <input
                  type="text"
                  id="userInput"
                  className="userInputField"
                  placeholder="Enter Username"
                  onChange={onChangeUsername}
                  value={email}
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="password" className="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="userInputField"
                  placeholder="Enter Password"
                  onChange={onChangePassword}
                  value={password}
                />
              </div>
              {message ? (
                <p style={{ textAlign: "center", color: "red" }}>{message}</p>
              ) : (
                ""
              )}
              <h1 className="forgotPassword">Forgot Password ?</h1>
              <button className="submitButton">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
