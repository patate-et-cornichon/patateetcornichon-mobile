import React from 'react'
import { connect } from 'react-redux'
import MainHeader from '../containers/MainHeader'
import { MaterialTabBarIcon } from '../components/Icons/TabBarIcon/TabBarIcon'
import Favorites from '../screens/Favorites/Favorites'
import { FAVORITE_RECIPES } from '../config/locations'

class FavoritesContainer extends React.Component {
  static navigationOptions = {
    header: (
      <MainHeader title='Mes favoris' />
    ),
    tabBarIcon: ({focused, tintColor}) => <MaterialTabBarIcon name='turned-in-not'
      tintColor={tintColor}
      focused={focused} />
  }

  render () {
    return (
      <Favorites {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  favoriteRecipes: state.recipes[FAVORITE_RECIPES]
})

const mapDispatchToProps = dispatch => ({
  //
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)
