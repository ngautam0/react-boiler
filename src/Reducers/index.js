import { combineReducers } from 'redux'
import * as todosReducer from './todos'
import * as homeReducer from './home'

export default combineReducers({ ...todosReducer, ...homeReducer })
