
import { combineReducers } from 'redux';
//import reducers
import authData from './authReducers'
import booksData from './booksReducers'
export default combineReducers({
    //export here
    authData,
    booksData
})