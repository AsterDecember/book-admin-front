import { call, put, takeEvery, all } from 'redux-saga/effects';
import {login} from '../middleware/authAPI'
import {GET_LOGIN_SAGA,fetchLoginSaga} from '../actions/authActions'
import {getBooksAPI,createBooksAPI} from '../middleware/booksAPI'
import { fetchBooksSaga,fetchCreateBooksSaga, GET_BOOKS_SAGA ,CREATE_BOOKS_SAGA} from '../actions/booksActions';
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
function* createBooks(info){
    try{
        //console.log('payload prev api',payload)
        const {data} = yield call(createBooksAPI,info.payload)
        yield put (fetchCreateBooksSaga(data))
    }catch(e){
        console.log(e)
    }
}
//****** */***Catch the Auth actions***********/
function* loadBooks(){
    yield takeEvery(GET_BOOKS_SAGA,getBooks)
}
function* loadCreateBooks(){
    yield takeEvery(CREATE_BOOKS_SAGA,createBooks)
}

function* rootSaga() {
    yield all([
        loadLogin(),
        loadBooks(),
        loadCreateBooks()
    ]);
}

export default rootSaga;