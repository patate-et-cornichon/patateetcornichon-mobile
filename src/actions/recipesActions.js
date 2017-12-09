import { AsyncStorage } from 'react-native'
import { FileSystem } from 'expo'
import {
  GET_FAVORITE_RECIPES,
  GET_LAST_RECIPES,
  GET_RELATIVE_RECIPES,
  GET_SALTY_RECIPES,
  GET_SWEET_RECIPES,
  SET_HOME_RECIPES_LOADED
} from './actionTypes'
import settings from '../config/settings'
import FormatHTML from '../utils/formatHTML'

const getRecipes = (type, fileNamespace, recipes) => ({
  type,
  fileNamespace,
  recipes
})

const setHomeRecipesLoaded = () => ({
  type: SET_HOME_RECIPES_LOADED
})

/**
 * Check if recipes is in storage
 * Save Recipe if not
 *
 * @param recipe
 * @param cache
 * @returns {Promise.<void>}
 */
const saveRecipeInStorage = async recipe => {
  const recipesExists = await AsyncStorage.getItem(`@PatateEtCornichon:recipe:${recipe.id}`)

  /**
   * Save recipe into AsyncStorage
   */
  const saveRecipe = async () => {
    /**
     * Download Main Image
     */
    recipe.main_image = await downloadImage(recipe.main_image.medium_size, recipe.slug, '1')

    /**
     * Download Secondary Image if exists
     */
    if (Object.keys(recipe.secondary_image).length !== 0) {
      recipe.secondary_image = await downloadImage(recipe.secondary_image.medium_size, recipe.slug, '2')
    } else {
      recipe.secondary_image = null
    }

    recipe.introduction = FormatHTML.convertListToArray(recipe.introduction)
    recipe.ingredients = FormatHTML.convertListToArray(recipe.ingredients)
    recipe.recipe_steps = FormatHTML.convertListToArray(recipe.recipe_steps)

    await AsyncStorage.setItem(
      `@PatateEtCornichon:recipe:${recipe.id}`,
      JSON.stringify(recipe)
    )
  }

  /**
   * If Recipe exists but the remote Recipe update is posterior to the local Recipe Update
   * We save the recipe
   * Else, we just save the recipe
   */
  if (recipesExists) {
    const previousRecipe = JSON.parse(recipesExists)
    if (new Date(recipe.updated_at) > new Date(previousRecipe.updated_at)) {
      await saveRecipe()
    }
  } else {
    await saveRecipe()
  }
}

/**
 * Check if image exists, else we save it
 *
 * @param uri
 * @param fileName
 * @param suffix
 * @param cache
 * @returns {Promise}
 */
const downloadImage = async (uri, fileName, suffix, cache = true) => {
  /**
   * Get the images path (cache and document directory)
   *
   * @type {string}
   */
  const imageFromCache = `${FileSystem.cacheDirectory}${fileName}-${suffix}.jpg`
  const imageFromStorage = `${FileSystem.documentDirectory}${fileName}-${suffix}.jpg`

  /**
   * Check if the image exists in cache or normal directory
   */
  const {exists: imageFromCacheExists} = await FileSystem.getInfoAsync(imageFromCache)
  const {exists: imageFromStorageExists} = await FileSystem.getInfoAsync(imageFromStorage)

  /**
   * If the image doesn't exist at all, we save it
   */
  if (!imageFromCacheExists && !imageFromStorageExists) {
    const {uri: imageDownloadedPath} = await FileSystem.downloadAsync(uri, imageFromCache)
    return imageDownloadedPath
  }

  /**
   * If the image exists in cache but we want to move it in document directory
   */
  else if (imageFromCacheExists && cache === false) {
    await FileSystem.moveAsync({
      from: imageFromCache,
      to: imageFromStorage
    })
    return imageFromStorage
  }

  /**
   * If the image exists in document directory but we want to move it in cache
   */
  else if (imageFromStorageExists && cache === true) {
    await FileSystem.moveAsync({
      from: imageFromStorage,
      to: imageFromCache
    })
    return imageFromCache
  }

  return imageFromCacheExists ? imageFromCache : imageFromStorage
}

