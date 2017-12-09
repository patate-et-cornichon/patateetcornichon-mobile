import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import { MaterialIcons } from '@expo/vector-icons'
import * as commentsActions from '../actions/commentsActions'
import CommentAction from '../screens/SingleRecipe/Comments/CommentAction/CommentAction'

class CommentActionContainer extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header title='Le petit mot'
              leftIcon={{
                name: 'arrow-back',
                onPress: () => navigation.goBack()
              }}
              rightIcon={{
                name: 'send',
                disabled: navigation.state.params.saveDisabled,
                onPress: () => navigation.state.params.handleSave()
              }}
      />
    )
  })

  render () {
    return (
      <CommentAction {...this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isConnected: state.network
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...commentsActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentActionContainer)