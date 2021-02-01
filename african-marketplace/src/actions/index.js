import axios from 'axios';
export const API__ADD_START = 'API__ADD_START';
export const API_ADD_SUCCESS = 'API__ADD_SUCCESS';
export const API_ADD_FAILURE= 'API_ADD_FAILURE';

export const addItems = (newItem) => {
    return (dispatch) => {
        dispatch({type: API_START});
        axios
        .post
        .then
        .catch
    }
}

export const editItem = item => {
    return({type: EDIT_ITEM, payload:item})
}

export const deleteItem = itemId => {
    return({type: DELETE_ITEM, payload:itemId})
}