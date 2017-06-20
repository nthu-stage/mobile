const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
// const baseUrl = 'http://localhost:3090';
const signedRequest = 'GvbV-X3K-8j041Bw_U3SDSG6vECGGvFaB6m2dvD0PQQ.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUURycXhqWXdaV1hwNTgwMVlkVGFabzloUDcwYTVZTG9JdVM4aFpLUmxjbmdhMHNEdHM2c3M1SVNhT283b3NhcnY1OEdKYW54UVYwMzdUT0Jpc01PcGZBRFc3RTRnRHB4SEpQcENHc1dUN2k2SktCVElQQlhrUVpYS0cwWDhCSGVaaG9hM2E2OUR2U3haSjY0OXVnTklLd21VMEh0UXAzcmpMN3dfTVVPUGlWcC1McHhuVnIwd3djeHZtYmoyVHRQOHkwOURVRE5qNUdOaXhWUGkzS3h5WUszUGVaYzVCNWlhZldyeXFPVDlvR0ZVTmdyM0llVDN2MEFDMTFiYXNta2EzWjRzODFwa1Q3VGJfbldob1ZEWXhFU3RhLTd1NU1TRzFIMXZ5X3JDWHNrSm9YeFlzcGJlTFpSUmZCdkU5SUxKLXJfZFl2aWJqQUZsWkpWcjhIMVBKTiIsImlzc3VlZF9hdCI6MTQ5Nzg2ODU5OCwidXNlcl9pZCI6IjE4MzM4Njc3NDY5Mzc1NTAifQ';

export function registerOrLogin(fb) {
    let url = `${baseUrl}/profile`;
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

export function showProfile(fb) {
    let url = `${baseUrl}/profile`;
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
