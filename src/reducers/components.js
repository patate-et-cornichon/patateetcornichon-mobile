import {ADD_COMPONENT_REF} from '../actions/actionTypes';


const components = (state = {}, action) => {
    const {type, name, ref} = action;
    switch (type) {
        case ADD_COMPONENT_REF:
            return {
                ...state,
                [name]: ref
            };
        default:
            return state;
    }
};

export default components;