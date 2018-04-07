import React, { Component } from 'react';
import NavButton from './NavButton.js';
import NavBlock from './NavBlock.js';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.props = {
      gotoTemperaturePage: props.gotoTemperaturePage,
      gotoHomePage: props.gotoHomePage
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <NavBlock>
          Whew
        </NavBlock>
        <NavButton onClick={this.props.gotoHomePage}>
          Home
        </NavButton>
        <NavButton onClick={this.props.gotoTemperaturePage}>
          Temperature
        </NavButton>
      </div>
    );
  }

}

export default NavBar;
