// const initialState = {
//     name: null,
//     email: null,
//     picture_url: null,
//     userID: null,
//     accessToken: null,
// };

const initialState = {
    name: '賴詰凱',
    email: 'skyle0115@gmail.com',
    picture_url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18622427_1859238271067164_3869120362467491071_n.jpg?oh=681ac9d57e2917e97ce9d25f027b76d4&oe=59D96830',
    userID: '1833867746937550',
    accessToken: 'EAAZAwGb8RZBdUBAESixYvnGdddRxkXP95ZARWYpRZAbxI7ptHCixYCrID5fsv78HAEscNaMIN74VMWPcx8sGZBkir2hBrZAJ0frtfZBJNIP5PsVK28mDlJJiWL5uhHSNp1KpQ7pjiS78bfVWHJyXV0CWHZBIaAfrgffnT6ZAOlZBP2maRZCOiCWxEOQzERJwRVoQORPhL3bSaMZBOQZDZD',
};

export function FacebookLoginReducer(state = initialState, action) {
    switch (action.type) {
        case 'FACEBOOK_LOGIN_SUCCESS':
            return action.payload;
        case 'FACEBOOK_LOGIN_FAIL':
            return initialState;
        default:
            return state;
    }
}
