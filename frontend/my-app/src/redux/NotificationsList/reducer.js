import {GETNOTIFICATIONS, SETNOTIFICATIONS} from './types'


const testNotifications = {
    id: 0,
    title: 'Тестовое напоминание',
    description: 'Повтори уже что-нибудь!',
    date: new Date().toString()
}


const initialState = {
    notifications: []
}

export const notificationsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETNOTIFICATIONS:
            return {
                ...state
            }
        case SETNOTIFICATIONS:
            return {
                ...state,
                notifications: action.notifications
            }
        default:
            return state;
    }
};
