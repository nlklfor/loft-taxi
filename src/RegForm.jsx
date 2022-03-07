import React from 'react';






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
                <form onSubmit = {this.handleSubmit} >
                        <label htmlFor="email">
                            Адрес электронной почты:
                            <input name = "email" type = "email" id = "email"></input>
                        </label>
                        <label htmlFor="name">
                            Имя:
                            <input name = "name" type = "text" id = "name"></input>
                        </label>
                        <label htmlFor="surname">
                            Фамилия:
                            <input name = "surname" type = "text" id = "surname"></input>
                        </label>
                        <label htmlFor="password">
                            Пароль:
                            <input name = "password" type = "password" id = "password"></input>
                        </label>
                        <button type = "submit" onClick = {() =>{ this.props.generatePage("map")} }>Зарегестрироваться</button>
                </form>
                
            </>
        );
    }
}
    
export default RegForm;