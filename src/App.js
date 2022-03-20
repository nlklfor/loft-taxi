
import './App.css';
import React from 'react';
import {LogWithLog} from './LogForm/LogForm.jsx';
import {Profile, ProfileWithLog} from './Profile';
import Map from './Map';
import RegForm from './RegForm/RegForm.jsx';
import Header from './Header/Header';
import { Private } from './Private';
import {connect} from 'react-redux';
import { Link, Switch, Route } from 'react-router';



  // const Pages = {
  //    map: (props) => < Map {...props}/> ,
  //    profile: (props) => <ProfileWithLog {...props}/> ,
  //    logform: (props) => <LogWithLog {...props}/> ,
  //    regform: (props) => <RegForm{...props} />,
  //    header: (props) => <Header{...props} />
  //   }

class App extends React.Component {

    // state = { page: "logform"};

    // generatePage = (page) => {
    //   if (this.props.isLoggedIn){
    //     this.setState({page});
    //   } else {
    //     this.setState({ page :"logform"});
    //   }
    // };
  render(){
    // const {page} = this.state;
    // const Page = Pages[page];

    return(
      <>
        <div>
          <Switch>
            <Route exact path='/' component={LogWithLog} />
            <Private path='/map' component={Map} />
            <Private path='/profile' component={Profile} />
            <Route exact path='/registrarion' component={RegForm} />
          </Switch>
            <Page generatePage = {this.generatePage}/>  
        </div>
      </>
    );
  }
}

export default connect(
  state => ({isLoggedIn: state.log.isLoggedIn})
)(App);