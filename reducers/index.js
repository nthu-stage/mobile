
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AlertReducer from './reducer_alert';
import {WorkshopListReducer} from './reducer_workshop';

export default function getStore(nav) {
    const store = createStore(combineReducers({
        nav,
        alert: AlertReducer,
        workshopList: WorkshopListReducer
    }), compose(applyMiddleware(thunkMiddleware)));

    return store;
}

