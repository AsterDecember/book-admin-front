import { call, put, takeEvery, all } from 'redux-saga/effects';
import {login} from '../middleware/authAPI'
import {GET_LOGIN_SAGA,fetchLoginSaga} from '../actions/authActions'
import {getBooksAPI} from '../middleware/booksAPI'
import { fetchBooksSaga, GET_BOOKS_SAGA } from '../actions/booksActions';
//********************************************/
//*******************************************/
//*************Auth functions***************/
function* getLogin(payload){
    try{    
        const {data} =  yield call(login,payload)
        yield put(fetchLoginSaga(data))
    }catch(e){
        console.log(e)
    }
}
//****** */***Catch the Auth actions***********/
function* loadLogin(){
    yield takeEvery(GET_LOGIN_SAGA,getLogin)
}

//********************************************/
//*******************************************/
//*************Books functions***************/
function* getBooks(){
    try{
        const {data} = yield call(getBooksAPI)
        yield put (fetchBooksSaga(data))
    }catch(e){
        console.log(e)
    }
}

//****** */***Catch the Auth actions***********/
function* loadBooks(){
    yield takeEvery(GET_BOOKS_SAGA,getBooks)
}


function* rootSaga() {
    yield all([
        loadLogin(),
        loadBooks()
    ]);
}

export default rootSaga;