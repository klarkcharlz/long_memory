import React, {useState} from "react";
import {connect} from "react-redux";

import {getContent} from "../functions/api";
import {SETTITLE, SETDESCRIPTION} from '../redux/types/createNotifications';

const createNotification = (title, description) => {
    console.log('Создано');
    console.log(title);
    console.log(description);
    getContent();
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps > ', state);
    return {
        title: state.title,
        description: state.description
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTitle: (event) => {
            console.log('SETTITLE');
            console.log(event.target.value);
            const action = {
                type: SETTITLE,
                value: event.target.value
            };
            dispatch(action);
        },
        setDescription: (event) => {
            console.log('SETDESCRIPTION');
            console.log(event.target.value);
            const action = {
                type: SETDESCRIPTION,
                value: event.target.value
            };
            dispatch(action);
        }
    }
}


const CreateNotification = (props) => {
    // const [title, setTitle] = useState("React хуки.");
    // const [description, setDescription] = useState("Изучил хуки useState и useEffect.");
    console.log('Render props > ', props)
    return (
        <div>
            <form action="" method="POST">
                <label> Тема(ы)
                    <input type="text"
                           name="title"
                           value={props.title}
                           onChange={(event) => {
                               props.setTitle(event);
                           }}
                    />
                </label>
                <br/>
                <label> Описание
                    <textarea
                        name="description"
                        value={props.description}
                        onChange={(event) => {
                            props.setDescription(event);
                        }}
                    />
                </label>
                <br/>
                <button type="button" onClick={() => {
                    createNotification(props.title, props.description);
                }}>Создать
                </button>
            </form>
        </div>
    )
}

// export default CreateNotification;
export default connect(mapStateToProps, mapDispatchToProps)(CreateNotification);
