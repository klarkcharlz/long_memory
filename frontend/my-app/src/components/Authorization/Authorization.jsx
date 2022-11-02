import React, {useState} from 'react';
import {authorization} from "../../functions/api";
import {useDispatch} from "react-redux";
import {setAuthToken, setUserId} from "../../redux/Authorization/actions";
import {useNavigate} from "react-router-dom";


const auth = (username, password, saveUserData) => {
    const data = {
        username,
        password
    }
    authorization(data, saveUserData);
}

const Authorization = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const saveUserData = (authToken, userId) => {
        dispatch(setAuthToken(authToken));
        dispatch(setUserId(userId));
        navigate("/main");
    }



    return (
        <div>
             <form>
                <label> Login
                    <input type="text"
                           name="login"
                           value={username}
                           onChange={(event) => {
                               setUsername(event.target.value);
                           }}
                    />
                </label>
                <br/>
                <label> Password
                    <textarea
                        name="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </label>
                <br/>
                <button type="button" onClick={() => {
                    auth(username, password, saveUserData);
                }}>Войти
                </button>
            </form>
        </div>
    );
};

export default Authorization;