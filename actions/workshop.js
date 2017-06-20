import {deliverAlert} from './common';
import {
    listWorkshop as listWorkshopFromApi,
    listMoreWorkshop as listMoreWorkshopFromApi,
    showWorkshop as showWorkshopFromApi,
    attendWorkshop as attendWorkshopFromApi
} from '../api/workshop';

export const listWorkshop = (searchText, stateFilter) => async (dispatch, getState) => {
    dispatch({type: '@WORKSHOPLOADING/START_LOADING'});
    const res = await listWorkshopFromApi(getState().auth, searchText, stateFilter);
    const data = await res.json();
    await dispatch({type: '@WORKSHOP/LIST', payload: data});
    dispatch({type: '@WORKSHOPLOADING/END_LOADING'});
}

export const listMoreWorkshop = (searchText, stateFilter, offset, limit) => async (dispatch, getState) => {
    dispatch({type: '@WORKSHOPLOADING/START_LOADING'});
    const res = await listMoreWorkshopFromApi(getState().auth, searchText, stateFilter, offset, limit);
    const data = await res.json();
    dispatch({type: '@WORKSHOP/MORELIST', payload: data});
    dispatch({type: '@WORKSHOPLOADING/END_LOADING'});
}

export const showWorkshop = (w_id) => async (dispatch, getState) => {
    const res = await showWorkshopFromApi(getState().auth, w_id);
    const data = await res.json();
    dispatch({type: '@WORKSHOP/SHOW', payload: data});
}

export const attendWorkshop = (w_id) => async (dispatch, getState) => {
    const res = await attendWorkshopFromApi(getState().auth, w_id);
    const data = await res.json();
    dispatch({type: '@WORKSHOP/ATTEND', payload: data});
}
