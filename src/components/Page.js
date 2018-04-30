import React, { Component } from 'react';

class Page extends Component {

  render() {
    return (
      <div className="page-body">
        { this.props.children }
      </div>
    );
  }

}

export default Page;