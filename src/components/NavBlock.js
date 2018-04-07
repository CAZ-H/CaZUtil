import React, { Component } from 'react';

class NavBlock extends Component {

  render() {
    return (
      <div className="nav-block">
        { this.props.children }
      </div>
    );
  }

}

export default NavBlock;
