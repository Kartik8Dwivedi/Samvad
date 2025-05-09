import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_URI;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
