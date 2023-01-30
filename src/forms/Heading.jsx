import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Heading({ title }) {
  const navigate = useNavigate();
  return (
    <div className="px-2 flex gap-2 items-center">
      {/* <IoArrowBackCircleSharp onClick={()=>navigate(-1)} className="cursor-pointer"/> */}
      <h1 className="text-large font-bold ml-7" style={{ color: "#000000" }}>
        {title}
      </h1>
      <hr />
    </div>
  );
}

export default Heading;
