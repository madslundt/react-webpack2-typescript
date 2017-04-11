import { Store, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './rootReducers';

const store = (initialState: any = {}): Store<any> => {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(logger)
    );
}

export default store;