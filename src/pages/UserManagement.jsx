import React from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";

const UserManagement = () => {
  return (
    <div>
     <Heading title="USER MANAGEMENT"/>
    </div>
  );
};

export default Hoc(UserManagement);
