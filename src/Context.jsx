import React from "react";


export const Context = React.createContext()

export const LogProvider = ({children}) =>{
    const [isLoggedIn , setIsLoggedIn] = React.useState(false);

    const logIn = (email , password) => {
        if (email !== "mail@mail.com" || password !== "123123" ){
            alert("Неверный логин или пароль")
        } else if (email == "mail@mail.com" && password == "123123" ) {
            setIsLoggedIn(true);  
        }   
    }

    const logOut =() => {
        setIsLoggedIn(false);
    }

    return(
        <Context.Provider value = {{logIn , logOut , isLoggedIn}}>
            {children}
        </Context.Provider>
    ); 
}

    export const withLog = (WrappedComponent) => {
        return class extends React.Component {
            render(){
                return(
                    <Context.Consumer>
                        {
                            (value) => {
                                return <WrappedComponent {...value} {...this.props} />
                            }
                        }
                    </Context.Consumer>
                )
            }
        }    
    }