import { GET_CATEGORIES } from '../actions/actionTypes'

const categories = (state = [], action) => {
  const {type, categories} = action
  switch (type) {
    case GET_CATEGORIES:
      return categories
    default:
      return state
  }
}

export default categories
