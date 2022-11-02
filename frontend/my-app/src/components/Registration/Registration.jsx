import React, {useState} from 'react';
import {registration} from "../../functions/api";

const auth = (username, password1, password2) => {
    const data = {
        username,
        password1,
        password2
    }
    console.log(data);
    registration({
        username,
        password: password1
    });
}

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

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
                        value={password1}
                        onChange={(event) => {
                            setPassword1(event.target.value);
                        }}
                    />
                </label>
                <br/>
                 <label> Password again
                    <textarea
                        name="password_again"
                        value={password2}
                        onChange={(event) => {
                            setPassword2(event.target.value);
                        }}
                    />
                </label>
                <br/>
                <button type="button" onClick={() => {
                    auth(username, password1,password2);
                }}>Создать
                </button>
            </form>
        </div>
    );
};

export default Registration;