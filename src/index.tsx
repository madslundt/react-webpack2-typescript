import * as React from 'react';
import {render} from 'react-dom';
import {Store, createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import reducer from './rootReducers'

const initialState = {};

const store: Store<any> = createStore(reducer, initialState);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
