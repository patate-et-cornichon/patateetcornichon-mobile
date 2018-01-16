import React from 'react'
import { connect } from 'react-redux'
import MainHeader from '../containers/MainHeader'
import { MaterialTabBarIcon } from '../components/Icons/TabBarIcon/TabBarIcon'
import Shop from '../screens/Shop/Shop'

class ShopContainer extends React.Component {
  static navigationOptions = {
    header: (
      <MainHeader title={'Kesk\'on mange ?'} />
    ),
    tabBarIcon: ({focused, tintColor}) => <MaterialTabBarIcon name='shopping-basket'
      tintColor={tintColor}
      focused={focused}
    />
  }

  render () {
    return (
      <Shop {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  //
})

const mapDispatchToProps = dispatch => ({
  //
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer)
