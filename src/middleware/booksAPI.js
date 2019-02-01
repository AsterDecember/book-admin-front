import axios from "axios";

/**
 * Api books
 */

const host = 'http://localhost:3000/books'

export const getBooksAPI = () => {
    return axios.get(`${host}`)
        .then(r => r)
        .catch(e => console.log(e))
}

export const createBooksAPI = (book) => {
    return axios.post(`${host}`,book)
        .then(r=>r)
        .catch(e=>console.log(e))
}