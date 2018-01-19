import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import FoodIcon from '../../../components/Icons/FoodIcon/FoodIcon'
import styles from './styles'
import { secondaryColor } from '../../../config/styles'
import Text from '../../../components/Text/Text'

const CategoryItem = ({category, active, changeCategory}) => (
  <TouchableWithoutFeedback onPress={() => changeCategory(category)}>
    <View style={[
      styles.categoryItemView,
      {
        shadowOpacity: active ? 0.2 : 0.05,
        elevation: active ? 1.5 : 0.5,
        backgroundColor: active ? secondaryColor : 'white'
      }
    ]}>
      {/* Icon */}
      <FoodIcon
        name={category.css_class}
        size={45}
        style={[
          styles.categoryIcon,
          {
            color: active ? 'white' : secondaryColor
          }
        ]}
      />
      <Text style={[
        styles.categoryItemName,
        {
          color: active ? 'white' : secondaryColor
        }
      ]}>
        {category.name.toUpperCase()}
      </Text>
    </View>
  </TouchableWithoutFeedback>
)

export default CategoryItem
