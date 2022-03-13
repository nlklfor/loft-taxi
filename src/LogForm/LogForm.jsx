import './LogForm.css'
import React from 'react';
import AsideBar from '../AsideBar'
import { withLog } from '../Context';


class LogForm extends React.Component {
    goToProfile = () => {
        this.props.generatePage("profile")
    }



    handleSubmit = (event) => {
        event.preventDefault();

        const {email , password} = event.target
        this.props.logIn(email.value , password.value)
        

    };
    render(){
        return(
            <>
                {
                    this.props.isLoggedIn ? (
                        <h1>
                            Вы успешно вошли <button onClick = {this.goToProfile}>Go to profile</button>
                        </h1>
                        
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
                            <button type = "submit" onClick = {() =>{ this.props.generatePage("map")} } className = "btn__enter">Войти</button>
                            <div className='new__user'>
                                <p className='user__qstn'>Новый пользователь?</p>
                                <p className='lnk__register' onClick = {() =>{ this.props.generatePage("regform")} }> 
                                    Зарегестрируйтесь
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

export const LogWithLog = withLog(LogForm);