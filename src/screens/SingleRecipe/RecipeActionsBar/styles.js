import { StyleSheet } from 'react-native'
import { defaultBackground } from '../../../config/styles'

const styles = StyleSheet.create({
  recipeActionsBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginHorizontal: -15,
    paddingHorizontal: 15,
    backgroundColor: defaultBackground
  },
  recipeActionsBarIcons: {
    flexDirection: 'row'
  },
  favoriteStyle: {
    marginRight: 10
  }
})

export default styles
