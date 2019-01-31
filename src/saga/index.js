import { call, put, takeEvery, all } from 'redux-saga/effects';
import {login} from '../middleware/authAPI'
import {GET_LOGIN_SAGA,fetchLoginSaga} from '../actions/authActions'
function* getLogin(){
    try{    
        const {data} =  yield call(login)
        yield put(fetchLoginSaga(data))
    }catch(e){
        console.log(e)
    }
}


function* loadLogin(){
    yield takeEvery(GET_LOGIN_SAGA,getLogin)
}

function* rootSaga() {
    yield all([
        loadLogin()
    ]);
}

export default rootSaga;