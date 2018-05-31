import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

// Config for axios middleware client
const client = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  responseType: 'json'
})

// Add a request interceptor
client.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('Begin#############')
  return config
}, function (error) {
  // Do something with request error
  console.log('Request Error #############')
  return Promise.reject(error)
})

// Add a response interceptor
client.interceptors.response.use(function (response) {
  // Do something with response data
  console.log(response)
  console.log('End#############')
  return response
}, function (error) {
  // Do something with response error
  console.log('Response Error #############')
  return Promise.reject(error)
})
const axiosMiddlewareClient = axiosMiddleware(client)

export {axiosMiddlewareClient}
