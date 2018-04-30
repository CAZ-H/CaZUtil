import React, { Component } from 'react';
import { Switch } from 'react-router-dom'

import Routes from './constants/Routes'
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar/>
          <Switch>
            {Routes}
          </Switch>
      </div>
    );
  }
}

export default App;
