import React from 'react';
import './App.css';
import StumbleButton from './components/StumbleButton'
import FavIcon from './components/FavIcon'
import UserIcon from './components/UserIcon'
import IFrame from './components/IFrame'
import data from './components/data.json'


class App extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div className="App">
          <div className="headerContainer" >
            <FavIcon />
            <StumbleButton />
            <UserIcon />
          </div> 
          <IFrame/>
      </div>
    );
  }
}




export default App;
