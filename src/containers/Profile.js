import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as profileActions from '../actions/profileActions'
import Profile from '../screens/Profile/Profile'
import Header from '../components/Header/Header'

class ProfileContainer extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header title='Mon profil'
        leftIcon={{
          name: 'arrow-back',
          onPress: () => navigation.goBack()
        }}
      />
    )
  })

  render () {
    return (
      <Profile {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...profileActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
