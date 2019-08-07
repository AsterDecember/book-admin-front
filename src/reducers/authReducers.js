import {
    FETCH_LOGIN_SAGA
} from "../actions/authActions";

const authData = (state = {
    user:{}
}, action) => {
    switch (action.type) {
        case FETCH_LOGIN_SAGA:
            const   user =  action.payload
            //console.log('reducer saga',action.payload)
            return { ...state,user}
        default:
            return state
    }
}

export default authData;