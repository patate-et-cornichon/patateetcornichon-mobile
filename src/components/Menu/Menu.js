import React from 'react'
import { Animated, Dimensions, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import styles from './styles'
import MenuContent from '../../containers/MenuContent'

const {width} = Dimensions.get('window')
const menuWidth = width * 70 / 100

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

export default class Menu extends React.Component {
  state = {
    menuOpened: false,
    menuWidth: 0,
    opacity: new Animated.Value(0)
  }

  open () {
    this._scrollView._component.scrollTo({x: 0})
  }

  close (animated = true) {
    this._scrollView._component.scrollTo({x: menuWidth, animated})
  }

  /**
   * Scroll To Main View and animate the ScrollView with a fade in
   *
   * @private
   */
  _initScrollView () {
    const {opacity} = this.state

    this.setState({menuWidth}, () => {
      this._scrollView._component.scrollTo({x: menuWidth, animated: false})
      Animated.timing(
        opacity,
        {
          toValue: 1,
          duration: 600
        }
      ).start()
    })
  }

  /**
   * Determine if menu is open or not
   *
   * @param x
   * @private
   */
  _handleScroll ({nativeEvent: {contentOffset: {x}}}) {
    this.setState({menuOpened: Math.round(x) !== Math.round(menuWidth)})
  }

  render () {
    const {menuOpened, menuWidth: width, opacity} = this.state
    const {navigation} = this.props

    return (
      <AnimatedScrollView
        horizontal
        style={{opacity}}
        pagingEnabled
        scrollEnabled={menuOpened}
        ref={c => (this._scrollView = c)}
        showsHorizontalScrollIndicator={false}
        onScroll={this._handleScroll.bind(this)}
        scrollEventThrottle={0}
        bounces={false}
      >
        {/* Menu */}
        <View style={[styles.menuContainer, {width}]}
          onLayout={() => this._initScrollView()}
        >
          <MenuContent navigation={navigation} />
        </View>

        {/* Main View */}
        <View style={styles.contentView}>
          {this.props.children}
          {
            menuOpened &&
            <TouchableWithoutFeedback onPress={this.close.bind(this)}>
              <View style={StyleSheet.absoluteFill} />
            </TouchableWithoutFeedback>
          }
        </View>
      </AnimatedScrollView>
    )
  }
}
