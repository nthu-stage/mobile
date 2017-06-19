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
    if (fb) {
        let {userID, signedRequest} = fb;
        return fetch(url, {
            headers: {
                userID,
                signedRequest
            }
        })
    } else {
        return fetch(url).then(res=>{
            return res.json();
        })
    }
}