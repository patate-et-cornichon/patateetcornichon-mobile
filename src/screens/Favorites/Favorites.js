import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './styles'
import FavoriteRecipe from './FavoriteRecipe'
import Text from '../../components/Text/Text'
import { fontColor } from '../../config/styles'

export default class Favorites extends React.Component {
  render () {
    const {favoriteRecipes, navigation} = this.props

    if (favoriteRecipes.length > 0) {
      return (
        <ScrollView style={styles.favoriteView}>
          <FlatList
            data={favoriteRecipes}
            contentContainerStyle={styles.flatList}
            renderItem={({item}) => (
              <FavoriteRecipe recipe={item}
                navigation={navigation}
              />
            )}
            keyExtractor={item => item.id}
          />

        </ScrollView>
      )
    } else {
      return (
        <View style={styles.noFavoriteView}>
          <View style={styles.noFavoriteIconView}>
            <MaterialIcons name='turned-in-not'
              style={styles.noFavoriteIcon}
              color={fontColor}
              size={60}
            />
          </View>
          <Text style={styles.noFavoriteText}>
            Tes recettes en favori sont enregistrées sur ton appareil, ce qui
            te permet de les consulter hors-ligne. Pratique ;-)
          </Text>
        </View>
      )
    }
  }
}
