import axios from 'axios'

export const API_URL = 'http://127.0.0.1:8000/auth/'

const $api = axios.create({
    withCredentials: true,
    baseURL: `${API_URL}/token`
    }
)

export default $api