import React from "react";
import Avatar from '@mui/material/Avatar';
import profile from '../assets/Profile.png'


const NavBar = () => {


  const locale = 'en';
  const today = new Date();

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  // const hour = today.getHours();
  // const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });



  return (
     <>
      <nav className="sticky top-0 z-1 bg-white border-b-2"
        Style="
       width:full;
       margin-left:10px;
       display:flex;
       align:center;
       justify-content:space-between;
       align-items;center;
       ">

        <div>
          <h3 className="flex items-center justify-between">
            {date}&nbsp; &nbsp;
           Time:
            {time}&nbsp; &nbsp;
           
            <label>Location : Chakan ,Pune</label>
          </h3>

        </div>

        <span className="flex justify-content-space-between top-0 sticky"> <label>SuperAdmin</label>
          <span className="text-white text-small cursor-pointer underline"> <Avatar alt="remy sharp"
            src={profile}
          />
          </span>
        </span>
      </nav>
     </>
  );
}
export default NavBar;
