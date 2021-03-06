import AxiosWithAuth from '../utils/AxiosWithAuth';

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
export const fetchItems = () => (dispatch) => {
        dispatch({type: API_GET_START})
        AxiosWithAuth()
        .get('listings')
        .then(res => {
            dispatch({type: API_GET_SUCCESS,payload:res.data})
        })
        .catch(err => {
            dispatch({type: API_GET_FAILURE,
                payload: err.message}) 
        });
};

//add items to Marketplace Array
export const addItems = (itemToAdd) => (dispatch) => {
        dispatch({type: API_ADD_START})
        AxiosWithAuth()
        .post('listings', itemToAdd)
        .then(res => {
            console.log('addAction', res.data);
            dispatch({type: API_ADD_SUCCESS, payload:res.data});
        })
        .catch(err => {
            console.log('addError', err.message);
            dispatch({type: API_ADD_FAILURE,
                payload:err})
        });
};


//edit item on Marketplace Array
export const editItems = (editItem) => (dispatch) => {
        dispatch({type: API_EDIT_START})
        AxiosWithAuth()
        .put('listings/:listing_id', editItem)
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


//delete item on Marketplace Array
export const deleteItems = (item) => (dispatch) => {
        dispatch({type: API_DELETE_START})
        AxiosWithAuth()
        .delete(`listings/${item.listing_id}`)
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