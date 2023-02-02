import React, { useEffect } from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import HeaderLayout from "./Dashbord/HeaderLayout";
import StickyHeadTable from "./Dashbord/Table";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      return navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="tracking-wider h-full">
        {/* -----Introduction----- */}
        <div className="flex flex-col h-full pl-10  ">
          <HeaderLayout />
          <StickyHeadTable />
        </div>
      </div>
    </>
  );
};

export default Hoc(Dashboard);
