import React, { Component } from 'react';
import NavButton from './NavButton.js';
import NavBlock from './NavBlock.js';
import {HOME, TEMPERATURE, MARKOV} from './../constants/Pages.js';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.props = {
      gotoMarkovPage: props.gotoMarkovPage,
      gotoTemperaturePage: props.gotoTemperaturePage,
      gotoHomePage: props.gotoHomePage,

      currentPage: props.currentPage
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <NavButton
          onClick={this.props.gotoHomePage}
          active={this.props.currentPage===HOME}>
          Home
        </NavButton>

        <NavButton
          onClick={this.props.gotoTemperaturePage}
          active={this.props.currentPage===TEMPERATURE}>
          Temperature
        </NavButton>

        <NavButton
          onClick={this.props.gotoMarkovPage}
          active={this.props.currentPage===MARKOV}>
          Temperature
        </NavButton>
      </div>
    );
  }

}

export default NavBar;
