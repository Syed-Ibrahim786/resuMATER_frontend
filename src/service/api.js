import { loginSuccess } from "@/feature/auth/slice/authSlice";
import axios from "axios";
import { error } from "node:console";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_DOMAIN,
    withCredentials:true,
    
})


axios.interceptors.request.use(
    request => {
        const access_token = useSelector(state => state.auth.access_token);
        if(access_token){
            request.headers['Authorization'] = `Bearer ${access_token}`;
        }
        return request;
    },
    error => {
        Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;
        if(error.response.state === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            try {
                const response = await axios.post("/auth/refresh",{
                    withCredentials:true
                })
                const {access_token} =  response.data;
                const dispatch = useDispatch();
                dispatch(loginSuccess({ token: access_token }))
                api.defaults.headers.common['Authorization'] = access_token;
                return api(originalRequest);
            } catch (error) {
                dispatch(loginSuccess({ token: null }));
                const navigate = useNavigate();
                navigate("/login");
                return Promise.reject(error);

            }
        }
        return Promise.reject(error);
    }
)