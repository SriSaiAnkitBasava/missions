import React, { Component } from 'react';
import './MainScreen.css';
import logo from '../images/logo_missions.png';
import userIcon from '../images/user.svg';

class MainScreen extends Component {
  render() {
    return (
      <div id="main-screen" className="screen">
        <div id="logo">
          <img src={logo} alt="Missions powered by DAV" />
        </div>
        <div id="user-controls">
          <img src={userIcon} alt="User Profile and Settings" />
        </div>
      </div>
    );
  }
}

export default MainScreen;