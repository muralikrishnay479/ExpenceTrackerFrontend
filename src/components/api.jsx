import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5154/api",
  timeout: 5000,
});


