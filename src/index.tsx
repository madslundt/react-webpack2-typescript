import * as React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import reducer from './rootReducers';
import App from './App';
import configureStore from './configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
