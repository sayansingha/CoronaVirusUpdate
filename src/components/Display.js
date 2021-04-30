import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
    //   minidth: 350,
    // position: "relative"
    },
  })

export default function Display(props) {
    const classes = useStyles();
    return (
        <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>{props.politicalIdentity}</TableCell>
                    <TableCell align="right">CONFIRMED</TableCell>
                    <TableCell align="right">ACTIVE</TableCell>
                    <TableCell align="right">RECOVERED</TableCell>
                    <TableCell align="right">DECEASED</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                
                    <TableRow >
                    <TableCell component="th" scope="row">
                        <b>{props.state}</b>
                    </TableCell>
                    <TableCell align="right"><b>{props.confirmed}</b></TableCell>
                    <TableCell align="right"><b>{props.active}</b></TableCell>
                    <TableCell align="right"><b>{props.recovered}</b></TableCell>
                    <TableCell align="right"><b>{props.deceased}</b></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}
