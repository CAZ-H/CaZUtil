import React, { Component } from 'react';
import NavButton from './NavButton';
import NavBlock from './NavBlock';

import history from '../History';
import {PAGE_HOME, PAGE_TEMPERATURE, PAGE_MARKOV} from '../constants/Pages'

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <NavButton
          onClick={()=>{
            history.push(process.env.PUBLIC_URL + "/"); 
            this.setState({activePage: PAGE_HOME});
          }}
          active={history.location.pathname === process.env.PUBLIC_URL + "/"}
          label="Home"
        />
      
        <NavButton
          onClick={()=>{
            history.push(process.env.PUBLIC_URL + "/temperature"); 
            this.setState({activePage: PAGE_TEMPERATURE});
          }}
          active={history.location.pathname === process.env.PUBLIC_URL + "/temperature"}
          label="Temperature"
          />
      </div>
    );
  }

}

export default NavBar;
