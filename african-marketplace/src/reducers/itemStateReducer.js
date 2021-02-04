import { API_GET_START, API_GET_SUCCESS, API_GET_FAILURE, API_ADD_START, API_ADD_SUCCESS, API_ADD_FAILURE, API_EDIT_START, API_EDIT_SUCCESS, API_EDIT_FAILURE, API_DELETE_START, API_DELETE_SUCCESS, API_DELETE_FAILURE } from '../actions/itemStateAction';

export const initialItem = {
    itemArr: [],
    isLoading: false,
    errorText: ''
}

const itemStatereducer = (state = initialItem, action) => {
    switch (action.type){
        case (API_GET_START):
            return({
                ...state, isLoading : true
            })
        case (API_GET_SUCCESS):
            return({
                ...state, isLoading: false,
                itemArr: action.payload,
            })
        case (API_GET_FAILURE):
            return({
                ...state, isLoading : false,
                errorText: action.payload,
            })
        case (API_ADD_START):
            return({
                ...state, isLoading : true
            })
        case (API_ADD_SUCCESS):
            return({
                ...state, isLoading: false,
                itemArr: action.payload,
            })
        case (API_ADD_FAILURE):
            return({
                ...state, isLoading : false,
                errorText: action.payload,
            })
            case (API_EDIT_START):
            return({
                ...state, isLoading : true
            })
        case (API_EDIT_SUCCESS):
            return({
                ...state, isLoading: false,
                itemArr: action.payload,
            })
        case (API_EDIT_FAILURE):
            return({
                ...state, isLoading : false,
                errorText: action.payload,
            })
            case (API_DELETE_START):
            return({
                ...state, isLoading : true
            })
        case (API_DELETE_SUCCESS):
            return({
                ...state, isLoading: false,
                itemArr: action.payload,
            })
        case (API_DELETE_FAILURE):
            return({
                ...state, isLoading : false,
                errorText: action.payload,
            })
        default: 
            return state
    };
};

export default itemStatereducer;