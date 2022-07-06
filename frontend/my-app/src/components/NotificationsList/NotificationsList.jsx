import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {getNotifications, setNotifications} from '../../redux/NotificationsList/actions';

import {getContent} from '../../functions/api'


const Notification = ({notification}) => {
    const {title, description, date} = notification;
    return(
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>{date}</p>
        </div>
    )
}


const NotificationList = (props) => {
    const dispatch = useDispatch();
    const getNotifications_ = () => {
        getContent(dispatch);
        // dispatch(getNotifications())
    }
    const notifications = useSelector(state => {
        const {notificationsListReducer} = state;
        return notificationsListReducer.notifications;
    });

    return (
        <div>
            <p>Тут будут ваши активные напоминания</p>
            {notifications.map((notification) =>
                <Notification notification={notification}
                              key={notification.id}
                />)
            }
            <button type='button' onClick={(e) => {
                e.preventDefault();
                getNotifications_();
            }}>Загрузить напоминания</button>
        </div>
    )
}

export default NotificationList;
