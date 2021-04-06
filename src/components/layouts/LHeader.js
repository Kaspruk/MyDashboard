import React  from 'react';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { getPageName } from "../../common/utils/getPageName";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToApp from '@material-ui/icons/ExitToApp';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Dashboard from '@material-ui/icons/Dashboard';
import IconButton from '@material-ui/core/IconButton';
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
import AddIcon from '@material-ui/icons/AddCircleSharp';
import AccountBox from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => ({
  logout: {
    transform: 'rotateY(180deg)'
  },
}));

export default function LHeader (props){
  const classes = useStyles();

  let location = useLocation();
  const title = getPageName(location)

  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <span className="page-title">{title}</span>
        {/*<IconButton aria-label="home" to="/create-structure" component={NavLink} color="inherit"><PostAddSharpIcon/></IconButton>*/}
        <IconButton aria-label="create" to="/create" component={NavLink} color="inherit" exact><AddIcon scale={1.2} /></IconButton>
        <IconButton aria-label="home" to="/" component={NavLink} color="inherit" exact><Dashboard/></IconButton>
        {/*{*/}
        {/*  !props.hasLogin ? <React.Fragment>*/}
        {/*    <IconButton aria-label="sign-in" color="inherit" to="/sign-in" component={NavLink}><ExitToApp /></IconButton>*/}
        {/*    <IconButton aria-label="login" color="inherit" to="/login" component={NavLink}><PersonAdd /></IconButton>*/}
        {/*  </React.Fragment> : <React.Fragment>*/}
        {/*    <IconButton aria-label="account" color="inherit"><AccountBox /></IconButton>*/}
        {/*    <IconButton aria-label="sign-out" color="inherit" className={classes.logout}><ExitToApp /></IconButton>*/}
        {/*  </React.Fragment>*/}
        {/*}*/}
      </Toolbar>
    </AppBar>
  )
}
