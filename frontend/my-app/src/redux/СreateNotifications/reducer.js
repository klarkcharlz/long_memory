import {SETTITLE, SETDESCRIPTION} from './types'

const initialState = {
    title: "React хуки.",
    description: "Изучил хуки useState и useEffect."
}

export const createNotificationsReducer = (state = initialState, action) => {
    switch (action.type){
        case SETTITLE:
            return {
                ...state,
                title: action.value
            }
        case SETDESCRIPTION:
            return {
                ...state,
                description: action.value
            }
        default:
            return state;
    }
};
