import React, { Component } from 'react';

class NavButton extends Component {

  constructor(props) {
    super(props);

    this.props = {
      onClick: props.onClick,
      active: props.active,
    }
  }

  render() {
    let classes = "nav-block nav-button" +
      (this.props.active ? " nav-button-active" : "");

    return (
      <a className={classes} onClick={this.props.onClick}>
        { this.props.children }
      </a>
    );
  }

}

export default NavButton;
