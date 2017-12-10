import React from 'react'
import { NetInfo, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { AppLoading, Asset, Font } from 'expo'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Menu from '../components/Menu/Menu'
import Toast from '../components/Toast/Toast'
import AppNavigator from '../navigation'
import * as networkActions from '../actions/networkActions'
import * as componentsActions from '../actions/componentsActions'

const videoSource = require('../assets/videos/sign-background.mp4')
const logoSource = require('../assets/images/logo.png')

class Navigation extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentWillMount () {
    const {actions: {setNetworkConnection}, auth: {isLogged}} = this.props

    /**
     * Set Network Connection
     */
    NetInfo.isConnected.fetch().done(setNetworkConnection)
    NetInfo.isConnected.addEventListener('connectionChange', setNetworkConnection)

    /**
     * Load Fonts
     */
    await Font.loadAsync({
      'roboto': require('../assets/fonts/Roboto.ttf'),
      'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
      'amatic': require('../assets/fonts/Amatic.ttf'),
      'pacifico': require('../assets/fonts/Pacifico.ttf'),
      'junk-food': require('../assets/fonts/Junk-food.ttf'),
      'recipe-icons': require('../assets/fonts/Recipe-icons.ttf')
    })
    await Font.loadAsync(MaterialIcons.font)
    await Font.loadAsync(MaterialCommunityIcons.font)

    if (!isLogged) {
      await Asset.fromModule(videoSource).downloadAsync()
      await Asset.fromModule(logoSource).downloadAsync()
    }

    this.setState({fontLoaded: true})
  }

  componentWillUnmount () {
    const {setNetworkConnection} = this.props.actions
    NetInfo.isConnected.removeEventListener('connectionChange', setNetworkConnection)
  }

  _addComponent (component) {
    const {addComponent} = this.props.actions
    addComponent(component)
  }

  render () {
    const {fontLoaded} = this.state
    const {dispatch, nav, auth: {logProcessFinished}, homeRecipesLoaded} = this.props

    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    })

    if (!logProcessFinished || !fontLoaded || !homeRecipesLoaded) {
      return <AppLoading />
    }

    return (
      <View style={{flex: 1}}>
        <Menu
          ref={c => this._addComponent({
            name: 'menu',
            ref: c
          })}
          navigation={navigation}
        >
          {/* React Navigation */}
          <AppNavigator
            navigation={navigation}
          />
        </Menu>

        {/* Toast */}
        <Toast ref={c => this._addComponent({
          name: 'toast',
          ref: c
        })}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  auth: state.auth,
  homeRecipesLoaded: state.recipes.homeRecipesLoaded,
  isConnected: state.network
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...componentsActions,
    ...networkActions
  }, dispatch),
  dispatch
})

const AppWithNavigationState = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default AppWithNavigationState
