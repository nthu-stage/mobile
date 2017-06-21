const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
// const baseUrl = 'http://localhost:3090';

export function listIdea(fb, searchText, order, offset, limit) {
    let url = `${baseUrl}/ideas?searchText=${searchText}&order=${order}`;
    if(offset){
        url+='&offset=';
        url+=`${offset}`;
    }
    if(limit){
        url+='&limit=';
        url+=`${limit}`;
    }
    let {userID, accessToken} = fb
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            userID,
            accessToken
        }
    })
}

export function showIdea(fb, i_id) {
    let url = `${baseUrl}/ideas/${i_id}`;
    let {userID, accessToken} = fb;
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            userID,
            accessToken
        }
    })
}

export function likeIdea(fb, i_id) {
    let url = `${baseUrl}/ideas/${i_id}`;
    let {userID, accessToken} = fb;
    console.log("api");
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            userID,
            accessToken
        }
    });
}
