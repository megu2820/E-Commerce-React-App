// component to ensure that the protected routes can't be accessed without logging in 

import React from 'react'
import { Redirect, Route } from "react-router-dom";
const ProtectedRoute = ({ component: Comp,  path, ...rest }) => {

    return (
      <Route
        path={path}
        {...rest}
        render={(props) => {
          
          return (localStorage.getItem('LoggedIn')) ? (
            <Comp {...props} {...rest} />
          ) :(
            <Redirect to="/"/>
          );
        }}
      />
    );
  };
  export default ProtectedRoute;