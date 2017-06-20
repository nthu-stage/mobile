import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AlertReducer from './reducer_alert';

import {WorkshopListReducer, WorkshopShowReducer} from './reducer_workshop';
import { IdeaListReducer, IdeaShowReducer } from './reducer_idea';
import {FacebookLoginReducer} from './reducer_auth';
import ProfileReducer from './reducer_profile';
import {WorkshopLoadingReducer} from './reducer_loading';
import {NewsReducer} from './reducer_news';

export default function getStore(nav) {
    const store = createStore(combineReducers({
        nav,
        alert: AlertReducer,
        workshopList: WorkshopListReducer,
        ideaList:IdeaListReducer,
        ideaShow:IdeaShowReducer,
        auth: FacebookLoginReducer,
        workshopShow: WorkshopShowReducer,
        profile: ProfileReducer,
        workshopLoad: WorkshopLoadingReducer,
        news: NewsReducer
    }), compose(applyMiddleware(thunkMiddleware)));

    return store;
}
