import {AsyncStorage} from 'react-native';
import settings from '../config/settings';
import {checkErrors} from '../utils/functions';


export const fetchComments = (recipeSlug, limit = 5, offset = 0) => async (dispatch, getState) => {
    const {network} = getState();

    if (network) {
        const response = await fetch(
            `${settings.apiUrl}/junk-food/recipes/${recipeSlug}/comments/?limit=${limit}&offset=${offset}`
        );
        const data = await response.json();
        const endComments = data.length < limit;
        return {
            data,
            endComments
        }
    }
};

export const postComment = comment => async (dispatch, getState) => {
    const {components: {toast}} = getState();
    const token = await AsyncStorage.getItem('@PatateEtCornichon:userToken');
    const response = await fetch(`${settings.apiUrl}/junk-food/comments/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
        body: JSON.stringify(comment)
    });

    try {
        const postedComment = await checkErrors(await response);
        toast.show('success', 'Commentaire posté ! :-)');
        return postedComment;
    } catch (e) {
        toast.show('error', e.message);
    }
};