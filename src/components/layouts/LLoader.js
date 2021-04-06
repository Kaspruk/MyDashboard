import React  from 'react';
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LLoader (props){
  return (
    <Backdrop {...props}><CircularProgress color="primary"/></Backdrop>
  )
}
