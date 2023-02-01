import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    navigate("/");
  };
  const onSubmitFailure = (err) => {
    setMessage(err);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const userDetails = { username, password };
    const url =
      "https://bridgestone-backend.project-test.online/api/auth/login";
    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (data.error === false) {
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
                  value={username}
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
