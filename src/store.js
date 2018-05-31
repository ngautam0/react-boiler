import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { axiosMiddlewareClient } from './Services/axiosMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
// we can also add production only dev tools if req, and debug in production
import reducer from './Reducers'

// Config for redux persist
const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunk, axiosMiddlewareClient)
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(thunk, axiosMiddlewareClient, logger)
  }
}

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  // no actionsBlacklist in developmentOnly has been Specified.. it can be used in production
})

function configureStore (initialState = {}) {
  const enhancer = composeEnhancers(getMiddleware())

  return createStore(persistedReducer, initialState, enhancer)
};

const store = configureStore()
const persistor = persistStore(store)
export { store, persistor }
