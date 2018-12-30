import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import NavBar from 'common/components/NavBar/index';
import history from 'constants/history';
import { routes } from 'constants/routes';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#ff5500',
        },
        secondary: {
            main: '#55ff00',
        },
        tertiary: {
            light: '#444',
            main: '#222',
            dark: '#111',
            contrastText: '#fff',
        },
        error: {
            main: '#f66'
        }
    },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <CssBaseline>
          <Router history={history}>
              <div className='app'>
                  <NavBar/>
                  <Switch>
                      {routes}
                  </Switch>
              </div>
          </Router>
      </CssBaseline>
  </MuiThemeProvider>,
  document.getElementById('root')
);
