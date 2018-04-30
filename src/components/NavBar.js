import React, { Component } from 'react';
import NavButton from './NavButton';
import NavBlock from './NavBlock';

import history from '../History';

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(history.location);
    return (
      <div className="nav-bar">
        <NavButton
          onClick={()=>history.push('/')}
          active={history.location.pathname === '/'}
          label="Home"
        />
      
        <NavButton
          onClick={()=>history.push('/temperature')}
          active={history.location.pathname === '/temperature'}
          label="Temperature"
          />
      </div>
    );
  }

}

export default NavBar;
