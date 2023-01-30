import React from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import styled from "styled-components";

const UserManagement = () => {
  return (
    <div>
      <div>
        <Heading title="USER MANAGEMENT" />
      </div>
      <div className="mt-7">
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
            />
            <input
              style={{ width: "486px" }}
              className=" h-11 rounded-md border border-black font-medium text-black mb-7 pl-3"
              placeholder="Enter Employee Id"
            />
            <input
              style={{ width: "486px" }}
              className=" h-11 rounded-md border border-black font-medium text-black pl-3 mb-7"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              style={{ width: "486px" }}
              className=" h-11 rounded-md border border-black font-medium text-black pl-3 mb-7"
              placeholder="Enter Email Id"
            />
            <input
              style={{ width: "486px" }}
              className=" h-11 rounded-md border border-black font-medium text-black pl-3 mb-7"
              placeholder="Select Role"
            />
            <input
              style={{ width: "486px" }}
              className=" h-11 rounded-md border border-black font-medium text-black pl-3 mb-7"
              placeholder="Confirm Password"
            />
          </div>
        </div>
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
        <h1 className="mt-10 font-medium ml-3 font-bold text-center">
          Permission
        </h1>
      </div>
    </div>
  );
};

export default Hoc(UserManagement);
