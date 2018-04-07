import React, { Component } from 'react';

class NavButton extends Component {

  constructor(props) {
    super(props);

    this.props = {
      onClick: props.onClick
    }
  }

  render() {
    return (
      <button className="nav-block nav-button" onClick={this.props.onClick}>
        { this.props.children }
      </button>
    );
  }

}

export default NavButton;
