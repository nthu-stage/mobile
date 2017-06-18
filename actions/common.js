export function deliverAlert(msg, type, delay){
    return (dispatch) => {
        dispatch(showAlert(msg, type));
        dispatch(hideAlert(delay));
    };
}
