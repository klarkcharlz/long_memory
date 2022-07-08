import {SETNOTIFICATIONS} from './types'


export const setNotifications = (notifications) => {
    return {
        type: SETNOTIFICATIONS,
        notifications
    }
}

