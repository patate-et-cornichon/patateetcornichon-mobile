import React from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import ScrollRecipes from '../../containers/ScrollRecipes'
import { LAST_RECIPES, SALTY_RECIPES, SWEET_RECIPES } from '../../config/locations'

class Home extends React.Component {
  state = {
    refreshing: false
  }

  /**
   * Fetch the Home Recipes
   *
   * @returns {Promise}
   * @private
   */
  async _onRefresh () {
    const {getHomeRecipes} = this.props.actions

    this.setState({refreshing: true})
    try {
      await getHomeRecipes(7)
    } finally {
      this.setState({refreshing: false})
    }
  }

  render () {
    const {recipes, navigation} = this.props

    return (
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={() => this._onRefresh()}
        />
      }>
        <ScrollRecipes recipes={recipes[LAST_RECIPES]}
          recipesCategory={'Les dernières recettes'}
          navigation={navigation}
        />
        <ScrollRecipes recipes={recipes[SWEET_RECIPES]}
          recipesCategory={'Les recettes sucrées'}
          navigation={navigation}
        />
        <ScrollRecipes recipes={recipes[SALTY_RECIPES]}
          recipesCategory={'Les recettes salées'}
          navigation={navigation}
        />
      </ScrollView>
    )
  }
}

export default Home
