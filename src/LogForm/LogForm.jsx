import './LogForm.css'
import React from 'react';
import AsideBar from '../AsideBar'
import {connect} from 'react-redux';
import {Form} from "./Form"
import {Navigate, Link} from 'react-router-dom';



class LogForm extends React.Component {
    

    render(){
        return(
            <>
                {
                    this.props.isLoggedIn ? (
                        <Navigate to='/map'/>
                        
                    ) : (
                <section className='section__login'> 
                    <AsideBar />
                    <Form/>
                </section>
                    )
                }
            </>
        );
    }
}

export const LogWithLog = connect(
    (state) => ({isLoggedIn: state.log.isLoggedIn}),
)(LogForm);