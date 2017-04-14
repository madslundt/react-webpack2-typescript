import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import { IReducers } from './rootReducers';
import * as React from 'react';
import { connect } from "react-redux";
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue100, blue500, blue700 } from 'material-ui/styles/colors';
import Routes from './Routes';

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue100
    }
});

interface IProps {
    loaders: number
}

export class App extends React.Component<IProps, any> {
    render() {
        const { loaders } = this.props;

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header />
                    <Routes />
                    <Footer />
                    <Loader loaders={loaders} />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        loaders: state.ajaxCallsInProgressCount
    };
}

export default connect(mapStateToProps)(App);