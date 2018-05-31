import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import axiosMiddleware from 'redux-axios-middleware'

export const client = axios.create({
  baseURL: 'http://localhost:8080',
  responseType: 'json'
})

export const MockApi = new MockAdapter(client)
export const middlewares = [axiosMiddleware(client)]
export const BASE_URL = 'http://localhost:8080'
