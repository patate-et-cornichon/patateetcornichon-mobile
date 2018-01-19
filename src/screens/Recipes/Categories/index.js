import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import CategoryItem from './CategoryItem'
import Text from '../../../components/Text/Text'

const Categories = ({categories, activeCategory, changeCategory}) => (
  <View>
    <Text style={styles.categoriesText}>
      {'Montre-moi'.toUpperCase()}
    </Text>

    {/* All Categories */}
    <View style={styles.categoriesView}>
      {
      categories.map(item => (
        <CategoryItem
          key={item.slug}
          category={item}
          changeCategory={(category) => changeCategory(category)}
          active={activeCategory === item.slug}
        />
      ))
    }
    </View>
  </View>
)

export default Categories
