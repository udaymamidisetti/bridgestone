import React, { useState } from "react";
import { useRef } from "react";
import { BiBarcodeReader } from "react-icons/bi";
import AfterView from "./Home/AfterView";

import QRReader from "react-qr-scanner";

const Form = () => {
  const [barcodediv, setBarcodediv] = useState(false);
  const [lreworkdiv, setLreworkdiv] = useState(false);
  const [qrCode, setQRCode] = useState("");
  const [barscanning, setBarScanning] = useState(false);
  const [employeId, setEmployeeId] = useState(false);

  const barcodeRef = useRef(null);
  const employeeRef = useRef(null);
  const shiftRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    setBarcodediv(!barcodediv);
  };
  const handleLreworkChange = (e) => {
    e.preventDefault();
    setLreworkdiv(!barcodediv);
  };

  const handleScan = (data) => {
    if (data) {
      setQRCode(data);
      barcodeRef.current.value = JSON.stringify(data);
      setBarScanning(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const startScanning = () => {
    setBarScanning(!barscanning);
  };

  const employeeIdScan = (data) => {
    if (data) {
      setQRCode(data);
      employeeRef.current.value = JSON.stringify(data);
      setEmployeeId(false);
    }
  };

  const emhandleError = (err) => {
    console.error(err);
  };

  const emstartScanning = () => {
    setEmployeeId(!employeId);
  };
  return (
    <>
      <div
        className="border-2 h-5/6 ml-7 mr-7 mt-12"
        style={{ boxShadow: "4px 4px 9px 0px #00000029", borderWidth: "0px" }}
      >
        <div className="flex items-center justify-around mt-2 h-24">
          <div className="flex items-center">
            <input
              ref={barcodeRef}
              class="ml-4 px-4 py-2 border rounded"
              type="text"
              placeholder="Barcode"
            />
            <button
              className="bg-blue hover:bg-blue-700 text-white font-bold px-4 rounded"
              onClick={startScanning}
            >
              <BiBarcodeReader className="w-10 h-10 " />
            </button>
          </div>
          <div className="flex items-center">
            <input
              ref={employeeRef}
              class="ml-4 px-4 py-2 border rounded"
              type="text"
              placeholder="EmployeeID"
            />
            <button
              className="bg-blue hover:bg-blue-700 text-white font-bold px-4 rounded"
              onClick={emstartScanning}
            >
              <BiBarcodeReader className="w-10 h-10 " />
            </button>
          </div>
          <div className="flex items-center ml-4">
            <select
              ref={shiftRef}
              className=" text-sm rounded-lg  block w-80  p-3  "
            >
              <option selected> SELECT CURRENT SHIFT </option>
              <option value="first">FIRST</option>
              <option value="second">SECOND</option>
              <option value="third">THIRD</option>
            </select>
          </div>
        </div>
        <div
          className={`${
            barscanning ? "flex justify-center h-24 w-24 m-auto" : "d-none"
          }`}
        >
          {barscanning && (
            <QRReader delay={300} onError={handleError} onScan={handleScan} />
          )}
        </div>
        <div
          className={`${
            employeId ? "flex justify-center h-24 w-24 m-auto" : "d-none"
          }`}
        >
          {employeId && (
            <QRReader
              delay={300}
              onError={emhandleError}
              onScan={employeeIdScan}
            />
          )}
        </div>
        <div className="flex items-center justify-around h-40   w-full">
          <button className="bg-blue hover:bg-blue text-white font-bold py-2 px-8 w-52 h-14 rounded">
            <label>BARCODE</label>
            <input
              type="checkbox"
              name="buff"
              id="buff"
              className="ml-4"
              checked={barcodediv}
              onChange={handleChange}
            />
          </button>
          <button className="bg-blue hover:bg-blue text-white font-bold  w-52 h-14 rounded">
            <label>LETTER REWORK</label>
            <input
              type="checkbox"
              name="buff"
              id="buff"
              className="ml-4"
              checked={lreworkdiv}
              onChange={handleLreworkChange}
            />
          </button>
        </div>
        {barcodediv ? (
          <div>
            {" "}
            <div className="flex items-center justify-center gap-8">
              <AfterView />
              <AfterView />
            </div>
          </div>
        ) : (
          " "
        )}
        {lreworkdiv ? (
          <div disabled>
            {" "}
            <div className="flex items-center justify-center gap-8">
              <AfterView />
              <AfterView />
              <AfterView />
            </div>
          </div>
        ) : (
          " "
        )}

        <button className="bg-blue hover:bg-blue text-white font-bold  w-52 h-14 rounded block m-auto">
          <label>SUBMIT</label>
        </button>
      </div>
    </>
  );
};

export default Form;
