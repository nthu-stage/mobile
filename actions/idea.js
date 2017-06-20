import {
    listIdea as listIdeaFromApi,
    showIdea as showIdeaFromApi,
    likeIdea as likeIdeaFromApi
} from '../api/idea';

export const listIdea = (searchText, order) => async (dispatch, getState) => {
    dispatch({type: '@IDEALOADING/START_LOADING'});
    const res = await listIdeaFromApi(getState().auth, searchText, order);
    const data = await res.json();
    await dispatch({type: '@IDEA/LIST', payload: data});
    dispatch({type: '@IDEALOADING/END_LOADING'});
}
export const listMoreIdea = (searchText, order, offset, limit) => async (dispatch, getState) => {
    dispatch({type: '@IDEALOADING/START_LOADING'});
    const res = await listIdeaFromApi(getState().auth, searchText, order, offset, limit);
    const data = await res.json();
    console.log(data);
    await dispatch({type: '@IDEA/LIST_MORE', payload: data});
    dispatch({type: '@IDEALOADING/END_LOADING'});
}
export const showIdea = (i_id) => async (dispatch, getState) => {
    i_id = parseInt(i_id, 10);
    const res = await showIdeaFromApi(getState().auth, i_id);
    const data = await res.json();
    dispatch({type: '@IDEA/SHOW', payload: data});
}
export const likeSearchIdea = (i_id) => async (dispatch, getState) => {
    i_id = parseInt(i_id, 10);
    console.log("action");
    const res = await likeIdeaFromApi(getState().auth, i_id);
    const data = await res.json();
    console.log(data);
    dispatch({type: '@IDEA/LIKE_LIST', payload: data});
}
export const likeViewEditIdea = (i_id) => async (dispatch, getState) => {
    i_id = parseInt(i_id, 10);
    const res = await likeIdeaFromApi(getState().auth, i_id);
    const data = await res.json();
    dispatch({type: '@IDEA/LIKE_SHOW', payload: data});
}
