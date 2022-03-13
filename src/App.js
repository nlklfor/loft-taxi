
import './App.css';
import React from 'react';
import {LogWithLog} from './LogForm/LogForm.jsx';
import {ProfileWithLog} from './Profile';
import Map from './Map';
import RegForm from './RegForm/RegForm.jsx';
import Header from './Header/Header';
import { withLog } from './Context';

  const Pages = {
     map: (props) => < Map {...props}/> ,
     profile: (props) => <ProfileWithLog {...props}/> ,
     logform: (props) => <LogWithLog {...props}/> ,
     regform: (props) => <RegForm{...props} />,
     header: (props) => <Header{...props} />
    }

class App extends React.Component {

    state = { page: "logform"};

    generatePage = (page) => {
      if (this.props.isLoggedIn){
        this.setState({page});
      } else {
        this.setState({ page :"logform"});
      }
    };
  render(){
    const {page} = this.state;
    const Page = Pages[page];

    return(
      <>
        <div>
            <Page generatePage = {this.generatePage}/>  
        </div>
      </>
    );
  }
}

export default withLog(App);