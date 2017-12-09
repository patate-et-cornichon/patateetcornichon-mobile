import React from 'react'
import { Animated, TouchableWithoutFeedback, View } from 'react-native'
import FoodIcon from '../../../components/Icons/FoodIcon/FoodIcon'
import { fontColor, primaryColor } from '../../../config/styles'
import Text from '../../../components/Text/Text'
import styles from './styles'

const AnimatedFoodIcon = Animated.createAnimatedComponent(FoodIcon)

export default class SwipeButton extends React.Component {
  ANIMATION_DURATION = 200

  state = {
    bounceValue: new Animated.Value(1)
  }

  componentDidMount () {
    const {index} = this.props
    if (index === 0) {
      this.state.bounceValue.setValue(1.2)
    }
  }

  /**
   * When the component receive the activeIndex props,
   * we animate the Icon scale
   *
   * @param nextProps
   */
  componentWillReceiveProps (nextProps) {
    const {index, activeIndex} = nextProps
    if (index === activeIndex) {
      this._changeIconScale(1.2)
    } else {
      this._changeIconScale(1)
    }
  }

  /**
   * Animate the Icon to the scale Value
   *
   * @param value
   * @private
   */
  _changeIconScale (value) {
    Animated.timing(
      this.state.bounceValue,
      {
        toValue: value,
        duration: this.ANIMATION_DURATION
      }
    ).start()
  }

  render () {
    const {index, activeIndex, title, iconName, onPress} = this.props
    const {bounceValue} = this.state
    const color = index === activeIndex ? primaryColor : fontColor

    return (
      <View>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.buttonView}>
            {/* Icon */}
            <AnimatedFoodIcon name={iconName}
              size={45}
              style={{
                transform: [
                                  {scale: bounceValue}
                ]
              }}
              color={color}
            />

            {/* Title */}
            <Text style={[styles.buttonTitle, {color}]}>
              {title.toUpperCase()}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
