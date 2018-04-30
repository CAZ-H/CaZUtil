import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import HomeContainer from '../containers/HomeContainer'
import TemperatureContainer from '../containers/TemperatureContainer'

export default [
  <Route
    key={0}
    exact path="/"
    component={HomeContainer}
  />,
  <Route
    key={1}
    path="/temperature"
    component={TemperatureContainer}
  />
]