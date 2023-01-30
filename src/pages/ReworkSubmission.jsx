import React from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import Form from "./ReworkSubmission/Form";

const ReworkSubmission = () => {
  return (
    <div className="tracking-wider h-full">
      {/* -----Introduction----- */}
      <div className="flex flex-col h-full mt-5">
        <Heading title="REWORK SUBMISSION" />
        <Form />
      </div>
    </div>
  );
};

export default Hoc(ReworkSubmission);
