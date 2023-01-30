import React from "react";
import Avatar from "@mui/material/Avatar";
import profile from "../assets/Profile.png";

const NavBar = () => {
  const locale = "en";
  const today = new Date();

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  // const hour = today.getHours();
  // const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <>
      <nav
        className=" top-0 z-1 bg-white border-b-2 h-20"
        Style="
       width:full;
       padding-left:10px;
       display:flex;
       align:center;
       justify-content:space-between;
       align-items:center;
       "
      >
        <div>
          <h3 className="flex items-center justify-between">
            {date}&nbsp; &nbsp; Time:
            {time}&nbsp; &nbsp;
            <label>Location : Chakan ,Pune</label>
          </h3>
        </div>

        <span className="flex justify-content-space-between top-0 sticky items-center">
          {" "}
          <label
            className="pr-3"
            style={{ color: "#004C84", fontWeight: "500" }}
          >
            SuperAdmin
          </label>
          <span className="pr-3 text-white text-small cursor-pointer underline">
            {" "}
            <Avatar alt="remy sharp" src={profile} />
          </span>
        </span>
      </nav>
    </>
  );
};
export default NavBar;
