import * as React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import reducer from './infrastructure/rootReducers';
import App from './infrastructure/App';
import configureStore from './infrastructure/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
