import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, USER_START, USER_SUCCESS, USER_FAILURE } from './../actions/loginStateAction'

export const initialUser = {
    email: '',
    password: '',
}

export const loginStateReducer = (state = initialUser, action) => {
    switch(action.type){
        default:
            return state
    };
};

export default loginStateReducer;