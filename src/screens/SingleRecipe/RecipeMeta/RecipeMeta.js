import React from 'react'
import { View } from 'react-native'
import RecipesUtils from '../../../utils/recipes'
import Meta from './Meta'
import styles from './styles'

const RecipeMeta = props => {
  const {
    recipeYield,
    difficulty,
    preparationTime,
    cookingTime,
    leaveningTime,
    fridgeTime
  } = props

  return (
    <View style={styles.recipeMetaView}>
      {/* Yield */}
      <Meta name='Pour'
        data={recipeYield}
        icon='yield'
      />

      {/* Difficulty */}
      <Meta name='Difficulté'
        data={RecipesUtils.getDifficulty(difficulty)}
        icon='difficulty'
      />

      {/* Preparation */}
      <Meta name='Préparation'
        data={RecipesUtils.minutesToHours(preparationTime)}
        icon='preparation'
      />

      {/* Cooking Time */}
      {
        cookingTime &&
        <Meta name='Cuisson'
          data={RecipesUtils.minutesToHours(cookingTime)}
          icon='cooking'
        />
      }

      {/* Leavening time */}
      {
        leaveningTime &&
        <Meta name='Pose'
          data={RecipesUtils.minutesToHours(leaveningTime)}
          icon='leavening'
        />
      }

      {/* Fridge time */}
      {
        fridgeTime &&
        <Meta name='Frigo'
          data={RecipesUtils.minutesToHours(fridgeTime)}
          icon='fridge'
        />
      }
    </View>
  )
}

export default RecipeMeta
