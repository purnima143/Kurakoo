import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from "react-redux";
import {  Redirect } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Navbar from '../navbar/Navbar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Progress from 'bootstrap-4-react';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Is Admin', minWidth: 100 },
  {
    id: 'population',
    label: 'Number of Questions Asked',
    minWidth: 280,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Number of Questions Answered',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: '',
    minWidth:150,
    align: 'left',
    // format: (value) => value.toFixed(2),
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

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
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
    const dispatch = useDispatch();

        if (auth.authenticate) {
        return <Redirect to={"/"} />;
    }

    if (user.loading) {
        return <Progress mb='4' w='25%'><Progress.Bar striped animated min='0'max='100' mx='auto' now='50'>Loading....</Progress.Bar></Progress>;
    }

  return (
      <>
      <Navbar/>
    <Paper className={classes.root} >
      <TableContainer className={classes.container} style={{marginTop:'80px'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
              
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
              
                      </TableCell>
                    );
                  })}
                        {<EditIcon/>}
                        {<DeleteIcon/>}
                </TableRow>
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
