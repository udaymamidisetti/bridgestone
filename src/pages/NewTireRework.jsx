import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import Form from "./NewTireRework/Form";

import Cookies from "js-cookie";

const NewTireRework = () => {
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

export default Hoc(NewTireRework);
