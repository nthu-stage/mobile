import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {deliverAlert} from './common';
import {
    listWorkshop as listWorkshopFromApi,
    showWorkshop as showWorkshopFromApi
} from '../api/workshop';

export const listWorkshop = (searchText, stateFilter) => async (dispatch, getState) => {
    const res = await listWorkshopFromApi(getState().auth, searchText, stateFilter);
    const data = await res.json();
    dispatch({type: '@WORKSHOP/LIST', payload: data});
}

export const showWorkshop = (w_id) => async (dispatch, getState) => {
    const res = await showWorkshopFromApi(getState().auth, w_id);
    const data = await res.json();
    dispatch({type: '@WORKSHOP/SHOW', payload: data});
}
