import React from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import StickyHeadTable from "./TwoCRework/Table";

const TwoCRework = () => {
  return (
    <>
      <div className="tracking-wider h-full">
        {/* -----Introduction----- */}
        <div className="flex flex-col h-full pl-5 pr-5 mt-5">
          <Heading title="2C REWORK" />

          <StickyHeadTable />
        </div>
      </div>
    </>
  );
};

export default Hoc(TwoCRework);
