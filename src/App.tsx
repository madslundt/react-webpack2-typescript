import * as React from 'react';
import {Todo} from './Todo/Todo';
import {Counter} from './Counter/Counter';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100
  }
});

export default class App extends React.Component <void, void> {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Route path="/" component={Todo}/>
        </Router>
      </MuiThemeProvider>
    );
  }
}
