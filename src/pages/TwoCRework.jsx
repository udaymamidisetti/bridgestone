import React from 'react'
import Heading from '../forms/Heading';
import Hoc from "../layout/Hoc";
import StickyHeadTable from './TwoCRework/Table';

const TwoCRework = () => {
  return (
    <>
    <div className="tracking-wider h-full">
      {/* -----Introduction----- */}
      <div className="flex flex-col md:w-2/3 h-full pl-10">
        <Heading title="2C REWORK"/>
       
        <StickyHeadTable/>
      </div>
    </div>
  </>
  )
}

export default Hoc(TwoCRework)
