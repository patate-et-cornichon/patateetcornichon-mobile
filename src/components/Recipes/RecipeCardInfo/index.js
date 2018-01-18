import React from 'react'
import {View} from 'react-native'
import styles from './styles'
import Text from '../../Text/Text'
import RecipeDate from '../RecipeDate'

const RecipeCardInfo = ({title, subTitle, createdAt, style = null}) => (
  <View style={[styles.recipeTitlesView, style]}>
    {/* Recipe Titles */}
    <Text style={[styles.recipeTitles, styles.recipeMainTitle]}>
      {title.toUpperCase()}
    </Text>
    <Text style={[styles.recipeTitles, styles.recipeSubTitle]}>
      {subTitle.toUpperCase()}
    </Text>

    {/* Recipe date */}
    <RecipeDate date={createdAt} />
  </View>
)

export default RecipeCardInfo
