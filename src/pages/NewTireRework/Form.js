import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { BiBarcodeReader } from "react-icons/bi";
import BeforeView from "./Home/BeforeView";
import QRReader from "react-qr-scanner";
import Cookies from "js-cookie";
const Form = () => {
  const [barcodediv, setBarcodediv] = useState(false);
  const [lreworkdiv, setLreworkdiv] = useState(false);
  const [qrCode, setQRCode] = useState("");
  const [barscanning, setBarScanning] = useState(false);
  const [employeId, setEmployeeId] = useState(false);
  const [shift, setShift] = useState("");

  // NewTyerework details
  const [barcode, setBarcode] = useState("asf");
  const [employee_id, setemployee_id] = useState("asf");
  const [start_time, setstart_time] = useState("asf");
  const [rework_type, setrework_type] = useState("BUFF");
  const [end_time, setend_time] = useState("afs");
  const [status, setstatus] = useState("safsf");
  const [before_image, setBeforeImage] = useState("asf");
  const [after_image, setAfterImage] = useState("asf");
  const [user, setUSer] = useState("g");
  const [rework, setRework] = useState("df");

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime < 14) {
      setShift("DAY");
    } else if (currentTime >= 14 && currentTime < 22) {
      setShift("MID");
    } else {
      setShift("NIGHT");
    }
  }, []);

  const postTyreWork = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    // dispatch(createSellOrder(formDataObj))
    console.log(formDataObj);
    return;
    const jwtToken = Cookies.get("jwt_token");
    const TyreWorkDetails = {
      barcode,
      employee_id,
      start_time,
      rework_type,
      end_time,
      status,
      after_image,
      before_image,
    };
    const url =
      "https://bridgestone-backend.project-test.online/api/rework/?page=minim";
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        token: jwtToken,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(TyreWorkDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  const barcodeRef = useRef(null);
  const employeeRef = useRef(null);
  const shiftRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    setBarcodediv(!barcodediv);
  };
  const handleLreworkChange = (e) => {
    e.preventDefault();
    setLreworkdiv(!lreworkdiv);
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
      <form onSubmit={postTyreWork}>
        <div className=" h-5/6 ml-7 mr-7 mt-3" style={{ width: "1043px" }}>
          <h1 className="text-large font-bold" style={{ color: "#000000" }}>
            New Tyre Rework
          </h1>
          <div className="flex items-center justify-between  h-20">
            <div className="flex items-center ">
              <input
                ref={barcodeRef}
                class="px-4 py-2 border rounded"
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
                className=" text-sm rounded-lg bg-white border border-gray w-80  p-3"
                disabled
              >
                <option value={shift}>{shift}</option>
                <option value={shift}>{shift}</option>
                <option value={shift}>{shift}</option>
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
          <div
            className="flex items-center justify-between h-24"
            style={{ width: "1043px" }}
          >
            <button className="bg-blue hover:bg-blue text-white font-bold py-2 px-8 w-52 h-14  rounded">
              <label>BUFF</label>
              <input type="checkbox" name="BUFF" id="buff" className="ml-4" />
            </button>
            <button className="bg-blue hover:bg-blue text-white font-bold py-2 px-8 w-52 h-14 ml-6 rounded">
              <label>SPOT</label>
              <input type="checkbox" name="SPOT" id="buff" className="ml-4 " />
            </button>
            <button className="bg-blue hover:bg-blue text-white font-bold py-2 px-8 w-52 h-14 ml-6 rounded">
              <label>BARCODE</label>
              <input
                type="checkbox"
                name="BARCODE"
                id="buff"
                className="ml-4"
                checked={barcodediv}
                onChange={handleChange}
              />
            </button>
            <button className="bg-blue hover:bg-blue text-white font-bold  w-52 h-14 ml-6 rounded">
              <label>LETTER REWORK</label>
              <input
                type="checkbox"
                name="LETTER"
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
                <BeforeView />
                <BeforeView />
              </div>
              <button
                style={{ margin: "auto" }}
                className="bg-blue hover:bg-blue text-white font-bold  w-64 h-16 m-auto block rounded"
              >
                <label>SUBMIT</label>
              </button>
            </div>
          ) : (
            " "
          )}
          {lreworkdiv ? (
            <div>
              {" "}
              <div className="flex items-center justify-center gap-8">
                <BeforeView />
                <BeforeView />
                <BeforeView />
              </div>
              <button
                type="submit"
                style={{ margin: "auto" }}
                className="bg-blue hover:bg-blue text-white font-bold  w-64 h-16 m-auto block rounded"
              >
                <label>SUBMIT</label>
              </button>
            </div>
          ) : (
            " "
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
