import React from "react";

const Button = ({ button }) => {
  return (
    <>
      <button className=" text-white py-1 px-3 md:px-4 shadow rounded-sm tracking-widest bg-indigo-500 hover:bg-indigo-600 ">
        {button}
      </button>
    </>
  );
};

export default Button;
