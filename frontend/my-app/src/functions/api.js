import axios from "axios";
// import {setNotifications} from "../redux/NotificationsList/actions";


function get_headers(token = null) {
    let headers = {
        'Content-Type': 'application/json'
    }
    if (token) {
        headers['Authorization'] = 'token ' + token
    }
    return headers
}

// function getNotifications(dispatch) - redux
function getNotifications(setNotifications, authToken, userId) {
    const headers = get_headers(authToken);
    axios.get(`http://127.0.0.1:5000/notifications/${userId}`, {headers})
        .then(response => {
            console.log('getNotifications > response.data > ', response.data);
            const notifications = response.data;
            setNotifications(notifications);
            // dispatch(setNotifications(notifications))
        }).catch(error => console.error(error))
}

function createNotification(data, authToken, userId) {
    const headers = get_headers(authToken);
    axios.post(`http://127.0.0.1:5000/notifications/${userId}`, data, {headers})
        .then(response => {
            console.log('createNotification > response.data > ', response.data);
        }).catch(error => console.error(error))
}

function registration(data) {
    axios.post(`http://127.0.0.1:5000/register`, data)
        .then(response => {
            console.log('registration > response.data > ', response.data);
        }).catch(error => console.error(error))
}

function authorization(data, saveUserData) {
    axios.post(`http://127.0.0.1:5000/auth`, data)
        .then(response => {
            const data = response.data;
            const auth_token = data.auth_token;
            const user_id = data.user_id;
            console.log('authorization > auth_token > ', auth_token);
            console.log('authorization > user_id > ', user_id);
            saveUserData(auth_token, user_id);
        }).catch(error => console.error(error))
}

export {
    getNotifications,
    createNotification,
    registration,
    authorization
};
