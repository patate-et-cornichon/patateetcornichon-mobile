import React from 'react'
import { View, Animated, TouchableWithoutFeedback } from 'react-native'
import FoodIcon from '../../../components/Icons/FoodIcon/FoodIcon'
import styles from './styles'
import { primaryColor } from '../../../config/styles'

const AnimatedFoodIcon = Animated.createAnimatedComponent(FoodIcon)

export default class CategoryItem extends React.Component {
  state = {
    itemAnim: new Animated.Value(0)
  }

  componentWillReceiveProps (nextProps) {
    const {active: wasActive} = this.props
    const {active: nowActive} = nextProps

    if (nowActive && !wasActive) {
      this._animateCategory(1)
    } else if (!nowActive && wasActive) {
      this._animateCategory(0)
    }
  }

  _animateCategory (value) {
    Animated.timing(
      this.state.itemAnim,
      {
        toValue: value,
        duration: 300
      }
    ).start()
  }

  render () {
    const {category, changeCategory} = this.props
    const {itemAnim} = this.state

    const categoryColor = itemAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['#f9edba', 'white']
    })

    const scale = itemAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.1]
    })

    return (
      <TouchableWithoutFeedback onPress={() => changeCategory(category)}>
        <View style={styles.categoryItemView}>
          {/* Icon */}
          <Animated.View style={[
            styles.categoryItemIconView,
            {
              backgroundColor: categoryColor,
              transform: [{scale}]
            }
          ]}>
            <AnimatedFoodIcon
              name={category.css_class}
              size={45}
              color={primaryColor}
            />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
