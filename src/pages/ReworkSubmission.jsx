import React from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import Form from "./ReworkSubmission/Form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ReworkSubmission = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      return navigate("/login");
    }
  }, []);
  return (
    <div className="tracking-wider h-full">
      {/* -----Introduction----- */}
      <div className="flex flex-col h-full mt-8">
        <Form />
      </div>
    </div>
  );
};

export default Hoc(ReworkSubmission);
