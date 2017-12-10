import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as recipesActions from '../actions/recipesActions'
import * as commentsActions from '../actions/commentsActions'
import SingleRecipe from '../screens/SingleRecipe/SingleRecipe'
import Header from '../components/Header/Header'
import { RELATIVE_RECIPES } from '../config/locations'

class SingleRecipeContainer extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header title='Le manger'
        leftIcon={{
          name: 'arrow-back',
          onPress: () => navigation.goBack(navigation.state.params.screenKey)
        }}
      />
    )
  })

  render () {
    return (
      <SingleRecipe {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  isConnected: state.network,
  user: state.auth.user,
  comments: state.comments,
  relativeRecipes: state.recipes[RELATIVE_RECIPES],
  components: state.components
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...recipesActions,
    ...commentsActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipeContainer)
