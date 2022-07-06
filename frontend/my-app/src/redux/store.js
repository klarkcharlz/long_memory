import {createStore} from 'redux';

const initialState = {
    title: "React хуки.",
    description: "Изучил хуки useState и useEffect."
}

const reducer = (state = initialState, action) => {
    console.log("reducer > ", action);
    switch (action.type){
        case 'SETTITLE':
            return {
                ...state,
                title: action.value
            }
        case 'SETDESCRIPTION':
            return {
                ...state,
                title: action.description
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
