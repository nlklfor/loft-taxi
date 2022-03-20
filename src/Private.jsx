import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

export const Private = connect((state) => ({
    isLoggedIn: state.log.isLoggedIn}))
    (({component: Component, isLoggedIn, ...rest}) => (
        <Route
            {...rest}
            render={(props) => 
                isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    ));