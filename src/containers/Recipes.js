import React from 'react'
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityTabBarIcon } from '../components/Icons/TabBarIcon/TabBarIcon'
import Recipes from '../screens/Recipes/Recipes'

class RecipesContainer extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({focused, tintColor}) => <MaterialCommunityTabBarIcon name='hamburger'
                                                                       tintColor={tintColor}
                                                                       focused={focused}
    />
  }

  render () {
    return <Recipes {...this.props}/>
  }
}

const mapStateToProps = state => ({
  //
})

const mapDispatchToProps = dispatch => ({
  //
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)