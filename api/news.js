const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';

export function listNews(fb) {
    let url = `${baseUrl}/news`;
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
