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

export function IdeaLoadingReducer(state = false, action) {
    switch (action.type) {
        case '@IDEALOADING/START_LOADING':
            return true;
        case '@IDEALOADING/END_LOADING':
            return false;
        default:
            return state;
    }
}
