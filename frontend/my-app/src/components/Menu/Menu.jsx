import {Link} from "react-router-dom";
import React from "react";
import useUserContext from "../../hooks/useUserContext";

const Menu = () => {
    const [authToken, userId] = useUserContext();
    console.log('Menu authToken > ', authToken);
    console.log('Menu userId > ', userId);

    return (
        <nav>
            <ul>
                <li><Link to='/main'>О проекте.</Link></li>
                <li><Link to='/create_notification'>Создать напоминание.</Link></li>
                <li><Link to='/notifications_list'>Активные напоминания.</Link></li>
                {
                    !authToken ?
                        <>
                            <li><Link to='/registration'>Регистрация.</Link></li>
                            <li><Link to='/authorization'>Авторизация.</Link></li>
                        </> :
                        <li><Link to='/logout'>Выход.</Link></li>
                }

            </ul>
        </nav>
    )
}

export default Menu;
