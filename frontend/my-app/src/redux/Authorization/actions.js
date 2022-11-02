import {SET_TOKEN, SET_USER_ID, CLEAR_CONTEXT} from './types'


export const setAuthToken = (authToken) => {
    return {
        type: SET_TOKEN,
        value: authToken
    };
}

export const setUserId = (userId) => {
    return {
        type: SET_USER_ID,
        value: userId
    };
}

export const clearContext = () => {
    return {
        type: CLEAR_CONTEXT
    };
}
