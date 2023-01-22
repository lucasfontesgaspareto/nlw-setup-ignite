import axios, { AxiosRequestConfig } from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000'
})

api.interceptors.request.use((request: AxiosRequestConfig) => {
  request.headers.set(
    'Authorization',
    `Bearer ${JSON.parse(localStorage['recoil-persist'])?.authState}`
  )

  return request
})
