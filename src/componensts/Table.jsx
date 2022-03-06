import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ListIcon from '@mui/icons-material/List';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    cell: {
        padding: '4px'
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1007', 'Simona', 55, 'Simona', <ListIcon />),
    createData('1008', 'Ariana', 45, 'Adelina', <ListIcon />),
    createData('1009', 'Adam', 35, 'Adam', <ListIcon />),
    createData('1010', 'John', 25, 'John', <ListIcon />),
    createData('1011', 'Garry', 15, 'Garry', <ListIcon />),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.cell}>ID</TableCell>
                        <TableCell className={classes.cell}>Username</TableCell>
                        <TableCell className={classes.cell}>Profit($)</TableCell>
                        <TableCell className={classes.cell}>Comission($)</TableCell>
                        <TableCell className={classes.cell}>View</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell className={classes.cell} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell className={classes.cell}>{row.calories}</TableCell>
                            <TableCell className={classes.cell}>{row.fat}</TableCell>
                            <TableCell className={classes.cell}>{row.carbs}</TableCell>
                            <TableCell className={classes.cell}>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