/**
 * Clear all unwanted recipes
 *
 * @param fileNamespace
 * @returns {Promise}
 */
const clearRecipes = async fileNamespace => {
  const recipesListFromStorage = await AsyncStorage.getItem(`@PatateEtCornichon:${fileNamespace}`)
  const recipesFavorite = await AsyncStorage.getItem('@PatateEtCornichon:favoriteRecipes')

  if (recipesListFromStorage) {
    const recipesList = JSON.parse(recipesListFromStorage).filter(id => {
      if (recipesFavorite) {
        return !JSON.parse(recipesFavorite).includes(id)
      }
      return true
    })
    const recipeIds = recipesList.map(id => `@PatateEtCornichon:recipe:${id}`)
    await AsyncStorage.multiRemove(recipeIds)
  }
}

/**
 * Clear recipes from multiple namespaces
 *
 * @param fileNamespaces
 * @returns {Promise.<void>}
 */
const clearRecipesFromMultipleNamespaces = async ([...fileNamespaces]) => {
  for (const fileNamespace of fileNamespaces) {
    await clearRecipes(fileNamespace)
  }
}

/**
 * This Action fetch data from server if connected and save data & image in AsyncStorage
 * If no connection, we try to obtain the recipes from AsyncStorage
 *
 * @param actionType
 * @param fileNamespace
 * @param endpoint
 */
const fetchRecipes = (actionType, fileNamespace, endpoint) => async (dispatch, getState) => {
  const {network} = getState()

  if (network) {
    /**
     * Get recipes from the API
     */
    const response = await fetch(`${settings.apiUrl}/junk-food/recipes/${endpoint}`)
    const recipes = await response.json()

    /**
     * Save them in storage
     */
    for (let recipe of recipes) await saveRecipeInStorage(recipe)

    /**
     * Save the recipes ID in a list
     */
    const recipesId = recipes.map(recipe => recipe.id)
    await AsyncStorage.setItem(`@PatateEtCornichon:${fileNamespace}`, JSON.stringify(recipesId))
  }

  const recipes = await loadRecipesFromDatabase(fileNamespace)

  return dispatch(getRecipes(actionType, fileNamespace, recipes))
}

/**
 * Return an object with all recipes in database
 *
 * @param fileNamespace
 * @returns {Promise}
 */
const loadRecipesFromDatabase = async fileNamespace => {
  /**
   * Load Recipes from Database
   */
  const recipesIdFromStorage = await AsyncStorage.getItem(`@PatateEtCornichon:${fileNamespace}`)
  let recipes = []

  /**
   * Save them in an object in order to send all recipes to Redux state
   */
  if (recipesIdFromStorage) {
    const recipesId = JSON.parse(recipesIdFromStorage).map(id => `@PatateEtCornichon:recipe:${id}`)
    const stores = await AsyncStorage.multiGet(recipesId)
    stores.map(async (result, i, store) => {
      recipes = [
        ...recipes,
        JSON.parse(store[i][1])
      ]
    })
  }

  return recipes
}

/**
 * Manage the favorite recipe action
 * Change the images location (cache or normal directory)
 * Add or remove the recipe in favorite recipes list
 *
 * @param action
 * @param recipe
 * @returns {Promise}
 */
