
import { Route, Navigate } from 'react-router-dom';
import { connect } from "react-redux";

export const Private = connect((state) => ({
    isLoggedIn: state.log.isLoggedIn,}))
    (({component: Component, isLoggedIn, ...rest}) => (
        <Route
            {...rest}
            render={(props) => 
                isLoggedIn ? <Component {...props} /> : <Navigate to="/" />
            }
        />
    ));