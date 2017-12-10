import React from 'react'
import { connect } from 'react-redux'
import { MaterialCommunityTabBarIcon } from '../components/Icons/TabBarIcon/TabBarIcon'
import Recipes from '../screens/Recipes/Recipes'
import * as categoriesActions from '../actions/categoriesActions'
import * as recipesActions from '../actions/recipesActions'
import { bindActionCreators } from 'redux'

class RecipesContainer extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({focused, tintColor}) => <MaterialCommunityTabBarIcon name='hamburger'
      tintColor={tintColor}
      focused={focused}
    />
  }

  render () {
    return <Recipes {...this.props} />
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  recipes: state.recipes.recipesByCategories
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...categoriesActions,
    ...recipesActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
