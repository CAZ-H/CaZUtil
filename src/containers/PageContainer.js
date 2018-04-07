import React, { Component } from 'react';
import Page from '../components/Page.js';
import NavBar from '../components/NavBar.js';

class PageContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.page;
    }
  }

  renderHomePage() {
    return {
      <Page />
    }
  }

  decideRender() {
    let page;
    switch(this.state.currentPage) {
      case 'home':
      default:
      page = <div className="page-content"> {renderHomePage()} </div>;
    }
    return page;
  }

  render() {
    return (
      <div className="page-container">
        <NavBar />
        decideRender();
      </div>
    );
  }

}
