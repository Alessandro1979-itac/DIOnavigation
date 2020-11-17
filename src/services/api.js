import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3000', // MacOS
    baseURL: 'http://localhost:3000', // Android emulador físico
});

export default api;
