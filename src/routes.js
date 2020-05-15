import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Calculator from './pages/Calculator';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/calculator" exact component={Calculator} />
            </Switch>
        </BrowserRouter>
    );
}