import {SETTITLE, SETDESCRIPTION} from './types'


export const setTitle = (event) => {
    return {
        type: SETTITLE,
        value: event.target.value
    };
}

export const setDescription = (event) => {
    return {
        type: SETDESCRIPTION,
        value: event.target.value
    };
}
