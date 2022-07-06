import {Link} from "react-router-dom";
import React from "react";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/main'>О проекте.</Link></li>
                <li><Link to='/create_notification'>Создать напоминание.</Link></li>
                <li><Link to='/notifications_list'>Активные напоминания.</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;
