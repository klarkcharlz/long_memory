import React, {useState} from "react";
// import {connect} from "react-redux";
import {createNotification} from "../../functions/api";
// import {setTitle, setDescription} from '../../redux/СreateNotifications/actions'
import useUserContext from '../../hooks/useUserContext';


const createNotification_ = (title, description, authToken, userId) => {
    console.log('Создано');
    console.log(title);
    console.log(description);
    const data = {
        title,
        description
    }
    createNotification(data, authToken, userId);
}

// const mapStateToProps = (state) => {
//     const {createNotificationsReducer} = state;
//     return {
//         title: createNotificationsReducer.title,
//         description: createNotificationsReducer.description
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setTitle: (event) => dispatch(setTitle(event)),
//         setDescription: (event) => dispatch(setDescription(event))
//     }
// }


const CreateNotification = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [authToken, userId] = useUserContext();

    return (
        <div>
            <form>
                <label> Тема(ы)
                    <input type="text"
                           name="title"
                           // value={props.title}
                           value={title}
                           onChange={(event) => {
                               // props.setTitle(event);
                               setTitle(event.target.value);
                           }}
                    />
                </label>
                <br/>
                <label> Описание
                    <textarea
                        name="description"
                        //value={props.description}
                        value={description}
                        onChange={(event) => {
                            // props.setDescription(event);
                            setDescription(event.target.value);
                        }}
                    />
                </label>
                <br/>
                <button type="button" onClick={() => {
                    createNotification_(title, description, authToken, userId);
                }}>Создать
                </button>
            </form>
        </div>
    )
}

export default CreateNotification;
// export default connect(mapStateToProps, mapDispatchToProps)(CreateNotification);
