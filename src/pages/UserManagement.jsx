import React from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeID, setEmployeID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://bridgestone-backend.project-test.online/api/auth/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            phone,
            name,
            role,
            employeID,
          }),
        }
      );
      const data = response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(await response.text());
      }
      setLoading(false);
      navigate("/login");
      // show a success message or redirect to another page
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            lineHeight: "39px",
            marginTop: "33px",
            marginLeft: "30px",
          }}
        >
          User Management
        </h1>
      </div>
      <div className="mt-3.5">
        <h1
          style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}
        >
          Create New User
        </h1>
        <div
          style={{ width: "1000px", margin: "auto", marginTop: "30px" }}
          className="flex items-center justify-center"
        >
          <div>
            <input
              style={{ width: "486px" }}
              className="h-11 rounded-md border border-black font-medium text-black mb-7 pl-3"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              style={{ width: "486px" }}
              className=" h-11 rounded-md border border-black font-medium text-black mb-7 pl-3"
              placeholder="Enter Employee Id"
              onChange={(e) => setEmployeID(e.target.value)}
            />
            <input
              style={{ width: "486px" }}
              className=" h-11 rounded-md border border-black font-medium text-black pl-3 mb-7"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              style={{ width: "486px" }}
              className=" h-11 rounded-md border border-black font-medium text-black pl-3 mb-7"
              placeholder="Enter Email Id"
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ width: "486px", color: " #00000080" }}
              className=" h-11 rounded-md border border-black font-medium text-black pl-1 mb-7"
            >
              <option value="">Select a role</option>
              <option value="OPERATOR">OPERATOR</option>
              <option value="MANAGER">MANAGER</option>
              <option value="SUPERVISOR">SUPERVISOR</option>
            </select>
            <input
              style={{ width: "486px" }}
              className=" h-11 rounded-md border border-black font-medium text-black pl-3 mb-7"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        {error ? (
          <p style={{ textAlign: "center", color: "red" }}>{error}</p>
        ) : (
          ""
        )}
        <button
          className="w-32 h-11 border border-black rounded-md font-medium mt-8"
          style={{
            backgroundColor: "#004C84",
            display: "block",
            margin: "auto",
            marginTop: "30px",
            color: "#ffffff",
          }}
        >
          Create User
        </button>
      </div>
    </form>
  );
};

export default Hoc(UserManagement);
