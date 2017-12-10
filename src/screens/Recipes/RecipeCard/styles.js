import {StyleSheet} from 'react-native'
import { defaultBackground } from '../../../config/styles'

const borderRadius = 15

const styles = StyleSheet.create({
  recipeBorder: {
    shadowOpacity: 0.30,
    shadowColor: '#515151',
    shadowOffset: { height: 2, width: 5 },
    borderRadius,
    marginBottom: 20
  },
  recipeCardView: {
    borderRadius,
    overflow: 'hidden'
  },
  recipeImage: {
    height: 250
  },
  recipeInfoView: {
    height: 50,
    backgroundColor: defaultBackground
  }
})

export default styles
