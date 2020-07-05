import React from 'react';
import './App.css';
// import StumbleButton from './components/StumbleButton'
import FavIcon from './components/FavIcon'
import UserIcon from './components/UserIcon'
import IFrame from './components/IFrame'
import data from './components/data.json'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";



class App extends React.Component {
  constructor(props) {
      super(props)
        this.state = {
          url: "https://eloquentjavascript.net"
        }
        this.changeURL = this.changeURL.bind(this)
    }

    changeURL() {
      const newURL = data[Math.floor(Math.random() * data.length)].url
      this.setState({
          url: newURL
      })
      console.log('button worked')
  }   


  render() {
    return (
      <div className="App">
          <div className="headerContainer" >
            <FavIcon />
            <AwesomeButton type="primary" 
                          id="stumble-btn" 
                          onPress={this.changeURL}
              >Stumble!</AwesomeButton>
            <UserIcon />
          </div> 
          <IFrame url={this.state.url} />
      </div>
    );
  }
}




export default App;
