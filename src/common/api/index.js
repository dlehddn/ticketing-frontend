import axios from 'axios';
import store from '@/common/store/store'

function apiInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_BASE_URL,
        headers: {
            "Content-Type": 'application/json;charset=utf-8',
        },
    });

    instance.interceptors.request.use(function (config) {
        const accessToken = store.getters.getToken;
        if (accessToken) {
            config.headers['Authorization'] = accessToken;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    return instance;
}

export {apiInstance};