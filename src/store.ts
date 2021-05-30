import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/rootReducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

function configureStore() {
    const middlewares = [thunk];

    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    return store;
}

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
