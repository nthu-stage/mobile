export function WorkshopLoadingReducer(state = false, action) {
    switch (action.type) {
        case '@WORKSHOPLOADING/START_LOADING':
            return true;
        case '@WORKSHOPLOADING/END_LOADING':
            return false;
        default:
            return state;
    }
}

export function NewsLoadingReducer(state = false, action) {
    switch (action.type) {
        case '@NEWSLOADING/START_LOADING':
            return true;
        case '@NEWSLOADING/END_LOADING':
            return false;
        default:
            return state;
    }
}
