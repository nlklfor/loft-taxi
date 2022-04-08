import React from "react";
import {useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from "../actions";



export const Form = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const {email, password} = data;
        dispatch(authenticate(email, password))
    }
    return (
        <form onSubmit = {handleSubmit(onSubmit)} className = "log__form" >
            <h1 className='form__topic'>Войти</h1>
                <label htmlFor="email" className='login'>
                    Email*
                    <input name = "email" type = "email" id = "email" placeholder='mail@mail.ru'></input>
                </label>
                <label htmlFor="password" className='password'>
                    Password*
                    <input  name = "password" type = "password" id = "password" placeholder='*******'></input>
                </label>
                <button type = "submit" className = "btn__enter">Войти</button>
                <div className='new__user'>
                    <p className='user__qstn'>Новый пользователь?</p>
                        <p className='lnk__register'> 
                            <Link to='/registration' id = "reg__link">Зарегестрируйтесь</Link>
                        </p>
                </div> 
        </form>
    )
}
            
            // handleSubmit = (event) => {
            //     event.preventDefault();

            //     const {email , password} = event.target
            //     this.props.authenticate(email.value , password.value)
                

            // };
                    
                    