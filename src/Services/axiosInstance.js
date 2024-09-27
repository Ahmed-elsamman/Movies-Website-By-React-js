import axios from "axios";



 export const axiosInstance=  axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers: {},
    params:{api_key:"f42318924ae109a01cbbef3dcd684548"}
})

// * request Interceptor

axiosInstance.interceptors.request.use((req)=>{},(err)=>{})


// * response Interceptor

axiosInstance.interceptors.response.use((res)=>{},(err)=>{})