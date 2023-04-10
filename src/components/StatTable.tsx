import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type StatTableProps = {
    rows: row[]
}

type row = {
    title: string,
    body: ActivitesStat,
}

type ActivitesStat = {
    count: number,
    distance: number,
    moving_time: number,
    elapsed_time: number,
    elevation_gain: number,
    achievement_count?: number
 } 

const StatTable: React.FC<StatTableProps> = ({rows}) =>{

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-child(n+4):nth-child(-n+6)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Period </StyledTableCell>
                    <StyledTableCell align="right">Activities </StyledTableCell>
                    <StyledTableCell align="right">Avg Distance</StyledTableCell>
                    <StyledTableCell align="right">Avg Time</StyledTableCell>
                    <StyledTableCell align="right">Elev Gain</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.title}>
                    <StyledTableCell component="th" scope="row">
                        {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.body.count}</StyledTableCell>
                    <StyledTableCell align="right">{(row.body.distance/1000).toFixed(1)} km</StyledTableCell>
                    <StyledTableCell align="right">{(row.body.moving_time/60).toFixed(1)} min</StyledTableCell>
                    <StyledTableCell align="right">{row.body.elevation_gain.toFixed(1)} m</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default StatTable