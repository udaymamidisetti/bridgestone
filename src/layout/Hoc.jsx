import React, { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const Hoc = (WComponent) => {
  return function Component() {
    const [responsive, setResponsive] = useState();
    return (
      <>
        <section className="flex overflow-hidden text-slate-800 bg-white h-screen">
          <div className={` ${responsive ? "w-16" : "md:w-60 w-16 "}     `}>
            <Sidebar responsive={responsive} setResponsive={setResponsive} />
          </div>
          <div
            className={`overflow-y-auto ${
              responsive ? "w-full" : "md:w-4/5 w-full lg:w-5/6"
            }   h-full py-4`}
          >
            <NavBar />
            <WComponent />
          </div>
        </section>
      </>
    );
  };
};

export default Hoc;
