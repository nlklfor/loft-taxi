import React from 'react';
import AsideBar from '../AsideBar'
import "./RegForm.css"
import {Link} from "react-router-dom"






class RegForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault();

        const login = event.target.login.value;
        const name = event.target.name.value;
        const surname = event.target.surname.value;
        const password = event.target.password.value;

        return(login , password , name ,surname);

    };
   
    render(){
        return(
            <>
                <section className='section__register'>
                    <AsideBar/>
                    <form onSubmit = {this.handleSubmit} className='reg__form' >
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
                </section>
            </>
        );
    }
}

// class PropTypeReg extends React.Component{
//     render(){
//         return <RegForm />;
//     }
// }
    
export default RegForm;