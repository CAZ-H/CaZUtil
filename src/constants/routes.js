import React from 'react';
import { Route } from 'react-router-dom'

import HomeContainer from '../containers/HomeContainer'
import GifcitiesContainer from '../containers/GifcitiesContainer'

import config from 'constants/config';

const routeData = {
    HOME: {
        key: 'HOME',
        path: config.URL_ROOT + '/',
        component: HomeContainer,
        exactPath: true
    },
    GIFCITIES: {
        key: 'GIFCITIES',
        path: config.URL_ROOT + '/gifcities',
        component: GifcitiesContainer,
        exactPath: false
    }
};

const routes = Object.keys(routeData).map(key => {
    const route = routeData[key];

    return <Route
        key={route.key}
        path={route.path}
        component={route.component}
        exact={route.exactPath}
    />
});

export {
    routeData,
    routes
}
