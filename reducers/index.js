import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {loadingBarReducer} from 'react-redux-loading-bar';
import AlertReducer from './reducer_alert';
import {WorkshopListReducer} from './reducer_workshop';
import { IdeaListReducer } from './reducer_idea';

export default function getStore(nav) {
    const store = createStore(combineReducers({
        nav,
        alert: AlertReducer,
        loadingBar: loadingBarReducer,
        workshopList: WorkshopListReducer,
        ideaList:IdeaListReducer,
    }), compose(applyMiddleware(thunkMiddleware)));

    return store;
}
