export function WorkshopListReducer(state = null, action) {
    switch (action.type) {
        case '@WORKSHOP/LIST':
            return action.payload;
        default:
            return state;
    }
}
