
import React from 'react';


class LogForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault();

        const login = event.target.login.value;
        const password = event.target.password.value;

        return(login , password);

    };
    
    render(){
        return(
            <>
                <form onSubmit = {this.handleSubmit} >
                        <label htmlFor="email">
                            Логин:
                            <input name = "email" type = "email" id = "email"></input>
                        </label>
                        <label htmlFor="password">
                            Пароль:
                            <input name = "password" type = "password" id = "password"></input>
                        </label>
                        <button> 
                            Зарегестрируйтесь
                        </button>
                        <button type = "submit" onClick = {() =>{ this.props.generatePage("map")} }>Войти</button>
                </form>
            </>
        );
    }
}
    
export default LogForm;