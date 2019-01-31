import {
    FETCH_LOGIN_SAGA
} from "../actions/authActions";

const authData = (state = {
    app:{}
}, action) => {
    switch (action.type) {
        case FETCH_LOGIN_SAGA:
            const   {data}  = action.payload
            //console.log('reducer saga',action.payload)
            return { ...state,data}
        default:
            return state
    }
}

export default authData;