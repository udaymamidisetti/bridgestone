import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const data = [{ "id": 1, "barcodenumber": "6920730804", "employeeid": "45662", "starttime": "12:44 AM", "reworktype": "spot", "endtime": "12:49 AM", "status": 'false', "twocstatus": 'false '},
{ "id": 2, "barcodenumber": "8319667739", "employeeid": "404", "starttime": "1:01 AM", "reworktype": "spot", "endtime": "6:02 PM", "status": 'true', "twocstatus": 'false' },
{ "id": 3, "barcodenumber": "9948826574", "employeeid": "3", "starttime": "11:43 AM", "reworktype": "barcode", "endtime": "1:03 AM", "status": 'false', "twocstatus": 'false' },
{ "id": 4, "barcodenumber": "4246938068", "employeeid": "744", "starttime": "9:08 AM", "reworktype": "letter ", "endtime": "11:35 PM", "status": 'true', "twocstatus": 'false' },
{ "id": 5, "barcodenumber": "4589940809", "employeeid": "4899", "starttime": "1:43 PM", "reworktype": "buff", "endtime": "6:55 AM", "status": 'true', "twocstatus": 'false' },
{ "id": 6, "barcodenumber": "6859652624", "employeeid": "43833", "starttime": "1:26 AM", "reworktype": "buff", "endtime": "2:09 PM", "status": 'true', "twocstatus": 'true' },
{ "id": 7, "barcodenumber": "4993845014", "employeeid": "1", "starttime": "3:15 PM", "reworktype": "spot", "endtime": "9:19 PM", "status": 'false', "twocstatus": 'true' },
{ "id": 8, "barcodenumber": "9115195570", "employeeid": "09", "starttime": "9:22 AM", "reworktype": "letter ", "endtime": "6:26 PM", "status": 'true', "twocstatus": 'false '},
{ "id": 9, "barcodenumber": "2936475899", "employeeid": "4", "starttime": "8:50 PM", "reworktype": "barcode", "endtime": "12:22 AM", "status": 'true', "twocstatus": 'false '},
{ "id": 10, "barcodenumber": "2231936658", "employeeid": "65", "starttime": "7:38 PM", "reworktype": "letter", "endtime": "9:22 PM", "status": 'true', "twocstatus": 'false' }]


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '1000px', overflow: 'hidden' }}>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => <TableRow key={index}>
                  <TableCell>  {row.id}</TableCell>
                  <TableCell >{row.barcodenumber}</TableCell>
                  <TableCell >{row.employeeid}</TableCell>
                  <TableCell >{row.starttime}</TableCell>
                  <TableCell >{row.reworktype}</TableCell>
                  <TableCell >{row.endtime}</TableCell>
                  <TableCell >
                    {row.status=='true'?<label className='bg-green text-white border border-red text-xs p-1  rounded-3xl'>Done</label>:<label className='bg-red-600 text-white text-xs p-1  rounded-3xl '>Pending</label>}</TableCell>
                  <TableCell >{row.twocstatus=='false'?<label className='bg-red-600 text-white text-xs p-1  rounded-3xl '>Pending</label>:''}</TableCell>
                </TableRow>
              )
            }

          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
