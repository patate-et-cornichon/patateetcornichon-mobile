import { ADD_COMPONENT_REF } from './actionTypes'

export const addComponent = ({name, ref}) => dispatch => (
  dispatch({
    type: ADD_COMPONENT_REF,
    name,
    ref
  })
)