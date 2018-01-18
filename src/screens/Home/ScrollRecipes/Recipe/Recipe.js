import React from 'react'
import { Image, TouchableWithoutFeedback, View } from 'react-native'
import { LinearGradient } from 'expo'
import styles from './styles'
import RecipeCardInfo from '../../../../components/Recipes/RecipeCardInfo'

const Recipe = ({recipe, lastItem, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.recipeCard, !lastItem ? styles.recipeLastItem : null]}>
      {/* Recipe Image with Overlay */}
      <Image
        style={styles.recipeImage}
        source={{uri: recipe.main_image}}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        start={[1, 1]}
        end={[1, 0]}
        style={styles.recipeOverlay}
      />

      {/* Recipe Card Info */}
      <RecipeCardInfo
        title={recipe.title}
        subTitle={recipe.sub_title}
        createdAt={recipe.created_at}
      />
    </View>
  </TouchableWithoutFeedback>
)

export default Recipe
