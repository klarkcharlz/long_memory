import {SETTITLE, SETDESCRIPTION} from '../types/createNotifications'

const initialState = {
    title: "React хуки.",
    description: "Изучил хуки useState и useEffect."
}

export const createNotificationsReducer = (state = initialState, action) => {
    console.log("createNotificationsReducer > ", action);
    switch (action.type){
        case SETTITLE:
            return {
                ...state,
                title: action.value
            }
        case SETDESCRIPTION:
            return {
                ...state,
                title: action.description
            }
        default:
            return state;
    }
};
