import { Store, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './rootReducers';
import thunk from 'redux-thunk';

const initialState: any = {};

const store = (): Store<any> => {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(thunk, logger)
    );
}

export default store;