import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import registerServiceWorker from './registerServiceWorker'

import { MuiThemeProvider } from 'material-ui/styles'
import { defaultTheme } from './themes'
import { Router } from 'react-router-dom'
import history from './history'

import App from './App'
import { store, persistor } from './store'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history} component={App}>
        <MuiThemeProvider theme={defaultTheme}>
          <App />
        </MuiThemeProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
