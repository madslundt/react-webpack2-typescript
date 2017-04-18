import * as React from 'react';
import { default as Counter } from '../counter/CounterPage';
import { default as Profile } from '../profile/ProfilePage';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import NotFoundPage from './404';

const history = createBrowserHistory()

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Counter}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/:id" component={Profile}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Router>
    )
}

export default Routes;
