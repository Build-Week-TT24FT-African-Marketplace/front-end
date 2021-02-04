import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, USER_START, USER_SUCCESS, USER_FAILURE } from './../actions/loginStateAction'

export const initialUser = {
    userData: {},
    isLoading: false,
    errorText:'',
}

const loginStateReducer = (state = initialUser, action) => {
    switch(action.type){
        case(LOGIN_START):
            return({
                ...state,
                isFetching: true,
            })
            case(LOGIN_SUCCESS):
            return({
                ...state,
                newUser: action.payload,
                isFetching: false
            })
            case(LOGIN_FAILURE):
            return({
                ...state,
                error: action.payload
            })
        case (USER_START):
            return({
                ...state, isLoading: true,
            })
        case(USER_SUCCESS):
            return({
                ...state,
                newUser: action.payload,
                isFetching: false,
            })
        case(USER_FAILURE):
            return({
                ...state,
                error:action.payload,
            })
        default:
            return state
    };
};

export default loginStateReducer;