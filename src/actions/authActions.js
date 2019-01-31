//Action Types
export const FETCH_LOGIN_SAGA = 'FETCH_LOGIN_SAGA'
export const GET_LOGIN_SAGA = 'GET_LOGIN_SAGA'

//Action Creators

export const getLoginSaga = (payload) => ({
    type : GET_LOGIN_SAGA,
    payload
})

export const fetchLoginSaga = (payload) => ({
    type : FETCH_LOGIN_SAGA,
    payload
})
