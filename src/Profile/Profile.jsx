import React from "react";
import Header from "../Header/Header";
import {connect} from 'react-redux';
import {logOut} from '../actions';




export class Profile extends React.Component{
    handleUnsubmit = () =>{
        this.props.logOut();
        // this.props.generatePage("logform");
    }
    render(){
        return(
            <section className="profile__modal">
                <div className="modal__card">
                    TOHA?
                </div> 
            </section>
        ); 
    }
}

export const ProfileWithLog = connect(
    null,
    {logOut}
)(Profile);