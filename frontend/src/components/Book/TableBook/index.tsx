import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.focusOpacity,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name_livro: string,
  quantidade_livros: number,
  name: string,

) {
  return { name_livro, quantidade_livros, name};
}

const rows = [
  createData('Livro do Gustavera', 159,'Gustavera'),
  createData('Livro do Lauro', 237, 'Lauro'),
  createData('Livro do Wilker', 2, 'Wilker'),
  createData('Livro do Fernando', 3, 'Fernando'),
  createData('Livro do Luis Rondon', 35, 'Luis Rondon'),
];

export default function TableBook() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100,  }} aria-label="customized table.">
        <TableHead >
          <TableRow>
            <StyledTableCell>Título</StyledTableCell>
            <StyledTableCell align="right">Qtd páginas</StyledTableCell>
            <StyledTableCell align="right">Autor</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name_livro}>
              <StyledTableCell component="th" scope="row">
                {row.name_livro}
              </StyledTableCell>
              <StyledTableCell align="right">{row.quantidade_livros}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        {/* <TablePagination rowsPerPageOptions={[10, 50]} /> */}
      </Table>
    </TableContainer>
  );
}
