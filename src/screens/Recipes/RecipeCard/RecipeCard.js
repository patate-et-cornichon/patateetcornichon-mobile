import React from 'react'
import { View, Image } from 'react-native'
import { LinearGradient } from 'expo'
import { MaterialIcons } from '@expo/vector-icons'
import RecipeCardInfo from '../../../components/Recipes/RecipeCardInfo'
import Text from '../../../components/Text/Text'
import styles from './styles'
import minutesToHours from '../../../utils/minutesToHours'

const RecipeCard = ({recipe}) => (
  <View style={styles.recipeBorder}>
    <View style={styles.recipeCardView}>
      {/* Image with overlay */}
      <Image source={{uri: recipe.main_image.medium_size}} style={styles.recipeImage} />
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

      {/* Recipe Total Time */}
      <View style={styles.recipeTimerView}>
        <MaterialIcons
          name='timer'
          size={18}
          color='white'
        />
        <Text style={styles.recipeTimer}>
          {
            minutesToHours([recipe.preparation_time, recipe.cooking_time]).toUpperCase()
          }
        </Text>
      </View>
    </View>
  </View>
)

export default RecipeCard
