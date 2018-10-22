import * as React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import HOME_PAGE from 'src/views/HOME_PAGE';

function ROOT_ROUTE() {
    return (
        <Switch>
            <Redirect
                from="/"
                to="/home-page"
                exact
            />
            <Route
                path="/home-page"
                component={HOME_PAGE}
                exact
            />
        </Switch>
    );
}

export default ROOT_ROUTE;
