import {AsyncStorage} from 'react-native';
import {FileSystem} from 'expo';
import {LOG_PROCESS_FINISHED, LOGIN, LOGOUT, REMOVE_USER} from './actionTypes';
import settings from '../config/settings';
import {checkErrors} from '../utils/functions';
import AvatarUtils from '../utils/avatar';

/**
 * Login user
 *
 * @param user
 */
export const login = user => ({
    type: LOGIN,
    user
});

/**
 * Just Send a Logout info to Redux State
 */
export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    });
    await AsyncStorage.multiRemove([
        '@PatateEtCornichon:userToken',
        '@PatateEtCornichon:user',
    ])
};

export const logProcessFinished = isLogged => ({
    type: LOG_PROCESS_FINISHED,
    isLogged
});

/**
 * Login User thanks to the token and dispatch the users info to
 * the Redux Store
 *
 * @param isConnected
 */
export const loginRequest = (isConnected = true) => async dispatch => {
    const token = await AsyncStorage.getItem('@PatateEtCornichon:userToken');
    const user = await AsyncStorage.getItem('@PatateEtCornichon:user');
    let isLogged = false;

    /**
     * If the user is not connected but has a token and self user info
     */
    if (!isConnected && token && user) {
        isLogged = true;
        dispatch(login(JSON.parse(user)));
    }

    /**
     * If the user is connected we try to log the user via the Rest API
     * If an error occurs during the process, we remove the token and user info
     * And logout the user
     */
    else if (token) {
        try {
            const response = await fetch(`${settings.apiUrl}/core/users/self/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,
                }
            });
            const {user: remoteUser} = await checkErrors(await response);
            const user = await formatUser(remoteUser);
            await AsyncStorage.setItem('@PatateEtCornichon:user', JSON.stringify(user));
            isLogged = true;
            dispatch(login(user));
        } catch (e) {
            dispatch(logout());
        }
    }

    dispatch(logProcessFinished(isLogged));
};

/**
 * Create or login a user
 * Throw error if the response is not ok, with the error message
 *
 * @param apiEndpoint
 * @param userInfos
 * @returns {Promise.<string|*|string>}
 * @private
 */
const _createOrLoginUser = async (apiEndpoint, userInfos) => {
    const response = await fetch(`${settings.apiUrl}${apiEndpoint}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfos)
    });
    const {token} = await checkErrors(await response);
    return await AsyncStorage.setItem('@PatateEtCornichon:userToken', token);
};

export const createUser = userInfos => async dispatch => await _createOrLoginUser('/core/users/', userInfos);

export const loginUser = userInfos => async dispatch => await _createOrLoginUser('/core/users/auth-token/', userInfos);

/**
 * Format User info
 *
 * @param user
 * @returns {Promise}
 */
const formatUser = async user => {
    /**
     * Save avatar in storage if is not the default one
     */
    if (!AvatarUtils.isDefault(user.avatar)) {
        const avatarFileExtension = user.avatar.split('.').pop();
        const reg = /^(\w{3})$/;
        const extension = reg.test(avatarFileExtension) ? avatarFileExtension : 'jpg';

        const avatarFromStorage = `${FileSystem.documentDirectory}user.${extension}`;

        const {uri: imageDownloadedPath} = await FileSystem.downloadAsync(user.avatar, avatarFromStorage);
        user.avatar = imageDownloadedPath;
    }

    return user;
};