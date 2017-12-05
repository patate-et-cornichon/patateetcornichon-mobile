import {FileSystem} from 'expo';
import {CHANGE_AVATAR} from './actionTypes';
import settings from '../config/settings';
import {AsyncStorage} from 'react-native';
import {checkErrors} from '../utils/functions';
import {loginRequest} from './authActions';


/**
 * Save the avatar in the storage
 * @param uri
 * @param extension
 * @returns {Promise<*>}
 */
export const saveAvatar = async (uri, extension) => {
    const avatarFromStorage = `${FileSystem.cacheDirectory}user.${extension}`;
    const {uri: avatarPath} = await FileSystem.downloadAsync(uri, avatarFromStorage);
    return avatarPath;
};

/**
 * Change the user Avatar thanks to the URI provided in parameter
 *
 * @param uri
 * @param extension
 * @returns {function(*)}
 */
export const changeAvatar = (uri, extension = 'jpg') => async dispatch => {
    const avatar = await saveAvatar(uri, extension);
    dispatch({
        type: CHANGE_AVATAR,
        user: {avatar}
    });
};

/**
 * Send a request to the server in order to update the user info
 * Change the edited fields only
 *
 * @param fields
 * @returns {function(*, *)}
 */
export const patchUserInfo = fields => async (dispatch, getState) => {
    const {auth: {user}, components: {toast}} = getState();
    const token = await AsyncStorage.getItem('@PatateEtCornichon:userToken');

    const data = new FormData();

    for (const field of Object.keys(fields)) {
        const value = fields[field].value;

        if (user[field] !== value) {
            if (field === 'avatar') {
                data.append('avatar', {
                    uri: value,
                    type: fields[field].type,
                    name: 'avatar.jpg'
                });
                continue;
            }
            data.append(field, value);
        }
    }

    try {
        const response = await fetch(`${settings.apiUrl}/core/users/self/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Token ${token}`
            },
            body: data
        });
        await checkErrors(response);
        await dispatch(loginRequest(true, false));
        toast.show('success', 'Modifications enregistrées !');
    } catch (e) {
        toast.show('error', e.message);
    }
};