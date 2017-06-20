

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
