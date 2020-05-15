import axios from 'axios';

const api = axios.create({
    baseURL: 'https://atlas-231814.appspot.com/calcula'
});

export default api;