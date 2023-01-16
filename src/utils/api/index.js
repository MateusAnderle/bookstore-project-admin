import axios from 'axios'

export const zipCodeApi = axios.create({
  baseURL: 'https://viacep.com.br/ws',
})

export const api = axios.create({
  baseUrl: '',
})
