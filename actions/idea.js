import {
    listIdea as listIdeaFromApi,
    showIdea as showIdeaFromApi,
} from '../api/idea';

export function listIdea(searchText, order) {
    return ((dispatch, getState) => {
        // dispatch(showLoading());
        listIdeaFromApi(null, searchText, order).then(res => { //cookie.get('fb')
            dispatch({type: '@IDEA/LIST', payload: res});
        }).catch(err => {
            
            // switch (err.response.status) {
            //     case 400:
            //         dispatch(deliverAlert('內容有誤', 'danger', 3000));
            //         break;
            //     default:
            //         dispatch(deliverAlert('搜尋失敗', 'danger', 3000));
            // }
        }).then(() => {
            // dispatch(hideLoading());
        });
    });
}
export function showIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        //dispatch(showLoading());
        showIdeaFromApi(null, i_id).then(res => {   //cookie.get('fb')
            dispatch({type: '@IDEA/SHOW', payload: res});
        }).catch(err => {
            // switch (err.response.status) {
            //     case 400:
            //         history.replace('/i');
            //         dispatch(deliverAlert('願望不存在', 'danger', 3000));
            //         break;
            //     default:
            //         dispatch(deliverAlert('讀取失敗', 'danger', 3000));
            // }
        }).then(() => {
            //dispatch(hideLoading());
        });
    });
}
