export const GET_BOOKS_SAGA = 'GET_BOOKS_SAGA'
export const FETCH_BOOKS_SAGA = 'FETCH_BOOKS_SAGA'
export const CREATE_BOOKS_SAGA = 'CREATE_BOOKS_SAGA'
export const FETCH_CREATE_BOOKS_SAGA = 'FETCH_CREATE_BOOKS_SAGA'
//Action Creators

export const getBooksSaga = (payload) => ({
    type : GET_BOOKS_SAGA,
    payload
})

export const fetchBooksSaga = (payload) => ({
    type : FETCH_BOOKS_SAGA,
    payload
})

export const createBooksSaga = (payload) => ({
    type : CREATE_BOOKS_SAGA,
    payload
})

export const fetchCreateBooksSaga = (payload) => ({
    type: FETCH_CREATE_BOOKS_SAGA,
    payload
})