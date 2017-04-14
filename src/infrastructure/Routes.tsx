import * as React from 'react';
import { default as Counter } from '../counter/CounterPage';
import { default as Profile } from '../profile/ProfilePage';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

const Routes = () => {
    return (
        <Router history={history}>
            <div>
                <Route exact path="/" component={Counter}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/profile/:id" component={Profile}/>
            </div>
        </Router>
    )
}

export default Routes;
