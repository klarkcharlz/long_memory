import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearContext} from "../../redux/Authorization/actions";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = (event) => {
        event.preventDefault();
        console.log('Выход');
        dispatch(clearContext())
        navigate("/main");
    };

    return (
        <div>
            <button type='button' onClick={logout}>Выход</button>
        </div>
    );
};

export default Logout;