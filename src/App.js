
import './App.css';
import React from 'react';
import LogForm from './LogForm';
import Profile from './Profile';
import Map from './Map';
import RegForm from './RegForm';

  const Pages = {
     map: <Map />,
     profile: <Profile />,
     logform: <LogForm />,
     regform: <RegForm />
    }

class App extends React.Component {

    state = { pageContent: "logform"};

    generatePage = (page) => {
      this.setState({pageContent : page});
    };
  render(){
    return(
      <>
        <header className = "header">
          <nav className = "header__nav">
            <ul className = "header__nav-list">
              <li>
                <button onClick = {() =>{ this.generatePage("logform")} }>LogForm</button>
              </li>
              <li>
                <button onClick = {() =>{ this.generatePage("map")} }>Map</button>
              </li>
              <li>
                <button onClick = {() =>{ this.generatePage("profile")} }>Profile</button>
              </li>
              <li>
                <button onClick = {() =>{ this.generatePage("regform")} }>RegForm</button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {Pages[this.state.pageContent]}
          </section>
        </main>
      </>
    );
  }
}

export default App;
