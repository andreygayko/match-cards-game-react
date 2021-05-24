import { useState } from "react";
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@material-ui/core";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ArrowBackIos } from '@material-ui/icons';
import clsx from 'clsx';

import { useStyles } from "./themes/theme";

type Order = 'asc'|'desc';
type CellType = 'name'|'time'|'steps';
interface HeadCell {
  id: CellType;
  label: string;
};

interface PropTypes {
  closeLeaderboard: () => void;
}

const StyledTableSortLabel = makeStyles((theme) =>
  createStyles({
    root: {
      color: '#282c34',
      "&:hover": {
        color: 'gray',
      },
    },
    active: {},
    icon: {
        '& path': {
            fill: '#282c34'
        },
    },
  })
);

const records = [
    { name: '111', time: '00:01:09', steps: '14' },
    { name: '222', time: '00:01:32', steps: '13' },
    { name: '333', time: '00:01:50', steps: '9' },
    { name: '444', time: '00:00:30', steps: '20' },
    { name: '555', time: '00:00:50', steps: '15' },
  ];

const LeaderBoard = (props: PropTypes) => {

const classesLB = StyledTableSortLabel();
const classes = useStyles();

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<CellType>('name');

  const headCells: HeadCell[] = [
    { id: 'name', label: 'Name' },
    { id: 'time', label: 'Time' },
    { id: 'steps', label: 'Steps' },
  ];

  const handleRequestSort = (type: 'name'|'time'|'steps') => {
    recordSort(type, order === 'asc' ? 'desc' : 'asc');
    setOrderBy(type);
    setOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const stringComparator = (arr: string[], order: Order) => {
    return arr.sort((a, b) => order === 'asc' ? (a > b ? 1 : -1) : (a < b ? 1 : -1));
  };

  const numComparator = (arr: string[], order: Order) => {
    return arr.sort((a, b) => order === 'asc' ? parseInt(a) - parseInt(b) : parseInt(b) - parseInt(a));
  };

  const recordSort = (key: 'name'|'time'|'steps', order: Order) => {
    const unsortedArr = records.map(rec => rec[key]);
    const sortedValues = key === 'steps' ? numComparator(unsortedArr, order) : stringComparator(unsortedArr, order);
    return sortedValues.map(el => records[records.findIndex(rec => rec[key] === el)]);
  };

  return (
    <Container>
      <Button className={classes.mv1} startIcon={<ArrowBackIos/>} variant='outlined' onClick={() => props.closeLeaderboard()}>Back</Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map(cell => (
              <TableCell>
                <TableSortLabel
                  className={clsx(classesLB.root, classesLB.active, classesLB.icon)}
                  active={orderBy === cell.id}
                  direction={order}
                  onClick={() => handleRequestSort(cell.id)}>
                    {cell.label}
                </TableSortLabel>
              </TableCell>))}
            </TableRow>
          </TableHead>

          <TableBody>
            {recordSort(orderBy, order).map((record, i) => (
              <TableRow hover>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.time}</TableCell>
                <TableCell>{record.steps}</TableCell>  
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default LeaderBoard;