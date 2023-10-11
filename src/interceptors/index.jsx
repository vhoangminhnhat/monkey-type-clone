import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_BASE_URL,
    timeout: 50000
});

//Request interceptors
api.interceptors.request.use(
    (config) => {
        //Get Tokens
        const token = localStorage.getItem('token');

        //If there is a token ?
        if(token){
            //Request headers
            config.headers.setAuthorization(`Bearer ${token}`)
        }
        return config;
    },
    (error) => Promise.reject(error),
);

//Response interceptors
api.interceptors.response.use(
    (response) => {
            return response?.data
    },
    (error) => {
        if(error?.response?.status === 401){
            localStorage.removeItem('token')
        };
        return Promise.resolve(error?.data)
    }
);

export default api;