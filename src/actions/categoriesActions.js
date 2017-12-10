import { AsyncStorage } from 'react-native'
import settings from '../config/settings'
import { checkErrors } from '../utils/functions'
import { GET_CATEGORIES } from './actionTypes'
import { CATEGORIES, getLocation } from '../config/locations'

/**
 * Get Categories and save them in database
 * @returns {function(*, *)}
 */
export const fetchCategories = () => async (dispatch, getState) => {
  const {network} = getState()
  const categoriesLocation = getLocation(CATEGORIES)

  if (network) {
    const response = await fetch(`${settings.apiUrl}/junk-food/categories/`, {
      method: 'GET'
    })
    const fetchedCategories = await checkErrors(await response)
    await AsyncStorage.setItem(categoriesLocation, JSON.stringify(fetchedCategories))
  }

  const categoriesFromStorage = await AsyncStorage.getItem(categoriesLocation)
  const categories = JSON.parse(categoriesFromStorage)

  dispatch({
    type: GET_CATEGORIES,
    categories
  })
}
