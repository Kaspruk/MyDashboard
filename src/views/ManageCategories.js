import React, {useState, useEffect} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export function ManageCategories(props) {
  const tabs = [
    { label: 'Категорії', path: '/categories' },
    { label: 'Субкатегорії', path: '/sub-categories' },
    { label: 'Папки', path: '/foldres' },
    { label: 'Теги', path: '/tags' }
  ]

  const [activeTab, setActiveTab] = useState(0)
  const history = useHistory();


  const checkActiveRoute = () => {
    const path = history.location.pathname.slice(1).split('/')
    if(path[1]) {
      const tabIndex = tabs.findIndex(tab => tab.path===`/${path[1]}`)
      setActiveTab(tabIndex);
    }
  }

  const changeRoute = (event, path) => {
    if(event) event.preventDefault();
    if(history.location.pathname !== `/create-structure${path}`) history.replace(`/create-structure${path}`)
  }

  useEffect(() => {
    if(history.location.pathname === '/create-structure') changeRoute(null, '/categories');
    checkActiveRoute();
  })


  return (
    <Grid spacing={1} container>
      <Grid item xs={12}>
        <Tabs variant="fullWidth" value={activeTab} aria-label="nav tabs">
          {
            tabs.map((tab, index) => <Tab
              {...tab}
              component="a"
              key={tab.path}
              id={`nav-tab-${index+1}`}
              aria-controls={`nav-tabpanel-${index+1}`}
              onClick={event => changeRoute(event, tab.path)} />)
          }
        </Tabs>
      </Grid>

      <Grid item xs={12}>
        <Switch>
          {props.routes.map(route => <Route key={route.name} path={route.path} component={route.component} exact /> )}
        </Switch>
      </Grid>
    </Grid>
  )
}
