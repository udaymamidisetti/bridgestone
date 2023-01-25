import React from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import Form from "./NewTireRework/Form";

const NewTireRework = () => {
  return (
    <div className="tracking-wider h-full">
    {/* -----Introduction----- */}
    <div className="flex flex-col md:w-2/3 h-full pl-10  ">
    <Heading title="NEW TIRE REWORK"/>
      <Form/>
     
      
    </div>
  </div>
  );
};

export default Hoc(NewTireRework);