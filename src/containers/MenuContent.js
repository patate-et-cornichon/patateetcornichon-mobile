import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../actions/authActions'
import * as profileActions from '../actions/profileActions'
import MenuContent from '../components/Menu/MenuContent'

class MenuContentContainer extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <MenuContent {...this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  components: state.components
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...authActions,
    ...profileActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuContentContainer)