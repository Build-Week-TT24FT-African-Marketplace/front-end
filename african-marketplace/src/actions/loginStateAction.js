import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const USER_START = 'USER_START';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export const login = (userData) => {
    return (dispatch) => {
        dispatch({type: LOGIN_START});
        axios
            .post('https://african-marketplace-backend-24.herokuapp.com/api/auth/register/', userData)
            .then(res => {
                dispatch({type: LOGIN_SUCCESS, payload: localStorage.setItem('token', res.data)})
            })
            .catch(err => {
                dispatch({type: LOGIN_FAILURE, payload:err.message})
            }); 
    };
};

export const addUser = (newUser) => {
    return (dispatch) => {
        dispatch({type: USER_START});
        axios
            .post('https://african-marketplace-backend-24.herokuapp.com/api/auth/register/', newUser)
            .then(res => {
                dispatch({type: USER_SUCCESS, payload:res.data})
            })
            .catch(err => {
                dispatch({type: USER_FAILURE, payload:err.message})
            }); 
    };
};