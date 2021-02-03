import {combineReducers} from 'redux';
import itemStateReducer from './itemStateReducer';
import loginStateReducer from './loginStateReducer';

export default combineReducers({
    itemState: itemStateReducer,
    loginState: loginStateReducer,
})