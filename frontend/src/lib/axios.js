import axios from "axios";

const BASE_URL = process.env.SERVER_URI;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
