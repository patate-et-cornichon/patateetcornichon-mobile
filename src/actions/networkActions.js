import { SET_NETWORK_CONNECTION } from './actionTypes'
import { loginRequest } from './authActions'
import { getHomeRecipes } from './recipesActions'

const networkConnection = isConnected => ({
  type: SET_NETWORK_CONNECTION,
  isConnected
})

export const setNetworkConnection = (isConnected) => (dispatch, getState) => {
  const {recipes: {lastRecipes, sweetRecipes, saltyRecipes}} = getState()
  const recipesEmpty = !lastRecipes.length || !sweetRecipes.length || !saltyRecipes.length

  dispatch(loginRequest(isConnected))
  dispatch(networkConnection(isConnected))

  if (recipesEmpty) {
    dispatch(getHomeRecipes(7))
  }
}
