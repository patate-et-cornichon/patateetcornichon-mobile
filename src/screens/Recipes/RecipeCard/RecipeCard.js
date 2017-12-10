import React from 'react'
import {View, Image} from 'react-native'
import Text from '../../../components/Text/Text'
import styles from './styles'

const RecipeCard = ({recipe}) => (
  <View style={styles.recipeBorder}>
    <View style={styles.recipeCardView}>
      <Image source={{uri: recipe.main_image.medium_size}} style={styles.recipeImage} />
      <View style={styles.recipeInfoView}>
        <Text>{recipe.title}</Text>
      </View>
    </View>
  </View>
)

export default RecipeCard
