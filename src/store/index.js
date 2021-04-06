import { createStore, combineReducers, compose } from 'redux';
import root from './reducers/root'

export default createStore(combineReducers({
    root,
}), compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))