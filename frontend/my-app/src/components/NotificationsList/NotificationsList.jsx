import React, {useState} from "react";

// import {useDispatch, useSelector} from "react-redux";
import {getNotifications} from '../../functions/api'
import useUserContext from "../../hooks/useUserContext";


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


const NotificationList = () => {
    // const dispatch = useDispatch();
    // const getNotifications_ = () => {
    //     getNotifications(dispatch);
    // }
    // const notifications = useSelector(state => {
    //     const {notificationsListReducer} = state;
    //     return notificationsListReducer.notifications;
    // });

    const [notifications, setNotifications] = useState([]);
    const [authToken, userId] = useUserContext();
    console.log(authToken);
    console.log(userId);

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
                // getNotifications_();
                getNotifications( (newNotifications) => {
                    setNotifications(newNotifications);
                }, authToken, userId)
            }}>Загрузить напоминания</button>
        </div>
    )
}

export default NotificationList;
