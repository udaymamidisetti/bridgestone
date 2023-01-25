import React from "react";

const Heading2 = ({ heading }) => {
  return (
    <div className="flex flex-col ">
      <span className="text-2xl  text-gray-800 capitalize xl:text-4xl lg:text-3xl dark:text-white">
        {heading}
      </span>

      <div className="flex mx-auto mt-1">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
      </div>
    </div>
  );
};

export default Heading2;
