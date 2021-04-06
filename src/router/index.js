import React from 'react'
import { Switch } from "react-router-dom";

import {CreateArticle} from "../views/CreateArticle";
import {Authentication} from "../views/Authentication";
import {Dashboard} from "../views/Dashboard/Dashboard";
import {ManageCategories} from "../views/ManageCategories";


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

export default function RouterView() {
    return(
        <Switch>
            {baseRoutes.map((route, i) => {
                return (<route.component {...route} key={i} routes={route.routes}/>)
            } )}
        </Switch>
    )
}
