export const ADD_GAME = "ADD_GAME";
export const REMOVE_GAME = "REMOVE_GAME";
export const UPDATE_GAME = "UPDATE_GAME";
export const ACTIVE_GAME = "ACTIVE_GAME";

export const removeGameAction = (id) => dispatch => {
    dispatch({
        type: REMOVE_GAME,
        payload: {
            id
        }
    })
};