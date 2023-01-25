import React, { useState } from 'react'
import { useRef } from 'react';
import { BiBarcodeReader } from 'react-icons/bi';
import AfterView from './Home/AfterView';

const Form = () => {
const [barcodediv, setBarcodediv] = useState(false)
const [lreworkdiv, setLreworkdiv] = useState(false)

  const barcodeRef = useRef(null)
  const employeeRef = useRef(null)
  const shiftRef = useRef(null)

const handleChange=(e)=>{
  e.preventDefault();
 setBarcodediv(!barcodediv)
}
const handleLreworkChange=(e)=>{
  e.preventDefault();
  setLreworkdiv(!barcodediv)
 }

  function handleClick(e) {
     e.preventDefault();
    barcodeRef.current.focus();
    
  }
  function employeeClick(e){
    e.preventDefault();
    employeeRef.current.focus();
  }
  return (
    <>
       <form>
        <div className='flex items-center justify-start mt-2 h-24'>
        <div className='flex items-center'>
            <input 
            ref={barcodeRef}
            class="ml-4 px-4 py-2 border rounded" type="text" placeholder="Barcode"/>
            <button className="bg-blue hover:bg-blue-700 text-white font-bold px-4 rounded"
            onClick={handleClick}>
         <BiBarcodeReader className="w-10 h-10 "/>
         </button>
        </div>
        <div className='flex items-center'>
            <input 
            ref={employeeRef}
            class="ml-4 px-4 py-2 border rounded" type="text" placeholder="EmployeeID"/>
            <button className="bg-blue hover:bg-blue-700 text-white font-bold px-4 rounded"
            onClick={employeeClick}
            >
         <BiBarcodeReader className="w-10 h-10 "/>
         </button>
        </div>
        <div className='flex items-center ml-4'>
            <select  ref={shiftRef}
             className=" text-sm rounded-lg  block w-80  p-3  ">
             <option selected> SELECT CURRENT SHIFT </option>
             <option value="first">FIRST</option>
             <option value="second">SECOND</option>
             <option value="third">THIRD</option>
            </select>
        </div>
        </div>
        <div className="flex items-center justify-between h-40  ml-28 w-full">
          <button className="bg-blue hover:bg-blue text-white font-bold py-2 px-8 w-56 h-16 ml-6 rounded">
            <label>BARCODE</label>
            <input type="checkbox" name="buff" id="buff" className='ml-4'
            checked={barcodediv}
            onChange={handleChange}
            />
          </button>
          <button  className="bg-blue hover:bg-blue text-white font-bold  w-64 h-16 ml-6 rounded">
            <label>LETTER REWORK</label>
            <input type="checkbox" name="buff" id="buff" className='ml-4'
             checked={lreworkdiv}
             onChange={handleLreworkChange}
            />
          </button>
        </div>
        {
            barcodediv 
           ? (<div>  <div className='flex items-center justify-between ml-60 gap-8'>
           <AfterView/>
           <AfterView />
           </div></div>
           ): (' ')
        }
           {
            lreworkdiv 
           ? (<div disabled>  <div className='flex items-center justify-between ml-32 gap-8'>
           <AfterView/>
           <AfterView />
           <AfterView />
           </div></div>
           ): (' ')
        }
       
        <button className="bg-blue hover:bg-blue text-white font-bold  w-56 h-16 ml-80 rounded">
            <label>SUBMIT</label>
          </button>
    </form>
    </>
  )
}

export default Form
