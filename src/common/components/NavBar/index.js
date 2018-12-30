import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { routeData } from 'constants/routes';
import history from 'constants/history';

const styles = theme => ({
    root: {
        'background-color': theme.palette.tertiary.main,
        'border-bottom': '4px solid',
        'border-bottom-color': theme.palette.tertiary.dark
    }
});

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
      <Tabs value={this.state.page} onChange={this.handleChange} textColor='primary' indicatorColor='primary' className={this.props.classes.root}>
          <Tab label="Home" value={routeData.HOME.path} />
          <Tab label="Gifcities" value={routeData.GIFCITIES.path} />
      </Tabs>
    );
  }

}

export default withStyles(styles)(NavBar);
