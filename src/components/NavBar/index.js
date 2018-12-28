import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { routeData } from 'constants/routes';
import history from 'constants/history';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        page: routeData.HOME.path,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
      this.setState({
          page: value
      }, () => history.push(value));
  }

  render() {
    return (
      <Tabs value={this.state.page} onChange={this.handleChange}>
          <Tab label="Home" value={routeData.HOME.path} />
          <Tab label="Gifcities" value={routeData.GIFCITIES.path} />
      </Tabs>
    );
  }

}

export default NavBar;
