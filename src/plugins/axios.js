import Axios from 'axios';
import Cookie from 'js-cookie';
import router from '@/router/index';

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

api.interceptors.response.use(
    response => response,
    (err) => {
        console.log(err.response.status);
        if (err.response) {
            switch (err.response.status) {
            case 401:
                if (router.currentRoute.path !== '/login') {
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    });
                }
                break;
            default:
                console.error('error');
            }
        }
    }
);

export default api;
