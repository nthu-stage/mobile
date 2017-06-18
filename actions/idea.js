import {
    listIdea as listIdeaFromApi,
} from '../api/idea';

export function listIdea(searchText, order) {
    return ((dispatch, getState) => {
        // dispatch(showLoading());
        listIdeaFromApi(null, searchText, order).then(res => {
            dispatch({type: '@IDEA/LIST', payload: res.json()});
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