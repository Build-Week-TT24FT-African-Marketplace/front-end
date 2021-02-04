import axios from 'axios';

export const API_GET_START = 'API_GET_START';
export const API_GET_SUCCESS = 'API_GET_SUCCESS';
export const API_GET_FAILURE= 'API_GET_FAILURE';

export const API_ADD_START = 'API_ADD_START';
export const API_ADD_SUCCESS = 'API_ADD_SUCCESS';
export const API_ADD_FAILURE= 'API_ADD_FAILURE';

export const API_EDIT_START = 'API_EDIT_START';
export const API_EDIT_SUCCESS = 'API_EDIT_SUCCESS';
export const API_EDIT_FAILURE= 'API_EDIT_FAILURE';

export const API_DELETE_START = 'API_DELETE_START';
export const API_DELETE_SUCCESS = 'API_DELETE_SUCCESS';
export const API_DELETE_FAILURE= 'API_DELETE_FAILURE';


//render items on Marketplace 
export const fetchItems = () => {
    return (dispatch) => {
        dispatch({type: API_GET_START})
        axios
        .get('https://african-marketplace-backend-24.herokuapp.com/api/listings')
        .then(res => {
            dispatch({type: API_GET_SUCCESS,payload:res.data})
        })
        .catch(err => {
            dispatch({type: API_GET_FAILURE,
                payload: err.message}) 
        });
    };
}

//add items to Marketplace Array
//need axios with auth?
export const addItems = (newItem) => {
    return (dispatch) => {
        dispatch({type: API_ADD_START})
        axios
        .post('')
        .then(res => {
            console.log('addAction', res.data);
            dispatch({type: API_ADD_SUCCESS, payload:res.data});
        })
        .catch(err => {
            console.log('addError', err.message);
            dispatch({type: API_ADD_FAILURE,
                payload:err.message})
        });
    };
};

//edit item on Marketplace Array
//need axios with auth?
export const editItems = (item) => {
    return (dispatch) => {
        dispatch({type: API_EDIT_START})
        axios
        .put('')
        .then(res => {
            console.log('editAction', res.data);
            dispatch({type: API_EDIT_SUCCESS, payload:res.data});
        })
        .catch(err => {
            console.log('addError', err.message);
            dispatch({type: API_EDIT_FAILURE,
                payload:err.message})
        });
    };
};

//delete item on Marketplace Array
//need axios with auth?
export const deleteItems = (item) => {
    return (dispatch) => {
        dispatch({type: API_DELETE_START})
        axios
        .delete('')
        .then(res => {
            console.log('deleteAction', res.data);
            dispatch({type: API_DELETE_SUCCESS, payload:res.data});
        })
        .catch(err => {
            console.log('deleteError', err.message);
            dispatch({type: API_DELETE_FAILURE,
                payload:err.message})
        });
    };
};