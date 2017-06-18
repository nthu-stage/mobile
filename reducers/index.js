import { IdeaListReducer } from './reducer_idea';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({

    ideaList: IdeaListReducer,

});

export default rootReducer;