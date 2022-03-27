import './LogForm.css'
import React from 'react';
import AsideBar from '../AsideBar'
import {connect} from 'react-redux';
import {authenticate} from '../actions'
import {Route, Navigate, Link} from 'react-router-dom';



class LogForm extends React.Component {
    



    handleSubmit = (event) => {
        event.preventDefault();

        const {email , password} = event.target
        this.props.authenticate(email.value , password.value)
        

    };
    render(){
        return(
            <>
                {
                    this.props.isLoggedIn ? (
                        <Navigate to='/map'/>
                        
                    ) : (
                        <section className='section__login'> 
                <AsideBar />
                    <form onSubmit = {this.handleSubmit} className = "log__form" >
                        <h1 className='form__topic'>Войти</h1>
                            <label htmlFor="email" className='login'>
                                Email*
                                <input name = "email" type = "email" id = "email" placeholder='mail@mail.ru'></input>
                            </label>
                            <label htmlFor="password" className='password'>
                                Password*
                                <input name = "password" type = "password" id = "password" placeholder='*******'></input>
                            </label>
                            <Link to='/map' id = "button__log">Войти</Link>
                            <div className='new__user'>
                                <p className='user__qstn'>Новый пользователь?</p>
                                    <p className='lnk__register'> 
                                        <Link to='/registration' id = "reg__link">Зарегестрируйтесь</Link>
                                    </p>
                            </div> 
                    </form>
                </section>
                    )
                }
            </>
        );
    }
}

export const LogWithLog = connect(
    (state) => ({isLoggedIn: state.log.isLoggedIn}),
    {authenticate}
)(LogForm);