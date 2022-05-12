import React, {useState} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import '../css/Table.css'
import { ClickableItem } from "./ClickableCellItem";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      width: '0px',
      tableLayout: 'auto'
    },
    tableCell: {
      minWidth: '100px',
      borderBottom: 'none !important',
      paddingBottom: '2px'
    },
    tableCellRoot: {
      padding: "0px"
    }
  });

export const TableComponent = ({ data }) => {
    const classes = useStyles();
    const [stateData, setStateData ] = useState(data.features || []);
    const [ sortDirection, setSortDirection ] = useState(0);
    const [ sortField, setSortField ] = useState('');

    const sortData = (field) => {
      console.log(field);
      let sortDir = 1;
      const dataForSort = [...stateData];
      if(sortField === field){
        sortDir = ((sortDirection === 0) ? 1 : ((sortDirection === 1) ? -1 : 1));
      }
      dataForSort.sort((a,b) => (a.properties[field] > b.properties[field]) ? 1*sortDir : ((b.properties[field] > a.properties[field]) ? -1*sortDir : 0*sortDir))
      setSortDirection(sortDir);
      setSortField(field);
      console.log("Non Sorted Data", stateData);
      setStateData(dataForSort);
      console.log("Sorted Data", dataForSort);
    }

    const getSortIconCss = (field) => {
      if(field !== sortField || sortDirection === 0) {
        return '';
      }
      if(sortDirection === 1){
        return 'asc-sort';
      }
      return 'dsc-sort';
    }

    const fullDateTime = (date) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute:'numeric', second:'numeric' };
        var d = new Date(date);          
        var newDate = d.toLocaleString([], options);
        return newDate;
    }

    return(
        <div style={{margin: '0 auto'}}>
            <h3>{data.metadata.title}</h3>
            <TableContainer >
                <Table sx={{ maxWidth: 650, margin: '0 auto' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={`${classes.tableCell} ${getSortIconCss("place")}`} align="center" onClick={(e) => {
                              sortData("place");
                            }}>Title</TableCell>
                            <TableCell className={`${classes.tableCell} ${getSortIconCss("mag")}`} align="center" onClick={(e) => {
                              sortData("mag");
                            }}>Magnitude</TableCell>
                            <TableCell className={`${classes.tableCell} ${getSortIconCss("time")}`} align="center" onClick={(e) => {
                              sortData("time");
                            }}>Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stateData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className={classes.tableCell} align="left"><ClickableItem row={row} index={index} cssClass='clickCellItem'>{row.properties.place}</ClickableItem></TableCell>
                                <TableCell className={classes.tableCell} align="center">{row.properties.mag}</TableCell>
                                <TableCell className={classes.tableCell} align="left">{fullDateTime(row.properties.time)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};