import {showProfile as showProfileFromApi} from '../api/profile';

export const showProfile = () => async (dispatch, getState) => {
    const res = await showProfileFromApi(getState().auth);
    const data = await res.json();
    dispatch({type: '@PROFILE/SHOW', payload: data});
}
