import React from 'react'
import { Animated, Text, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import styles from './styles'
import { errorColor, pendingColor, successColor } from '../../config/styles'

export default class Toast extends React.Component {
  toastHeight = 50
  state = {
    animatedValue: new Animated.Value(-this.toastHeight)
  }
  duration = 5000

  show (status = 'success', text = '') {
    this.setState({status, text})

    this._showToast()
    this.animation = setTimeout(() => this._closeToast(), this.duration)
  }

  _showToast () {
    Animated.timing(
      this.state.animatedValue,
      {
        toValue: 0,
        duration: 300
      }
    ).start()
  }

  _closeToast () {
    clearTimeout(this.animation)
    Animated.timing(
      this.state.animatedValue,
      {
        toValue: -this.toastHeight,
        duration: 300
      }
    ).start()
  }

  render () {
    const {
      animatedValue,
      status,
      text
    } = this.state

    let backgroundColor
    if (status === 'success') backgroundColor = successColor
    else if (status === 'pending') backgroundColor = pendingColor
    else backgroundColor = errorColor

    return (
      <Animated.View style={[
        styles.toastView,
        {
          height: this.toastHeight,
          bottom: animatedValue,
          backgroundColor
        }
      ]}>
        <TouchableWithoutFeedback onPress={() => this._closeToast()}>
          <View style={styles.toastContainer}>
            {/* Text */}
            <Text style={styles.text}>{text}</Text>

            {/* Icon */}
            {status === 'success' &&
            <MaterialIcons name='done' size={25} color='white' />
            }
            {status === 'pending' &&
            <MaterialIcons name='hourglass-empty' size={25} color='white' />
            }
            {status === 'error' &&
            <MaterialCommunityIcons name='close-circle-outline' size={25} color='white' />
            }
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  }
}
