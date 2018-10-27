import Axios from 'axios';
import Cookie from 'js-cookie';

const api = Axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 1000,
});

api.interceptors.request.use(
    (config) => {
        const newConfig = config;
        const token = Cookie.get('api_token');
        if (token) {
            newConfig.headers.Authorization = `Bearer ${token}`;
        }
        return newConfig;
    },
    (err) => {
        Promise.reject(err);
    }
);


export default api;
