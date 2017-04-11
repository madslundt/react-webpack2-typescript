import { Store, createStore, applyMiddleware } from 'redux';
import reducer from './rootReducers';

const store = (initialState: any = {}): Store<any> => {
    return createStore(
        reducer,
        initialState,
        applyMiddleware()
    );
}

export default store;