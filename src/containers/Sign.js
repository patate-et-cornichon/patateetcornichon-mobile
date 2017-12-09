import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../actions/authActions'
import Sign from '../screens/Login/Sign/Sign'
import Header from '../components/Header/Header'

class SignContainer extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {target} = navigation.state.params
    const title = target === 'create' ? 'Créer un compte' : 'S\'identifier'

    return ({
      header: (
        <Header title={title}
                leftIcon={{
                  name: 'arrow-back',
                  onPress: () => navigation.goBack()
                }}
        />
      )
    })
  }

  render () {
    return (
      <Sign {...this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  isConnected: state.network,
  components: state.components
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignContainer)