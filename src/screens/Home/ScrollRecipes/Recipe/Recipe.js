import React from 'react'
import { Image, TouchableWithoutFeedback, View } from 'react-native'
import { LinearGradient } from 'expo'
import Text from '../../../../components/Text/Text'
import styles from './styles'
import RecipeDate from '../../../SingleRecipe/RecipeActionsBar/RecipeDate/RecipeDate'

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

      {/* Recipe info */}
      <View style={styles.recipeTitlesView}>
        <Text style={[styles.recipeTitles, styles.recipeMainTitle]}>
          {recipe.title.toUpperCase()}
        </Text>
        <Text style={[styles.recipeTitles, styles.recipeSubTitle]}>
          {recipe.sub_title.toUpperCase()}
        </Text>

        {/* Recipe date */}
        <RecipeDate date={recipe.created_at} />
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export default Recipe
