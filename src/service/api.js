import { authChecked, loginSuccess } from "@/feature/auth/slice/authSlice";
import { store } from "@/store/store";
import axios from "axios";




export const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_DOMAIN,
    withCredentials:true,
    
})

/* *******************      Request Interceptor        ***************** */

api.interceptors.request.use(
    config => {
        const access_token = store.getState().auth.token;
        console.log(access_token);
        if(access_token){
            config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


/* **********************       Response Interceptor ******************* */
api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;
        if(error.response?.status === 401 && !originalRequest._retry){
            console.log(error, error.response?.data)
            originalRequest._retry = true;
            try {
                const response = await axios.post("/auth/refresh",{
                    withCredentials:true
                })
                const {access_token} =  response.data;
                store.dispatch(loginSuccess({ token: access_token, isAuthenticated:true }))
                api.defaults.headers.common['Authorization'] = access_token;
                return api(originalRequest);
            } catch (error) {
                console.log("refreshtoken expired")
                store.dispatch(loginSuccess({ token: null, isAuthenticated:false }));
                window.location.href = "/login"; 
                return Promise.reject(error);

            }finally{
                store.dispatch(authChecked())
            }
        }
        return Promise.reject(error);
    }
)