import {combineReducers} from 'redux';

import {createNotificationsReducer} from './reducers/createNotifications'

export const rootReducer = combineReducers({
    createNotifications: createNotificationsReducer
})
