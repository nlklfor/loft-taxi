import React from "react";
import { useForm } from "react-hook-form";
import { register } from "../actions";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";



export const RegistrationForm = () => {

  const { registrate, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    const { email, name, password } = data
    dispatch(register(email,password,name))
  }
  return(
    <form onSubmit = {handleSubmit(onSubmit)} className='reg__form' >
        <h1 className='form__topic'>Регистарция</h1>
        <label htmlFor="email" className='login'>
            Адрес электронной почты*
            <input name = "email" type = "email" id = "email" placeholder='mail@mail.ru'></input>
        </label>
        <label htmlFor="name" className='name'> 
            Как вас зовут?*
            <input name = "name" type = "text" id = "name" placeholder='Пётр Александрович'></input>
        </label>
        <label htmlFor="password" className='password'>
            Пароль*
            <input name = "password" type = "password" id = "password" placeholder='*******'></input>
        </label>
        <button type = "submit" className = 'btn__register'>Зарегестрироваться</button>
        <div className='is__reg'>
                <p className='user__qstn'>Уже зарегестрированы?</p>
                <p className='lnk__log'> 
                    <Link to='/' id = "log__link">Войти</Link>
                </p>
        </div>
    </form>
  )
}

