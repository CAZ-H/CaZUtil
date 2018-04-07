import React, { Component } from 'react';

class NavBlock extends Component {

  render() {
    return (
      <button className="nav-block">
        { this.props.children }
      </button>
    );
  }

}

export default NavBlock;
