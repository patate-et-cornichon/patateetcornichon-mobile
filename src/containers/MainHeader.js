import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'

const MainHeaderContainer = ({title, user, components: {menu}}) => (
  <Header title={title}
          enableUser={user}
          menu={menu}
  />
)

const mapStateToProps = state => ({
  user: state.auth.user,
  components: state.components
})

const mapDispatchToProps = dispatch => ({
  //
})

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer)