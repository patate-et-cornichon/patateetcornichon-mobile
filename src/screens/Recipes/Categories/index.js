import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import CategoryItem from './CategoryItem'
import shortid from 'shortid'
import Text from '../../../components/Text/Text'

const Categories = ({categories, activeCategory, changeCategory}) => (
  <View>
    <Text style={styles.categoriesText}>
      {'Montre-moi'.toUpperCase()}
    </Text>
    <FlatList
      data={categories}
      contentContainerStyle={styles.categoriesView}
      keyExtractor={() => shortid.generate()}
      renderItem={({item}) => (
        <CategoryItem
          category={item}
          changeCategory={(category) => changeCategory(category)}
          active={activeCategory === item.slug}
        />
      )}
    />
  </View>
)

export default Categories
