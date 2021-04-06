import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

export function Footer(props) {
  const onPageChange = page => { if(props.onChangePage) props.onChangePage(page) }
  const onRowsPerPageChange = itemsPerPage => { if(props.onChangeItemsPerPage) props.onChangeItemsPerPage(itemsPerPage) }

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          labelRowsPerPage="Кількість елементів"
          labelDisplayedRows={({from, to, count}) => `${from}-${to<0 ? count : to}  з ${count<0 ? '~' : count}`}
          rowsPerPageOptions={props.footerProps['items-per-page-options']}
          colSpan={props.headers.length}
          count={props.tableParams.itemsLength}
          rowsPerPage={props.tableParams.itemsPerPage}
          page={props.tableParams.page}
          SelectProps={{ inputProps: { 'aria-label': 'Кількість елементів' } }}
          onChangePage={(event, page) => onPageChange(page)}
          onChangeRowsPerPage={itemsPerPage => onRowsPerPageChange(itemsPerPage)} />
      </TableRow>
    </TableFooter>
  )
}
