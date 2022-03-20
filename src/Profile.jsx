import React from "react";
import Header from "./Header/Header";
import {connect} from 'react-redux';
import {logOut} from './actions';

export class Profile extends React.Component{
    handleUnsubmit = () =>{
        this.props.logOut();
        // this.props.generatePage("logform");
    }
    render(){
        return(
            <section>
                <Header generatePage = {this.props.generatePage} />
                <h1 className = "Profile">Profile <button onClick={this.handleUnsubmit}>Выйти</button></h1>
            </section>
        ); 
    }
}

export const ProfileWithLog = connect(
    null,
    {logOut}
)(Profile);