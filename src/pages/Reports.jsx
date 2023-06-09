import React, { useState, useEffect } from "react";
import Heading from "../forms/Heading";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IoImagesOutline } from "react-icons/io5";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Hoc from "../layout/Hoc";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    barcodenumber: "6920730804",
    employeeid: "45662",
    reworktype: "spot",
    reworkdatetime: "7:00",
    opdetails: "1224",
    donedata: "-",
    svdetails: "Sign",
    remark: "OK",
  },
  {
    id: 2,
    barcodenumber: "8319667739",
    employeeid: "404",
    reworktype: "spot",
    reworkdatetime: "7:00",
    opdetails: "1224",
    donedata: "7:35",
    svdetails: "Sign",
    remark: "OK",
  },
];

const Reports = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      return navigate("/login");
    }
  }, []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchEmployee, setSearchEmployee] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setSearchEmployee(e.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div></div>
      <div className="mb-8 ml-8" style={{ width: "1039px", marginTop: "33px" }}>
        {/* Date pickers */}
        <h1
          className="text-large font-bold"
          style={{
            color: "#000000",
            fontSize: "26px",
            fontWeight: "bold",
            lineHeight: "39px",
            marginBottom: "5px",
          }}
        >
          Rework Summary Report
        </h1>
        <div
          className=" flex items-center gap-4 justify-between"
          style={{ width: "1039px" }}
        >
          <div>
            <label className="">From</label>

            <DatePicker
              className="border h-11  w-40 border-black text-center rounded-md p-2"
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div>
            <label className="">To</label>
            <DatePicker
              className="border h-11  w-40 border-black text-center rounded-md p-2"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
          <div>
            <label htmlFor="employeID">Employee ID</label>
            <br />
            <input
              id="employeID"
              className="border h-11  w-40 border-black text-center rounded-md p-2"
            />
          </div>
          <div className="flex items-center justify-center mt-auto">
            <select className=" text-sm rounded-lg bg-white text-black border border-black w-48 h-11 p-3  ">
              <option value="type" selected>
                {" "}
                Rework Type{" "}
              </option>
              <option value="first">DONE</option>
              <option value="second">PENDING</option>
            </select>
          </div>
          <div className="flex items-center justify-center mt-auto">
            <select className=" text-sm rounded-lg bg-white text-black border border-black w-48 h-11 p-3">
              <option value="shift" selected>
                {" "}
                All Shift{" "}
              </option>
              <option value="first">FIRST</option>
              <option value="second">SECOND</option>
              <option value="second">THIRD</option>
            </select>
          </div>
          <div className="flex mt-auto h-11">
            <button
              style={{
                color: "white",
                backgroundColor: "#004C84",
                width: "100px",
                height: "40px",
                borderWidth: "0px",
                borderRadius: "5px",
              }}
            >
              View
            </button>
          </div>
        </div>
        {/* <form>
          
          <label>Employee ID</label><br />
          <input type="search" value={searchEmployee} onChange={handleChange}
           className='border border-black rounded-2xl p-2' />
        </form> */}
      </div>

      {/*Rework Table */}
      <div className="ml-8" style={{ width: "1043px" }}>
        <TableContainer className="sticky">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    color: "white",
                    backgroundColor: "#004C84",
                    marginLeft: "30px",
                  },
                }}
              >
                <TableCell>No</TableCell>
                <TableCell>Barcode </TableCell>
                <TableCell>Employe ID</TableCell>
                <TableCell>Rework Type</TableCell>
                <TableCell>Rework date & Time</TableCell>
                <TableCell>2C O/P Details</TableCell>
                <TableCell>2C Done Date & Time</TableCell>
                <TableCell>S/V Details</TableCell>
                <TableCell>Remark</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell> {row.id}</TableCell>
                    <TableCell>{row.barcodenumber}</TableCell>
                    <TableCell>{row.employeeid}</TableCell>
                    <TableCell>{row.reworktype}</TableCell>
                    <TableCell>{row.reworkdatetime}</TableCell>
                    <TableCell>{row.opdetails}</TableCell>
                    <TableCell>{row.donedata}</TableCell>
                    <TableCell>{row.svdetails}</TableCell>
                    <TableCell>{row.remark}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default Hoc(Reports);