const manageFavoriteRecipe = (action, recipe) => async dispatch => {
  /**
   * Check if action is 'add' or not
   *
   * @type {boolean}
   */
  const addRecipe = action === 'add'

  /**
   * Get the recipe path
   *
   * @type {string}
   */
  const recipePath = `@PatateEtCornichon:recipe:${recipe.id}`

  /**
   * Get recipe from storage
   */
  const recipeFromStorage = await AsyncStorage.getItem(recipePath)
  const recipeToEdit = JSON.parse(recipeFromStorage)

  /**
   * Set the image in the corresponding directory
   * If cache enabled => cache directory
   * Else => normal directory
   */
  recipeToEdit.main_image = await downloadImage(null, recipeToEdit.slug, '1', !addRecipe)
  if (recipeToEdit.secondary_image) {
    recipeToEdit.secondary_image = await downloadImage(null, recipeToEdit.slug, '2', !addRecipe)
  }

  /**
   * Save the recipe with the new image path
   */
  await AsyncStorage.setItem(recipePath, JSON.stringify(recipeToEdit))

  /**
   * Get the array of favorite recipe IDs
   */
  const favoriteRecipesLocation = '@PatateEtCornichon:favoriteRecipes'
  const favoriteRecipesStorage = await AsyncStorage.getItem(favoriteRecipesLocation)
  const favoriteRecipesArray = favoriteRecipesStorage ? JSON.parse(favoriteRecipesStorage) : []

  /**
   * If we want to add a recipe the favorite items, we return an array with the recipe Id included
   * Else we remove the recipe from array
   */
  let favoriteRecipes
  if (addRecipe) {
    favoriteRecipes = [
      ...favoriteRecipesArray,
      recipe.id
    ]
  }
  else {
    favoriteRecipes = favoriteRecipesArray.filter(item => item !== recipe.id)
  }

  /**
   * Set the new favorite recipes in storage
   */
  await AsyncStorage.setItem(favoriteRecipesLocation, JSON.stringify(favoriteRecipes))
  await dispatch(getFavoriteRecipes())
}

/**
 * Check if the recipe is not in the recipe favorite list
 *
 * @param recipeId
 */
export const isRecipeFavorite = recipeId => async () => {
  const favoriteRecipesList = await AsyncStorage.getItem('@PatateEtCornichon:favoriteRecipes')
  if (favoriteRecipesList) {
    return JSON.parse(favoriteRecipesList).includes(recipeId)
  }
  return false
}

/**
 * Set the recipe as favorite
 *
 * @param recipe
 */
export const setRecipeAsFavorite = recipe => async dispatch => {
  await dispatch(manageFavoriteRecipe('add', recipe))
}

/**
 * Remove the recipe as favorite
 *
 * @param recipe
 */
export const removeRecipeAsFavorite = recipe => async dispatch => {
  await dispatch(manageFavoriteRecipe('remove', recipe))
}

/**
 * Get favorite recipes
 *
 * @returns {function(*)}
 */
export const getFavoriteRecipes = () => async dispatch => {
  const recipes = await loadRecipesFromDatabase('favoriteRecipes')
  dispatch(getRecipes(GET_FAVORITE_RECIPES, 'favoriteRecipes', recipes))
}

export const fetchLastRecipes = limit => async dispatch => {
  return dispatch(fetchRecipes(
    GET_LAST_RECIPES,
    'lastRecipes',
    `?limit=${limit}&offset=0`
  ))
}

export const fetchSweetRecipes = limit => dispatch => {
  return dispatch(fetchRecipes(
    GET_SWEET_RECIPES,
    'sweetRecipes',
    `?category=sucre&random=true&offset=0&limit=${limit}`
  ))
}

export const fetchSaltyRecipes = limit => dispatch => {
  return dispatch(fetchRecipes(
    GET_SALTY_RECIPES,
    'saltyRecipes',
    `?category=sale&random=true&offset=0&limit=${limit}`
  ))
}

export const fetchRelativeRecipes = (recipeSlug, limit = 3) => dispatch => {
  return dispatch(fetchRecipes(
    GET_RELATIVE_RECIPES,
    'relativeRecipes',
    `${recipeSlug}/relative/?limit=${limit}`
  ))
}

export const getRecipeFromDatabase = recipeId => async () => {
  const recipe = await AsyncStorage.getItem(`@PatateEtCornichon:recipe:${recipeId}`)
  return JSON.parse(recipe)
}

/**
 * Get All Home Recipes and then set all home recipes as loaded
 */
export const getHomeRecipes = limit => async (dispatch, getState) => {
  const {network} = getState()
  try {
    if (network) {
      await clearRecipesFromMultipleNamespaces(['lastRecipes', 'sweetRecipes', 'saltyRecipes'])
    }
    await dispatch(fetchLastRecipes(limit))
    await dispatch(fetchSweetRecipes(limit))
    await dispatch(fetchSaltyRecipes(limit))
    await dispatch(getFavoriteRecipes())
  } finally {
    dispatch(setHomeRecipesLoaded())
  }
}