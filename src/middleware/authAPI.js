import axios from "axios";

/**
 * Api auth
 */

const host = 'http://localhost:3000/auth'

export const signup = (info)=>{
    return axios.post(`${host}/signup`,info.payload)
        .then(r=> r.data)
        .catch(e=> e.response)
}

export const login = (info)=>{
    const {payload} = info
    console.log('middleware data 2:',payload)
    return axios.post(`${host}/login`,payload,{withCredentials:true})
        .then(r=> {
            console.log('response middleware after api:',r)
            return r
        })
        .catch(e=> e.response)
}


export const getProfile = () =>{
    return axios.get(`${host}/profile`,{withCredentials: true})
        .then(r=> r.data)
        .catch(e=> e.response)
}

export const setUserLocal = (user) =>{
    localStorage.setItem('user', JSON.stringify(user))
}