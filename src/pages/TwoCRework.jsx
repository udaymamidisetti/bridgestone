import React, { useEffect } from "react";
import Heading from "../forms/Heading";
import Hoc from "../layout/Hoc";
import StickyHeadTable from "./TwoCRework/Table";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TwoCRework = () => {
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
        <div className="flex flex-col h-full pl-5 pr-5 mt-5">
          <StickyHeadTable />
        </div>
      </div>
    </>
  );
};

export default Hoc(TwoCRework);
