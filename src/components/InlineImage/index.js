import React from 'react'
import { Image, PixelRatio, Platform, StyleSheet } from 'react-native'

const InlineImage = props => {
  let style = props.style
  if (style && Platform.OS !== 'ios') {
    style = Object.assign({}, StyleSheet.flatten(props.style));
    ['width', 'height'].forEach(propName => {
      if (style[propName]) {
        style[propName] *= PixelRatio.get()
      }
    })
  }

  return (
    <Image
      {...props}
      style={style}
    />
  )
}

export default InlineImage
