const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
// const baseUrl = 'http://localhost:3000/api';
const signedRequest = 'GvbV-X3K-8j041Bw_U3SDSG6vECGGvFaB6m2dvD0PQQ.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUURycXhqWXdaV1hwNTgwMVlkVGFabzloUDcwYTVZTG9JdVM4aFpLUmxjbmdhMHNEdHM2c3M1SVNhT283b3NhcnY1OEdKYW54UVYwMzdUT0Jpc01PcGZBRFc3RTRnRHB4SEpQcENHc1dUN2k2SktCVElQQlhrUVpYS0cwWDhCSGVaaG9hM2E2OUR2U3haSjY0OXVnTklLd21VMEh0UXAzcmpMN3dfTVVPUGlWcC1McHhuVnIwd3djeHZtYmoyVHRQOHkwOURVRE5qNUdOaXhWUGkzS3h5WUszUGVaYzVCNWlhZldyeXFPVDlvR0ZVTmdyM0llVDN2MEFDMTFiYXNta2EzWjRzODFwa1Q3VGJfbldob1ZEWXhFU3RhLTd1NU1TRzFIMXZ5X3JDWHNrSm9YeFlzcGJlTFpSUmZCdkU5SUxKLXJfZFl2aWJqQUZsWkpWcjhIMVBKTiIsImlzc3VlZF9hdCI6MTQ5Nzg2ODU5OCwidXNlcl9pZCI6IjE4MzM4Njc3NDY5Mzc1NTAifQ';

export function listWorkshop(fb, searchText = "", stateFilter) {
    let url = `${baseUrl}/workshops?searchText=${searchText}&stateFilter=${stateFilter}&offset=${0}&limit=${3}`;
    let {userID, accessToken} = fb;
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            userID,
            signedRequest,
            accessToken
        }
    });
}

export function listMoreWorkshop(fb, searchText = "", stateFilter, offset, limit) {
    let url = `${baseUrl}/workshops?searchText=${searchText}&stateFilter=${stateFilter}`;
    if(offset){
        url+='&offset=';
        url+=`${offset}`;
    }
    if(limit){
        url+='&limit=';
        url+=`${limit}`;
        // console.log(limit);
    }
    let {userID, accessToken} = fb;
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            userID,
            signedRequest,
            accessToken
        }
    });
}

export function showWorkshop(fb, w_id) {
    let url = `${baseUrl}/workshops/${w_id}`;
    let {userID, accessToken} = fb;
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            userID,
            signedRequest,
            accessToken
        }
    });
}

export function attendWorkshop(fb, w_id) {
    let url = `${baseUrl}/workshops/${w_id}`;
    let {userID, accessToken} = fb;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            userID,
            signedRequest,
            accessToken
        },
        body: JSON.stringify(fb)
    });
}
