import { combineReducers } from 'redux'
import network from './network'
import nav from './nav'
import components from './components'
import auth from './auth'
import recipes from './recipes'
import categories from './categories'

const rootReducer = combineReducers({
  nav,
  components,
  network,
  auth,
  recipes,
  categories
})

export default rootReducer
