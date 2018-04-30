import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let classes = "nav-block nav-button" +
      (this.props.active ? " nav-button-active" : "");

    return (
      <a className={classes} onClick={this.props.onClick}>
        { this.props.label }
      </a>
    );
  }

}

export default NavButton;
