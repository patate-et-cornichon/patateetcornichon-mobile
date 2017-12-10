import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import CategoryItem from './CategoryItem'

const Categories = ({categories, activeCategory, changeCategory}) => (
  <View style={styles.categoriesView}>
    {
      categories.map(category => (
        <CategoryItem
          category={category}
          changeCategory={(category) => changeCategory(category)}
          active={activeCategory === category.slug}
        />
      ))
    }
  </View>
)

export default Categories
