import { FileSystem } from 'expo'
import { CHANGE_AVATAR } from './actionTypes'
import settings from '../config/settings'
import { AsyncStorage } from 'react-native'
import { checkErrors } from '../utils/functions'
import { loginRequest } from './authActions'

/**
 * Save the avatar in the storage
 * @param uri
 * @param extension
 * @returns {Promise<*>}
 */
export const saveAvatar = async (uri, extension) => {
  const avatarFromStorage = `${FileSystem.cacheDirectory}user.${extension}`
  const {uri: avatarPath} = await FileSystem.downloadAsync(uri, avatarFromStorage)
  return avatarPath
}

/**
 * Send a request to the server in order to update the user info
 * Change the edited fields only
 *
 * @param fields
 * @returns {function(*, *)}
 */
export const patchUserInfo = fields => async (dispatch, getState) => {
  const {auth: {user}, components: {toast}} = getState()
  const token = await AsyncStorage.getItem('@PatateEtCornichon:userToken')

  const data = new FormData()
  let valuesLength = 0

  for (const field of Object.keys(fields)) {
    const value = fields[field].value

    if (user[field] !== value) {
      valuesLength++
      if (field === 'avatar') {
        data.append('avatar', {
          uri: value,
          type: 'image/jpg',
          name: 'avatar.jpg'
        })
        continue
      }
      data.append(field, value)
    }
  }

  if (valuesLength > 0) {
    try {
      const response = await fetch(`${settings.apiUrl}/core/users/self/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${token}`
        },
        body: data
      })
      await checkErrors(response)
      await dispatch(loginRequest(true, false))
      toast.show('success', 'Modifications enregistrées !')
    } catch (e) {
      toast.show('error', e.message)
    }
  } else {
    toast.show('success', 'Rien n\'a changé :-) !')
  }
}