import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {loadingBarReducer} from 'react-redux-loading-bar';
import AlertReducer from './reducer_alert';

import {WorkshopListReducer, WorkshopShowReducer} from './reducer_workshop';
import { IdeaListReducer, IdeaShowReducer } from './reducer_idea';
import {FacebookLoginReducer} from './reducer_auth';

export default function getStore(nav) {
    const store = createStore(combineReducers({
        nav,
        alert: AlertReducer,
        loadingBar: loadingBarReducer,
        workshopList: WorkshopListReducer,
        ideaList:IdeaListReducer,
        ideaShow:IdeaShowReducer,
        auth: FacebookLoginReducer,
        workshopShow: WorkshopShowReducer
    }), compose(applyMiddleware(thunkMiddleware)));

    return store;
}
