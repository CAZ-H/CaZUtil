import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import HomeContainer from '../containers/HomeContainer'
import TemperatureContainer from '../containers/TemperatureContainer'

export default [
  <Route
    key={0}
    exact path={process.env.PUBLIC_URL + "/"}
    component={HomeContainer}
  />,
  <Route
    key={1}
    path={process.env.PUBLIC_URL + "/temperature"}
    component={TemperatureContainer}
  />
]