import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {loadingBarReducer} from 'react-redux-loading-bar';
import AlertReducer from './reducer_alert';
import {WorkshopListReducer, WorkshopShowReducer} from './reducer_workshop';

export default function getStore(nav) {
    const store = createStore(combineReducers({
        nav,
        alert: AlertReducer,
        loadingBar: loadingBarReducer,
        workshopList: WorkshopListReducer,
        workshopShow: WorkshopShowReducer
    }), compose(applyMiddleware(thunkMiddleware)));

    return store;
}
