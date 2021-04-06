import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  progress: {
    width: '100%',
    '&>td': {
      padding: 0,
    },
  },
  dBlock: {
    display: 'block'
  }
}));

export function Body(props) {
  const classes = useStyles();

  const getColumnContent = (head, item, index) => {
    let Children;
    if(Array.isArray(props.children)) Children = props.children.find(child => child.props.column === head.value)
    else Children = props.children.props.column === head.value && props.children;

    if(Children) return (<Children.type {...Children.props} item={item} index={index} />);
    else if(head.value in item) return item[head.value]
    else return '-'
  }

  return (
    <TableBody>
      {props.loading && <React.Fragment>
        <TableRow className={classes.progress}>
          <TableCell colSpan={props.headers.length}>
            <LinearProgress />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={props.headers.length}>
            <Typography variant="subtitle2" component="span" align="center" className={classes.dBlock}>Завантаження даних...</Typography>
          </TableCell>
        </TableRow>
      </React.Fragment>}
      {props.items.length ? props.items.map((item, index) => (
        <TableRow key={index}>{ props.headers.map(head => {
          return (<TableCell key={head.value} align={head.align}>{getColumnContent(head, item, index)}</TableCell>)
        })}</TableRow>
      )) : !props.loading && <TableRow>
        <TableCell colSpan={props.headers.length}>
          <Typography variant="subtitle2" component="span" align="center" className={classes.dBlock}>Данних не знайдено!</Typography>
        </TableCell>
      </TableRow>}
    </TableBody>
  )
}
