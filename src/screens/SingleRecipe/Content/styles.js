import { Dimensions, StyleSheet } from 'react-native'
import { defaultFontStyle, primaryColor } from '../../../config/styles'

const swiperIngredientsWidth = Dimensions.get('window').width - 62
const swiperStepsWidth = Dimensions.get('window').width - 92

const styles = StyleSheet.create({
  bullet: {
    backgroundColor: primaryColor,
    marginRight: 12,
    marginVertical: 10,
    height: 8,
    width: 8
  },
  listIndex: {
    backgroundColor: '#DDDDDD',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  listIndexText: {
    fontFamily: 'amatic',
    fontSize: 25
  },
  listView: {
    flexDirection: 'row',
    marginBottom: 10
  },
  listItemIntroduction: {
    ...defaultFontStyle
  },
  listItemStep: {
    ...defaultFontStyle,
    width: swiperStepsWidth
  },
  listItemIngredient: {
    ...defaultFontStyle,
    width: swiperIngredientsWidth
  }
})

export default styles
