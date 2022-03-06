
import React from 'react';




// const pages = {
//     map: <Map />,
//     profile: <Profile />,
//     regform: <RegForm />
//    }

class LogForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault();

        const login = event.target.login.value;
        const password = event.target.password.value;

        return(login , password);

    };
    // state = {pageContent: ""};
    // generatePage = (page) => {
    //     this.setState({pageContent : page});
    //   };
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
                        <button type = "submit">Войти</button>
                </form>
                {/* <main>
                    <section>
                        {pages[this.state.pageContent]}
                    </section>
                </main> */}
            </>
        );
    }
}
    
export default LogForm;