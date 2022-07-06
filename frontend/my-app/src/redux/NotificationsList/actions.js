import {GETNOTIFICATIONS, SETNOTIFICATIONS} from './types'


export const getNotifications = () => {
    return {
        type: GETNOTIFICATIONS
    };
}

export const setNotifications = (notifications) => {
    const data =  {
        type: SETNOTIFICATIONS,
        notifications
    };
    return data;
}

