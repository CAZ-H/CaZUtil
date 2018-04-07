import React, { Component } from 'react';
import Page from './../components/Page.js';
import NavBar from './../components/NavBar.js';
import {HOME, TEMPERATURE} from './../constants/Pages.js';

class PageContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: HOME
    };
  }

  gotoTemperaturePage() {
    this.setState({
      currentPage: TEMPERATURE
    });
  }

  gotoHomePage() {
    this.setState({
      currentPage: HOME
    });
  }

  renderTemperaturePage() {
    return (
      <Page>
        Todo: Temperature calculator
      </Page>
    );
  }

  renderHomePage() {
    return (
      <Page>
        Todo: Fancy homepage shenanigans
      </Page>
    );
  }

  decideRender() {
    let page;
    switch(this.state.currentPage) {
      case TEMPERATURE:
        page = this.renderTemperaturePage();
        break;
      case HOME:
      default:
        page = this.renderHomePage();
    }

    return (
      <div className="page-content">
        { page }
      </div>
    );
  }

  render() {
    return (
      <div className="page-container">
        <NavBar
          gotoHomePage={this.gotoHomePage.bind(this)}
          gotoTemperaturePage={this.gotoTemperaturePage.bind(this)} />
        { this.decideRender() }
      </div>
    );
  }

}

export default PageContainer;
