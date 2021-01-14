const axios = window.axios;

const storage = JSON.parse(localStorage.getItem('access_token'));

let token = '';
if (storage != null) {
    // console.log(storage)
    token = storage.access_token.access_token
    // console.log(token)
}

const BASE_URL = 'http://127.0.0.1:8000/api';

const headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

}

export default {
    login: (data) => axios.post(`${BASE_URL}/login`, data),
    logout: (data) => axios.post(`${BASE_URL}/logout`, data, headers),
    getUser: () => axios.get(`${BASE_URL}/user`, headers),
    find: (id) => axios.get(`${BASE_URL}/user/find/${id}`, headers),
    getListUsers: () => axios.get(`${BASE_URL}/user/list`, headers),
    storeUser: (data) => axios.post(`${BASE_URL}/user/store`, data, headers),
    updateUser: (data) => axios.post(`${BASE_URL}/user/update`, data, headers),

}