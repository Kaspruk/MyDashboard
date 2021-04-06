import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router} from "react-router-dom";

import store from './store';
import './assets/styles/main.scss';
import Theme from "./plugins/MaterialUi";
// import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MuiThemeProvider theme={Theme}>
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
