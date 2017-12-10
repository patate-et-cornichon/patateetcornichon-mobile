import React from 'react'
import {View, Dimensions} from 'react-native'
import Text from '../../../components/Text/Text'
import styles from './styles'

const SubCategories = ({subCategories}) => {
  const {width} = Dimensions.get('window')
  const itemWidth = width / subCategories.length

  return (
    <View style={styles.subCategoriesView}>
      {
        subCategories.length > 0 &&
        subCategories.map(category => (
          <View style={[styles.subCategoryItemView, {width: itemWidth}]}>
            <Text style={styles.subCategoryName}>
              {category.name.toUpperCase()}
            </Text>
          </View>
        ))
      }
    </View>
  )
}

export default SubCategories
