const axios = window.axios;

const token = JSON.parse(localStorage.getItem('access_token')).access_token.access_token

const BASE_URL = 'http://127.0.0.1:8000/api';

const headers = {
    headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
    }
    
}

export default { 
    login : (data) => axios.post(`${BASE_URL}/login`,data),
    getUser : () => axios.get(`${BASE_URL}/user`, headers),
    getListUsers : () => axios.get(`${BASE_URL}/user/list`, headers),
    storeUser : (data) => axios.post(`${BASE_URL}/user/store`, data, headers),

}