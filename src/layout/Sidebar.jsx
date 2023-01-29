import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { GoSignOut } from "react-icons/go";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Links from "./Links";
import SubMenu from "./Submenu";

const Sidebar = ({ setResponsive, responsive }) => {
  const [pop_up, setPop_up] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="relative px-1 bg-white  h-full shadow-sm shadow-blue-gray-900/10"
        style={{ boxShadow: "2px 2px 10px gray" }}
      >
        {/* ------TopHead----- */}
        <div className="flex items-center py-4  border-b border-indigo-800 justify-between">
          <motion.div whileTap={{ scale: 0.5 }}>
            <img
              src={Logo}
              alt="BridgeStone Tire"
              className="cursor-pointer md:inline-flex w-60 my-10 mr-12 mb-10 mt-10"
            />
          </motion.div>
        </div>

        {/* ------Links----- */}
        <div className="flex flex-col ">
          {Links.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
        <div>
          <motion.div
            whileTap={{ scale: 0.5 }}
            className="flex flex-row items-center text-center mt-40 cursor-pointer"
          >
            <span
              onClick={() => {
                localStorage.removeItem("Bridgestone|Admin");
                localStorage.removeItem("Bridgestone|AdminInfo");
                toast.success("LogOut Success!");
                navigate("/");
                setPop_up(false);
              }}
            >
              <GoSignOut className="w-5 h-5 " />
              <label> LogOut </label>
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
