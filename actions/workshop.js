// import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {deliverAlert} from './common';
import {
    listWorkshop as listWorkshopFromApi
} from '../api/workshop';

const fb = {
    userID: '1514864711922034',
    signedRequest: 'q7xfUdF-iW2pV6MQBePEvlwt0z3BP3LOF19RlP8ElBY.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUJmYlM0TFZkSHRHTjRCYjFoN1MwSzhtVnBXMDNkaHp2SlNxc0xWNFdqdFRXODJ4N3hJcUJ5dE12Y2U1aDF6WkxGN051NHl0b0hTeHZia041TmV6MDJMOUtLbEtxT3oxMjRBdlVMRkk0M2ZHbkRNMEVIZm1wVWtjS1JuVmpZQ2NDSktWR0UxeEZIb203azNjRHZYZDRhdWhMSlNPMFJxeG9rdk5tNWdQZXh2QU5yLUJ3LUJoeEloZ2dPcFpzNVRJTDFFWWlnbjhRYXB6X2hSdmdieG9xaDlNV2JiRmF5alZlSjVHUFdMUnBaV29Rc1VEc2Q2cktidXBINVA5MmhOUjRJSjRVMVowZ3J0MnJKSm5zaC1mMzBpT2o4RW0tcEdZdXZWSnM1cE1tT25aek1XdmtESzJ2LU4ybmhaVGc0bExtOHVwLVJoWV9uNGk5TW5NVzYtMk1PbCIsImlzc3VlZF9hdCI6MTQ5NDYxODY5NSwidXNlcl9pZCI6IjE1MTQ4NjQ3MTE5MjIwMzQifQ'
};


export function listWorkshop(searchText, stateFilter) {
    return ((dispatch, getState) => {
        // dispatch(showLoading());
        listWorkshopFromApi(fb, searchText, stateFilter).then(res => {
            dispatch({type: '@WORKSHOP/LIST', payload: res});
        }).catch(err => {
            switch (err.response.status) {
                case 400:
                    dispatch(deliverAlert('內容有誤', 'danger', 3000));
                    break;
                default:
                    dispatch(deliverAlert('搜尋失敗', 'danger', 3000));
            }
        });
    });
}
