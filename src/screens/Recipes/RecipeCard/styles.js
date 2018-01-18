import {StyleSheet} from 'react-native'
import { primaryColor } from '../../../config/styles'

const borderRadius = 5

const styles = StyleSheet.create({
  recipeBorder: {
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowColor: '#515151',
    shadowOffset: { height: 5, width: 5 },
    borderRadius,
    marginBottom: 20
  },
  recipeOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    borderRadius
  },
  recipeCardView: {
    borderRadius,
    overflow: 'hidden'
  },
  recipeImage: {
    height: 250
  },
  recipeTimerView: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    padding: 3,
    margin: 10,
    borderRadius: 3,
    backgroundColor: primaryColor
  },
  recipeTimer: {
    paddingLeft: 3,
    fontSize: 14,
    fontFamily: 'roboto-bold',
    color: 'white'
  }
})

export default styles
