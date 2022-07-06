import axios from "axios";

function getContent() {
    axios.get(`http://127.0.0.1:5000`)
        .then(response => {
            console.log(response.data);
        }).catch(error => console.error(error))
}

async function setData(data) {
    await axios.post(`http://127.0.0.1:5000`, {"data": 'data'})
        .then(response => {
            console.log(response.data);
        }).catch(error => console.error(error))
}

export {getContent, setData};
