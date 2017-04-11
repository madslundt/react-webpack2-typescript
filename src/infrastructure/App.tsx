import * as React from 'react';
import { Dispatch } from 'redux';
import { default as Counter } from '../counter/CounterPage';
import { Router, Route } from 'react-router';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import createBrowserHistory from 'history/createBrowserHistory';

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const history = createBrowserHistory()

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        primary2Color: green700,
        primary3Color: green100
    }
});

export default class App extends React.Component<any, any> {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={Counter}/>
                        <Route path="/counter" component={Counter}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}
