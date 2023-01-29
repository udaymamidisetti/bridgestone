import React from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import styled from "styled-components";

const UserManagement = () => {
  return (
    <div>
      <Heading title="USER MANAGEMENT" />
      <div className="w-96 h-96 pl-7">
        <h1 className="underline font-medium mb-6 ml-3">Add User</h1>
        <input
          className="w-96 h-11 rounded-md border border-black font-medium text-black pl-3"
          placeholder="User Name"
        />
        <input
          className="w-96 h-11 rounded-md border border-black font-medium text-black pl-3 mt-6"
          placeholder="Email Id"
        />
        <input
          className="w-96 h-11 rounded-md border border-black font-medium text-black pl-3 mt-6"
          placeholder="Password"
        />
        <button
          className="w-32 h-11 border border-black rounded-md font-medium mt-8"
          style={{
            backgroundColor: "#C4C4C4",
            display: "block",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          Create User
        </button>
        <h1 className="mt-10 underline font-medium ml-3">Permission</h1>
        <select className="w-96 h-11 border-black border rounded-md mt-5">
          <option value="">Dashboard</option>
        </select>
      </div>
    </div>
  );
};

export default Hoc(UserManagement);
