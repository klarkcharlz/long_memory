import {combineReducers} from 'redux';

// import {createNotificationsReducer} from './СreateNotifications/reducer'
// import {notificationsListReducer} from './NotificationsList/reducer'
import {authorizationReducer} from './Authorization/reducer'

export const rootReducer = combineReducers({
    authorizationReducer
})
