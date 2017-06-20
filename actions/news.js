import {listNews as listNewsFromApi} from '../api/news';

export const listNews = () => async (dispatch, getState) => {
    dispatch({type: '@NEWSLOADING/START_LOADING'});
    const res = await listNewsFromApi(getState().auth);
    const data = await res.json();
    dispatch({type: '@NEWS/LIST', payload: data});
    dispatch({type: '@NEWSLOADING/END_LOADING'});
}
