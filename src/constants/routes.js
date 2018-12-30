import React from 'react';
import { Route } from 'react-router-dom'

import Home from '../pages/Home/components/Page'
import Gifcities from '../pages/Gifcities/components/Page'

import config from 'constants/config';

const routeData = {
    HOME: {
        key: 'HOME',
        path: config.URL_ROOT + '/',
        component: Home,
        exactPath: true
    },
    GIFCITIES: {
        key: 'GIFCITIES',
        path: config.URL_ROOT + '/gifcities',
        component: Gifcities,
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
