import {CHANGE_AVATAR, LOG_PROCESS_FINISHED, LOGIN, LOGOUT, REMOVE_USER, SET_VIEW_LOADED} from '../actions/actionTypes';

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
        case CHANGE_AVATAR:
            return {
                ...state,
                user: {
                    ...user,
                    avatar: user.avatar
                }
            };
        case LOGOUT:
            return {
                ...state,
                isLogged: false,
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