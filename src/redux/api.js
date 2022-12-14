import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{"Content-Type": "application/json"}
})

/* 요청과 응답, 성공과 실패에 따라 작성됨 */
api.interceptors.request.use(function (config) {
    console.log("request start", config)
    return config;
  }, function (error) {
    console.log("request error", error)
    return Promise.reject(error);
  });

api.interceptors.response.use(function (response) {
    console.log("get reponse", response);
    return response;
  }, function (error) {
    console.log("errored", error);
    return Promise.reject(error);
  });

export default api;