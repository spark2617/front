import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = token
  }
  
 return config;
})


api.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
 }

 return Promise.reject(error);
});

export { api }