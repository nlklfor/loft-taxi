
import './App.css';
import React from 'react';
import LogForm from './LogForm/LogForm.jsx';
import Profile from './Profile';
import Map from './Map';
import RegForm from './RegForm/RegForm.jsx';

  const Pages = {
     map: Map ,
     profile: Profile ,
     logform: LogForm ,
     regform: RegForm 
    }

class App extends React.Component {

    state = { page: "logform"};

    generatePage = (page) => {
      this.setState({page});
    };
  render(){
    const {page} = this.state;
    const Page = Pages[page];

    return(
      <>
        <header className = "header">
          <nav className = "header__nav">
            <ul className = "header__nav-list">
              <li сlassName = "nav__item-log">
                <button onClick = {() =>{ this.generatePage("logform")} }>LogForm</button>
              </li>
              <li сlassName = "nav__item-map">
                <button onClick = {() =>{ this.generatePage("map")} }>Map</button>
              </li>
              <li сlassName = "nav__item-profile">
                <button onClick = {() =>{ this.generatePage("profile")} }>Profile</button>
              </li>
              <li сlassName = "nav__item-reg">
                <button onClick = {() =>{ this.generatePage("regform")} }>RegForm</button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Page generatePage = {this.generatePage} />
          </section>
        </main>
      </>
    );
  }
}

export default App;