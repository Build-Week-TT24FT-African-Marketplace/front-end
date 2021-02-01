import { API__ADD_START, API_ADD_SUCCESS, API_ADD_FAILURE } from './../actions';

const initialItem = {
    name: '',
    description: '',
    price: '',
    location:'',
}

export const reducer = (state = initialItem, action) => {
    switch(action.type){
    default:
        return state
    }
}