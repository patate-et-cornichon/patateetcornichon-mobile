import {LOG_PROCESS_FINISHED, LOGIN, LOGOUT, SET_VIEW_LOADED} from '../actions/actionTypes';

const initialState = {
    isLogged: false,
    user: {},
    logProcessFinished: false,
    viewLoaded: false,
};

const auth = (state = initialState, action) => {
    const {type, user} = action;
    const {logProcessFinished} = state;

    switch (type) {
        case LOGIN:
            return {
                isLogged: true,
                user,
                logProcessFinished
            };
        case LOGOUT:
            return {
                ...initialState,
                logProcessFinished
            };
        case LOG_PROCESS_FINISHED:
            return {
                ...state,
                logProcessFinished: true
            };
        default:
            return state;
    }
};

export default auth;