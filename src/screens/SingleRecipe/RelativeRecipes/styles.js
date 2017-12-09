import { StyleSheet } from 'react-native'
import { defaultBackground } from '../../../config/styles'

const styles = StyleSheet.create({
  relativeRecipesView: {
    backgroundColor: defaultBackground
  },
  relativeRecipesScroll: {
    paddingTop: 15,
    paddingBottom: 15
  },
  relativeRecipesText: {
    fontSize: 17,
    padding: 15,
    color: '#ccc'
  }
})

export default styles
