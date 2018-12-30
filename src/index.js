import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Router, Route} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import NavBar from 'components/NavBar/index';
import history from 'constants/history';
import { routes } from 'constants/routes';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff4400',
        },
        secondary: {
            main: '#0044ff',
        }
    },
});

ReactDOM.render(
  <Router history={history}>
      <MuiThemeProvider theme={theme}>
          <div className='app'>
              <NavBar/>
              <Switch>
                  {routes}
              </Switch>
          </div>
      </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
);
