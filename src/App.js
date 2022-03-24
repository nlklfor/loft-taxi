
import './App.css';
import React from 'react';
import {LogWithLog} from './LogForm/LogForm.jsx';
import {ProfileWithLog} from './Profile/Profile';
import Map from './Map';
import RegForm from './RegForm/RegForm.jsx';
import {connect , useSelector} from 'react-redux';
import {Routes, Route, Navigate} from 'react-router-dom';




const ProtectedPage = ({component}) => {
  const isLoggedIn = useSelector(state => state.log.isLoggedIn)
  
  return isLoggedIn ? component : <Navigate to='/' />
}

class App extends React.Component {
  
  render(){
    
    
    return(
      <>
        <div>
          <Routes>
            <Route exact path='/' element = {<LogWithLog/>} />
            <Route path='/map' element ={<ProtectedPage component={<Map/>}/>}/>
            <Route path='/profile' element ={<ProtectedPage component={<ProfileWithLog/>}/>}/>
            <Route exact path='/registration' element = {<RegForm/>} />
            <Route path='*' element = {<Navigate to='/map'/>} />
          </Routes>
        </div>
      </>
    );
  }
}

export default connect(
  state => ({isLoggedIn: state.log.isLoggedIn})
)(App);