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