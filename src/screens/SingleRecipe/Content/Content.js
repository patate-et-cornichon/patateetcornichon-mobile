import React from 'react'
import { View } from 'react-native'

export default class Content extends React.Component {
  onLayout ({nativeEvent}) {
    const {height} = nativeEvent.layout
    this.props.changeHeight(height)
  }

  render () {
    const {children} = this.props
    return (
      <View onLayout={(e) => this.onLayout(e)}>
        {children}
      </View>
    )
  }
}
