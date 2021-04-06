import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Dashboard} from "../../views/Dashboard/Dashboard";
import {CreateArticle} from "../../views/CreateArticle";
import {ManageCategories} from "../../views/ManageCategories";
import {Authentication} from "../../views/Authentication";
import { Switch } from "react-router-dom";

const useStyles = makeStyles({
  content: {
    padding: '30px',
  },
});

const baseRoutes = [
  {
    name: 'dashboard',
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    name: 'createArticle',
    path: '/create',
    component: CreateArticle,
    exact: true,
  },
  {
    name: 'CreateStructure',
    path: '/create-structure',
    component: ManageCategories,
  },
  {
    name: 'signIn',
    path: '/sign-in',
    component: Authentication,
    exact: true,
  },
  {
    name: 'login',
    path: '/login',
    component: Authentication,
    exact: true,
  }
]

export default function LContent() {
  const styles = useStyles();
  return(
    <div className={styles.content}>
      <Switch>
        {baseRoutes.map((route, i) => <route.component {...route} key={i} routes={route.routes} /> )}
      </Switch>
    </div>
  )
}
