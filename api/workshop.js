// const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
const baseUrl = 'http://localhost:3000/api';

export function listWorkshop(fb, searchText="", stateFilter) {
    stateFilter = 'all';
    let url = `${baseUrl}/workshops?searchText=${searchText}&stateFilter=${stateFilter}`;
    if (fb) {
        let {userID, signedRequest} = fb;
        return fetch(url, {
            headers: {
                userID,
                signedRequest
            }
        })
        .then(res => {
            if (res.status !== 200)
                throw new Error(`Unexpected response code: ${res.status}`);

            return res.json();
        })
    }

    return fetch(url)
    .then(res => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    })
}

export function showWorkshop(fb, w_id) {
    let url = `${baseUrl}/workshops/${w_id}`;
    if (fb) {
        let {userID, signedRequest} = fb;
        return fetch(url, {
            headers: {
                userID,
                signedRequest
            }
        })
        .then(res => {
            if (res.status !== 200)
                throw new Error(`Unexpected response code: ${res.status}`);

            return res.json();
        });
    }

    return fetch(url)
    .then(res => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    })
}
