import {
    FETCH_BOOKS_SAGA,
    FETCH_CREATE_BOOKS_SAGA
} from "../actions/booksActions";

const booksData = (state = {
    books: {}
}, action) => {
    switch (action.type) {
        case FETCH_BOOKS_SAGA:
            const books = action.payload
            console.log('reducer saga', action.payload)
            return { ...state, books }
        case FETCH_CREATE_BOOKS_SAGA:
            const info = action.payload
            return {...state,info}
        default:
            return state
    }
}

export default booksData;