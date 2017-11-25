import {SET_NETWORK_CONNECTION} from '../actions/actionTypes';

const network = (state = false, action) => {
    const {type, isConnected} = action;
    if (type === SET_NETWORK_CONNECTION) {
        return isConnected
    }
    return state;
};

export default network;