import axios from "axios";
import {setNotifications} from "../redux/NotificationsList/actions";


function getContent(dispatch) {
    axios.get(`http://127.0.0.1:5000`)
        .then(response => {
            console.log('response.data > ', response.data);
            const notifications = response.data;
            dispatch(setNotifications(notifications))
        }).catch(error => console.error(error))
}

async function setData(data) {
    await axios.post(`http://127.0.0.1:5000`, {"data": 'data'})
        .then(response => {
            console.log(response.data);
        }).catch(error => console.error(error))
}

export {getContent, setData};
