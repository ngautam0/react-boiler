import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

// is logged in will come from service which will connect to redux store and get the status / token
const isLoggedIn = true;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute
