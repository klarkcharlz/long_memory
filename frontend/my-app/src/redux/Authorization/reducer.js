import {SET_TOKEN, SET_USER_ID, CLEAR_CONTEXT} from './types'

const initialState = {
    authToken: null,
    userId: null
}

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_TOKEN:
            return {
                ...state,
                authToken: action.value
            }
        case SET_USER_ID:
            return {
                ...state,
                userId: action.value
            }
        case CLEAR_CONTEXT:
            console.log('очистка контекста в редусер');
            return initialState;
        default:
            return state;
    }
};
