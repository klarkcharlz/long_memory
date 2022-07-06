import {combineReducers} from 'redux';

import {createNotificationsReducer} from './СreateNotifications/reducer'
import {notificationsListReducer} from './NotificationsList/reducer'

export const rootReducer = combineReducers({
    createNotificationsReducer,
    notificationsListReducer
})
