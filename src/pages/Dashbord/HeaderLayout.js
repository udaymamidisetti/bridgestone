import { Typography } from "@mui/material";
import React from "react";
const HeaderLayout = () => {
  return (
    <div>
      <h1
        style={{
          height: "33px",
          width: "124px",
          fontSize: "22px",
          fontWeight: "bold",
          lineHeight: "33px",
          marginTop: "36px",
        }}
      >
        Dashboard
      </h1>
      <div
        className=" 0 mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        style={{ width: "1041px", height: "161px" }}
      >
        <div
          style={{
            boxShadow: "13px 16px 30px 0px #00000040",
            background: "#8682DD",
          }}
          className="w-60 h-40 rounded overflow-hidden shadow-lg bg-purple-300"
        >
          <div className="p-4 text-center">
            <h3
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "48px",
                fontWeight: "600",
                lineHeight: "72px",
                letterSpacing: "0em",
              }}
            >
              00
            </h3>
            <h3
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "33px",
                letterSpacing: "0em",
              }}
            >
              Buff Rework
            </h3>
          </div>
        </div>
        <div
          style={{
            boxShadow: "13px 16px 30px 0px #00000040",
            background: "#F6AEB6",
          }}
          className="w-60 h-40 rounded overflow-hidden shadow-lg bg-red-200"
        >
          <div className="p-4 text-center">
            <h3
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "48px",
                fontWeight: "600",
                lineHeight: "72px",
                letterSpacing: "0em",
              }}
            >
              00
            </h3>
            <h3
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "33px",
                letterSpacing: "0em",
              }}
            >
              Spot Rework
            </h3>
          </div>
        </div>
        <div
          style={{
            boxShadow: "13px 16px 30px 0px #00000040",
            background: "#20AFCC",
          }}
          className="w-60 h-40 rounded overflow-hidden shadow-lg bg-blue"
        >
          <div className="p-4 text-center">
            <h3
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "48px",
                fontWeight: "600",
                lineHeight: "72px",
                letterSpacing: "0em",
              }}
            >
              00
            </h3>
            <h3
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "33px",
                letterSpacing: "0em",
              }}
            >
              Barcode Rework
            </h3>
          </div>
        </div>
        <div
          style={{
            boxShadow: "13px 16px 30px 0px #00000040",
            background: "#A297DA",
          }}
          className="w-60 h-40  rounded overflow-hidden shadow-lg bg-purple-300 "
        >
          <div className="p-4 text-center">
            <h3
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "48px",
                fontWeight: "600",
                lineHeight: "72px",
                letterSpacing: "0em",
              }}
            >
              00
            </h3>
            <h3
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "33px",
                letterSpacing: "0em",
              }}
            >
              Letter Rework
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
