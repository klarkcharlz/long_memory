import React from "react";
import {connect} from "react-redux";

import {setData} from "../../functions/api";
import {setTitle, setDescription} from '../../redux/СreateNotifications/actions'


const createNotification = (title, description) => {
    console.log('Создано');
    console.log(title);
    console.log(description);
    const data = {
        title,
        description
    }
    setData(data);
}

const mapStateToProps = (state) => {
    const {createNotificationsReducer} = state;
    return {
        title: createNotificationsReducer.title,
        description: createNotificationsReducer.description
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTitle: (event) => dispatch(setTitle(event)),
        setDescription: (event) => dispatch(setDescription(event))
    }
}


const CreateNotification = (props) => {
    return (
        <div>
            <form action="frontend/my-app/src/components/CreateNotification/CreateNotification" method="POST">
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
