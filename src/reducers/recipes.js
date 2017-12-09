import {
  GET_FAVORITE_RECIPES,
  GET_LAST_RECIPES,
  GET_RELATIVE_RECIPES,
  GET_SALTY_RECIPES,
  GET_SWEET_RECIPES,
  SET_HOME_RECIPES_LOADED
} from '../actions/actionTypes'

const initialState = {
  homeRecipesLoaded: false,
  categories: [],
  lastRecipes: [],
  sweetRecipes: [],
  saltyRecipes: [],
  relativeRecipes: [],
  favoriteRecipes: []
}

const recipes = (state = initialState, action) => {
  const {type, fileNamespace, recipes} = action
  switch (type) {
    case GET_LAST_RECIPES:
    case GET_SWEET_RECIPES:
    case GET_SALTY_RECIPES:
    case GET_RELATIVE_RECIPES:
    case GET_FAVORITE_RECIPES:
      return {
        ...state,
        [fileNamespace]: recipes
      }
    case SET_HOME_RECIPES_LOADED:
      return {
        ...state,
        homeRecipesLoaded: true
      }
    default:
      return state
  }
}

export default recipes