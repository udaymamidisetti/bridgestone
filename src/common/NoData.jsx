import React from "react";

const NoData = ({ data }) => {
  return (
    <>
      <div className="bg-slate-100 text-center rounded-sm p-4 py-3 tracking-widest my-6 md:my-10">
        There are no <span className="text-indigo-600"> {data}</span>
      </div>
    </>
  );
};

export default NoData;
