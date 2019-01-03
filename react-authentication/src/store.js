import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

const store = createStore(
rootReducer,
inititalState,
// compose(applyMiddleware(thunk),
// window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())

// Run the redux-thunk middleware but don’t hook up the DevTools extension
compose(applyMiddleware(thunk))
);

export default store;