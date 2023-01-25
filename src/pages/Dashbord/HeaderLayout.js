import { Typography } from '@mui/material'
import React from 'react'
const HeaderLayout = () => {
  return (
    <div>
      <div className=" ml-2 0 mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      style={{"width":"900px",'height':'120px'}}>
        <div className="w-4/5 h-4/5 rounded overflow-hidden shadow-lg bg-purple-300">
                  <div className="p-4 text-center">
                <Typography variant="small" className="font-bold text-white">
                <h3>Buff Rework</h3>
              </Typography>
              <Typography variant="h4" color="blue-gray" className="text-white font-bold">
                 <h3>00</h3>
              </Typography>
                </div>
            
           </div>
          <div className="w-4/5 h-4/5 rounded overflow-hidden shadow-lg bg-red-200">
          <div className="p-4 text-center">
                <Typography variant="small" className="font-bold text-white">
                <h3>Spot Rework</h3>
              </Typography>
              <Typography variant="h4" color="blue-gray" className="text-white font-bold">
                 <h3>00</h3>
              </Typography>
                </div>
          </div>
          <div className="w-4/5  h-4/5 rounded overflow-hidden shadow-lg bg-blue">
          <div className="p-4 text-center">
                <Typography variant="small" className="font-bold text-white">
                <h3>Barcode Rework</h3>
              </Typography>
              <Typography variant="h4" color="blue-gray" className="text-white font-bold">
                 <h3>00</h3>
              </Typography>
                </div>
          </div>
          <div className="w-4/5 h-4/5  rounded overflow-hidden shadow-lg bg-purple-300 ">
          <div className="p-4 text-center">
                <Typography variant="small" className="font-bold text-white">
                <h3>later Rework</h3>
              </Typography>
              <Typography variant="h4" color="blue-gray" className="text-white font-bold">
                 <h3>00</h3>
              </Typography>
                </div>
          </div>
      </div>
     
    </div>
  )
}

export default HeaderLayout
