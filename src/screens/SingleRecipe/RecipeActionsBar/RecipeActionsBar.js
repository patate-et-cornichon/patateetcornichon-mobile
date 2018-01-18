import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import RecipeDate from '../../../components/Recipes/RecipeDate'
import styles from './styles'
import { fontColor } from '../../../config/styles'
import Favorite from './Favorite'

export default class RecipeActionsBar extends React.Component {
  state = {
    favorite: false
  }

  async componentWillMount () {
    const favorite = await this.props.isRecipeFavorite()
    this.setState({favorite})
  }

  /**
   * Set the recipe as favorite
   *
   * @private
   */
  _changeFavorite () {
    const {toast, setRecipeAsFavorite, removeRecipeAsFavorite} = this.props
    const {favorite} = this.state

    this.setState({
      favorite: !favorite
    })

    if (!favorite === true) {
      setRecipeAsFavorite()
      toast.show('success', 'Recette enregistrée !')
    } else {
      removeRecipeAsFavorite()
    }
  }

  render () {
    const {date, goToComments} = this.props
    const {favorite} = this.state

    return (
      <View style={styles.recipeActionsBarView}>
        {/* Recipe Date */}
        <RecipeDate date={date}
          dateColor={fontColor}
        />

        {/* Recipe Icons Action */}
        <View style={styles.recipeActionsBarIcons}>
          {/* Favorite */}
          <Favorite filled={favorite}
            changeFavorite={() => this._changeFavorite()}
          />

          {/* Comment */}
          <TouchableWithoutFeedback onPress={goToComments}>
            <MaterialCommunityIcons name='comment-outline'
              size={30}
              color={fontColor}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
};
