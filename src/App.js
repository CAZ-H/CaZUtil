import React, { Component } from 'react';
import './App.css';
import PageContainer from './containers/PageContainer.js';

class App extends Component {
  render() {
    return (
      <div className="app">
          <PageContainer />
      </div>
    );
  }
}

export default App;
