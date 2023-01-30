import React, { useState } from "react";
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

const style = {
  position: "absolute",
  top: "30%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Reports = () => {
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
      <div>
        <Heading title="Rework Summary Report" />
      </div>
      <div className="mt-8 mb-8 ml-8" style={{ width: "95%" }}>
        {/* Date pickers */}

        <div className=" flex items-center w-40 gap-4">
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
            <label for="employeID">Employee ID</label>
            <br />
            <input
              id="employeID"
              className="border h-11  w-40 border-black text-center rounded-md p-2"
            />
          </div>
          <div className="flex items-center justify-center mt-auto">
            <select className=" text-sm rounded-lg bg-white text-black border border-black w-48 h-11 p-3  ">
              <option selected> Rework Type </option>
              <option value="first">DONE</option>
              <option value="second">PENDING</option>
            </select>
          </div>
          <div className="flex items-center justify-center mt-auto">
            <select className=" text-sm rounded-lg bg-white text-black border border-black w-48 h-11 p-3">
              <option selected> All Shift </option>
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
      <div style={{ marginLeft: "30px", width: "95%" }}>
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
                <TableCell>REWORK TYPE</TableCell>
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
                    <TableCell>{row.reworkdatetime}</TableCell>
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
