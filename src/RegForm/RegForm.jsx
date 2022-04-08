import React from 'react';
import AsideBar from '../AsideBar'
import "./RegForm.css"
import { connect } from "react-redux"
import {Form} from "../LogForm/Form";








class RegForm extends React.Component {
    render(){
        return(
            <>
                <section className='section__register'>
                    <AsideBar/>
                    <Form/>
                </section>
            </>
        );
    }
}

export default connect (
    (state) => ({isLoggedIn: state.registrate.isLoggedIn, registrate: state.registrate})
)(RegForm);