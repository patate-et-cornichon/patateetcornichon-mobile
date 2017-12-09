import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as recipesActions from '../actions/recipesActions'
import ScrollRecipes from '../screens/Home/ScrollRecipes/ScrollRecipes'

const ScrollRecipesContainer = props => (
  <ScrollRecipes {...props} />
)

const mapStateToProps = state => ({
  //
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...recipesActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ScrollRecipesContainer)
