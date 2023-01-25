import React from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import HeaderLayout from "./Dashbord/HeaderLayout";
import StickyHeadTable from "./Dashbord/Table";

const Dashboard = () => {
  return (
    <>
      <div className="tracking-wider h-full">
        {/* -----Introduction----- */}
        <div className="flex flex-col md:w-2/3 h-full pl-10  ">
           <Heading title="DASHBOARD"/>
          <HeaderLayout/>
          <StickyHeadTable/> 
        </div>
      </div>
    </>
  );
};

export default Hoc(Dashboard);
