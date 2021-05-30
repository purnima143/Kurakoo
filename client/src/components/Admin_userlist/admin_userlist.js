import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useSelector } from "react-redux";
import {  Redirect } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import Navbar from '../navbar/Navbar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Progress from 'bootstrap-4-react';
import './admin_userlist.css';

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'code', label: 'Is Admin' },
  {
    id: 'population',
    label: 'Number of Questions Asked',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Number of Questions Answer',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    label:'Actions'
  },
  {
    id: 'density',
    label: '',
   
  },
];

function createData(name, code, population, size) {
 
  return { name, code, population, size,};
}

//Dummy data
const rows = [
  createData('User1', <ClearIcon/>, 130, 45),
  createData('User2', <ClearIcon/>, 140, 9),
  createData('User3', <ClearIcon/>, 604, 301),
  createData('User4', <CheckIcon/>, 327, 20),
  createData('User5', <ClearIcon/>,103, 99),
  createData('User6',<ClearIcon/>, 400, 2024),
  createData('User7', <CheckIcon/>, 200,8),
  createData('User8', <CheckIcon/>, 4, 7),
  createData('User9', <ClearIcon/>, 121, 190),
  createData('User10', <ClearIcon/>, 120,3),
  createData('User11', <ClearIcon/>, 6702, 485),
  createData('User12', <ClearIcon/>, 57, 245),
  createData('User13', <ClearIcon/>, 14, 17),
  createData('User14', <ClearIcon/>, 200, 68),
  createData('User15',<ClearIcon/>, 21, 87),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);



    
        if (auth.authenticate) {
        return <Redirect to={"/"} />;
    }




  if (user.loading) {
      return <Progress mb='4' w='25%'><Progress.Bar striped animated min='0'max='100' mx='auto' now='50'>Loading....</Progress.Bar></Progress>;
  }

  return (
      <>
      <div style={{marginRight:'10vh'}}><Navbar/></div>
    <Paper >
      <TableContainer style={{marginTop:'80px'}}>
        <Table stickyHeader aria-label="sticky table" style={{textAlign:'canter'}}>
          <TableHead >
            <tr >
              {columns.map((column) => (
                <th
                  key={column.id} className="tablehead"
                >
                  {column.label}
              
                </th>
              ))}
            </tr>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <tr hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} style={{textAlign:'center'}}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
              
                      </TableCell>
                    );
                  })}
                 
                        {<EditIcon className="editicon"/>}
                        {<DeleteIcon className="deleteicon"/>}
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    
    </>
  );
}
