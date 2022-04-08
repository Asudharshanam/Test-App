import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <>
            <NavBar />
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
