export function NewsReducer(state = [], action) {
    switch (action.type) {
        case '@NEWS/LIST':
            return action.payload;
        default:
            return state;
    }
}
