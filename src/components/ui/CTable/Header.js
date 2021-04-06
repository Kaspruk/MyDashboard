import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";


export function Header(props) {


  const onSort = columnKey => {
    if(props.onSort) props.onSort(columnKey)
  };

  const checkSortStatus = headCell => {
    if(props.params.sortBy) {
      const ind = props.params.sortBy.indexOf(headCell.value)
      if(~ind && props.params.sortDesc && props.params.sortDesc[ind]) return 'desc'
      else return 'asc';
    } else return 'asc';
  }

  const checkActive = headCell => props.params.sortBy && props.params.sortBy.includes(headCell.value)

  return (
    <TableHead>
      <TableRow>
        {props.headers.map((headCell) => (
          <TableCell key={headCell.value} sortDirection={checkSortStatus(headCell)}>
            <TableSortLabel
              key={headCell.value}
              align={headCell.align}
              active={checkActive(headCell)}
              direction={checkSortStatus(headCell)}
              onClick={() => onSort(headCell.value)}>
              {headCell.name}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
