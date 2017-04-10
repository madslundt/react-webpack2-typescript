import * as React from 'react';
import { render} from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import reducer from './rootReducers';
import App from './App';

const initialState = {};

const store: Store<any> = createStore(reducer, initialState);



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
