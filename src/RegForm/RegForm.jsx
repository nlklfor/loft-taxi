import React from 'react';
import AsideBar from '../AsideBar'
import "./RegForm.css"
import {RegistrationForm} from "../RegForm/Form";








class RegForm extends React.Component {
    render(){
        return(
            <>
                <section className='section__register'>
                    <AsideBar/>
                    <RegistrationForm/>
                </section>
            </>
        );
    }
}


export default RegForm;