import React from 'react'
import { Text as RNText } from 'react-native'
import styles from './styles'

const Text = ({children, style, ...props}) => (
  <RNText style={[styles.text, style]} {...props}>{children}</RNText>
)

export default Text
