import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStat } from '../store/slices/athleteProfileSlice'
import { fetcActivites } from '../store/slices/athleteActivitesSlice'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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






const StatPage = () =>{

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStat())
        dispatch(fetcActivites())
    },[])

    const {recent_ride_totals, all_ride_totals, ytd_ride_totals,
         recent_run_totals, all_run_totals, ytd_run_totals,
         recent_swim_totals, all_swim_totals, ytd_swim_totals
         } =  useSelector((state) => state.athleteProfile.stat)

    const rows = [
        {
            title: "Last 4 weeks run stats",
            body: recent_ride_totals
        },
        {
            title: "The year to date run stats",
            body: ytd_ride_totals
        },
        {
            title: "The all time run stats",
            body: all_ride_totals
        },        {
            title: "Last 4 weeks run stats",
            body: recent_run_totals
        },
        {
            title: "The year to date run stats",
            body: ytd_run_totals
        },
        {
            title: "The all time run stats",
            body: all_run_totals
        },        {
            title: "Last 4 weeks run stats",
            body: recent_swim_totals
        },
        {
            title: "The year to date run stats",
            body: ytd_swim_totals
        },
        {
            title: "The all time run stats",
            body: all_swim_totals
        },


    ]     
    
return(
    <>
        { recent_ride_totals === undefined ? "Loading..." :
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
        }
    </>
    )
}



export default StatPage