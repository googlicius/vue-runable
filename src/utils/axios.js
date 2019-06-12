import axios from 'axios'

const axiosInstance = axios.create({
    headers: { 
        'Content-Type': 'application/json'
    },
    baseURL: 'https://api.github.com'
})

export default axiosInstance