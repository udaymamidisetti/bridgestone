import  React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IoImagesOutline } from 'react-icons/io5';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from 'react-icons/ai'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const data = [{ "id": 1, "barcodenumber": "6920730804", "employeeid": "45662", "starttime": "12:44 AM", "reworktype": "spot", "endtime": "12:49 AM", "status": 'false', "twocstatus": 'false ' },
{ "id": 2, "barcodenumber": "8319667739", "employeeid": "404", "starttime": "1:01 AM", "reworktype": "spot", "endtime": "6:02 PM", "status": 'true', "twocstatus": 'false' },
{ "id": 3, "barcodenumber": "9948826574", "employeeid": "3", "starttime": "11:43 AM", "reworktype": "barcode", "endtime": "1:03 AM", "status": 'false', "twocstatus": 'false' },
{ "id": 4, "barcodenumber": "4246938068", "employeeid": "744", "starttime": "9:08 AM", "reworktype": "letter reworking", "endtime": "11:35 PM", "status": 'true', "twocstatus": 'false' },
{ "id": 5, "barcodenumber": "4589940809", "employeeid": "4899", "starttime": "1:43 PM", "reworktype": "buff", "endtime": "6:55 AM", "status": 'true', "twocstatus": 'false' },
{ "id": 6, "barcodenumber": "6859652624", "employeeid": "43833", "starttime": "1:26 AM", "reworktype": "buff", "endtime": "2:09 PM", "status": 'true', "twocstatus": 'true' },
{ "id": 7, "barcodenumber": "4993845014", "employeeid": "1", "starttime": "3:15 PM", "reworktype": "spot", "endtime": "9:19 PM", "status": 'false', "twocstatus": 'true' },
{ "id": 8, "barcodenumber": "9115195570", "employeeid": "09", "starttime": "9:22 AM", "reworktype": "letter ", "endtime": "6:26 PM", "status": 'true', "twocstatus": 'false ' },
{ "id": 9, "barcodenumber": "2936475899", "employeeid": "4", "starttime": "8:50 PM", "reworktype": "barcode", "endtime": "12:22 AM", "status": 'true', "twocstatus": 'false ' },
{ "id": 10, "barcodenumber": "2231936658", "employeeid": "65", "starttime": "7:38 PM", "reworktype": "letter", "endtime": "9:22 PM", "status": 'true', "twocstatus": 'false' }]

const style = {
  position: 'absolute',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function StickyHeadTable() {
  const [page, setPage] =useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [searchEmployee, setSearchEmployee] = useState("")
     

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
           setSearchEmployee(e.target.value)
         }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className='mb-8'>
        {/* Date pickers */}

        <label className='ml-8'>Start Date</label><label className='ml-24'>End Date</label>
      <div className=' flex items-center w-40 gap-4'>   
     <DatePicker
      className='border  w-40 border-black text-center rounded-2xl p-2'
       selected={startDate}
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={date => setStartDate(date)}
     />
     <DatePicker
      className='border  w-40 border-black text-center rounded-2xl p-2'
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
     />
       <div className='flex items-center ml-4'>
            <select 
             className=" text-sm rounded-lg bg-white text-black border border-black w-50  p-3  ">
             <option selected> SELECT STATUS </option>
             <option value="first">DONE</option>
             <option value="second">PENDING</option>
            </select>
        </div>
        <div className='flex items-center ml-4'>
            <select 
             className=" text-sm rounded-lg bg-white text-black border border-black w-50  p-3  ">
             <option selected> SELECT SHIFT </option>
             <option value="first">FIRST</option>
             <option value="second">SECOND</option>
             <option value="second">THIRD</option>

            </select>
        </div>
   </div> 
        {/* <form>
          
          <label>Employee ID</label><br />
          <input type="search" value={searchEmployee} onChange={handleChange}
           className='border border-black rounded-2xl p-2' />
        </form> */}
      </div>

      <Paper sx={{ width: '1000px', overflow: 'hidden' }}>
        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant="h6" component="label">
              <button className="p-2 rounded-md  mr-2"
                style={{
                  'border': '1px solid red',
                  'margin-left': '90%'
                }}
                onClick={handleClose}><AiOutlineClose /></button>
            </Typography>
            <form className='ml-28'>
              <label>Barcode</label>&nbsp; &nbsp; &nbsp;
              <label>Rework Type</label>&nbsp;&nbsp;&nbsp;
              <label>Employee ID</label><br />
              <label>122dfd</label>&nbsp;&nbsp; &nbsp;&nbsp;
              <label>letter rework</label>&nbsp;&nbsp; &nbsp;
              <input type="text" className='border border-black w-24' /> <br /><br />
              <div className='flex items-center justify-around'>
                <div className='border border-black w-40 h-full'>
                  <img src='' alt="Before Rework" />
                </div>
                <div className='border border-black w-40 h-full'>
                  <img src='' alt="After Rework" />
                </div>
              </div>
              <div className='grid grid-cols-4 gap-4 mt-8'>
                <button className='border border-blue p-1 rounded-md'>Ok</button>
                <button className='border border-blue p-1 rounded-md'>Not Ok</button>
              </div>
              <button type="submit" value="Submit" className='bg-blue text-white p-2 rounded-sm ml-32 mt-2'>Submit</button>
            </form>
          </Box>
        </Modal>


        {/*Rework Table */}
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow sx={{
                "& th": {
                  color: 'white',
                  backgroundColor: "#004C84"
                }
              }}>
                <TableCell>No</TableCell>
                <TableCell>Barcode </TableCell>
                <TableCell>EmployeeID</TableCell>
                <TableCell>START TIME</TableCell>
                <TableCell>REWORK TYPE</TableCell>
                <TableCell>END TIME</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell>2C STATUS</TableCell>
                <TableCell>ACTONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => <TableRow key={index}>
                  <TableCell>  {row.id}</TableCell>
                  <TableCell >{row.barcodenumber}</TableCell>
                  <TableCell >{row.employeeid}</TableCell>
                  <TableCell >{row.starttime}</TableCell>
                  <TableCell >{row.reworktype}</TableCell>
                  <TableCell >{row.endtime}</TableCell>
                  <TableCell >
                    {row.status == 'true' ? <label className='bg-green text-white border border-red text-xs p-1  rounded-3xl'>Done</label> : <label className='bg-red-600 p-1  rounded-3xl text-xs text-white '>Pending</label>}</TableCell>
                  <TableCell >{row.twocstatus == 'false' ? <label className='bg-red-600 text-white text-xs rounded-3xl p-1'>Pending</label> : ''}</TableCell>
                  <TableCell align='right'>
                    <button className='cursor-pointer ' onClick={handleOpen}><IoImagesOutline /></button></TableCell>
                </TableRow>
                )
              }

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
      </Paper>
    </>
  );
}
