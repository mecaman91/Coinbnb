import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import TableFooter from '@mui/material/TableFooter';

const columns = [
  { id: 'name', label: 'Name', align: 'left', minWidth: 170 },
  { id: 'price', label: 'Price', format: (value) => value.toLocaleString('en-US'), minWidth: 100 },
  {
    id: 'change',
    label: 'Change',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'volume',
    label: 'volume',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'market',
    label: 'B&B Market',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'detail',
    label: '',
    minWidth: 170,
    align: 'center',
  },
];

function createData(name, price, change, market, volume, detail) {
  return { name, price, change, market, volume, detail};
}

const rows = [
  createData('BTC', '$20,000', '+0.60%', 'Bullish', 123123, 'detail'),
  createData('ETH', '$1,613', '+3.54%', 'Bearlish', 456456, 'detail'),
  createData('USDT', '$0.99', '+0.04%', 'Bullish', 798789, 'detail'),
  createData('BNB', '$304', '+2.70%', 'Bullish', 123123, 'detail'),
  createData('XRP', '$0.46', '-0.42%', 'Bearlish', 498462, 'detail'),
  createData('BUSD', '$0.1', '+0.01%', 'Bearlish', 1165749, 'detail'),
  createData('DOGE', '$0.126', '+55.11%', 'Bullish', 115681, 'detail'),
  createData('ADA', '$0.416', '+2.36%', 'Bullish', 554982, 'detail'),
  createData('SOL', '$33.11', '+0.43%', 'Bearlish', 222168, 'detail'),
  createData('MATIC', '$0.9297', '-1.27%', 'Bearlish', 224978, 'detail'),
];

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: '55vh' }}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (row[column.id] == 'detail') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Button variant="text" onClick={props.openModal}>Detail</Button>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
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
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
