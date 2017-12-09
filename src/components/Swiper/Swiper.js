import React from 'react'
import { Dimensions, ScrollView, View } from 'react-native'

const {width: deviceWidth} = Dimensions.get('window')
const width = deviceWidth - 30

export default class Swiper extends React.Component {
  state = {
    index: 0
  }

  _renderChildren () {
    const {children} = this.props

    return children.map((child, i) => (
      <View key={i}
        style={{width}}
      >
        {child}
      </View>
    ))
  }

  scrollTo (index) {
    const x = index * width
    this._swiper.scrollTo({x, animated: true})
  }

  _handleScroll (e) {
    const {onMomentumScrollEnd} = this.props
    const {x: contentOffsetX} = e.nativeEvent.contentOffset

    if (contentOffsetX % width === 0) {
      const currentIndex = contentOffsetX / width
      onMomentumScrollEnd(currentIndex)
    }
  }

  render () {
    const {scrollEnabled} = this.props
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollEnabled ? this._handleScroll.bind(this) : null}
        scrollEventThrottle={0}
        ref={c => (this._swiper = c)}
        {...this.props}
      >
        {this._renderChildren()}
      </ScrollView>
    )
  }
}
