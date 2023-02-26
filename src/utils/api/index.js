import axios from "axios";

export const api = axios.create({
  baseURL: 'https://used-bookstore-api.herokuapp.com',
})