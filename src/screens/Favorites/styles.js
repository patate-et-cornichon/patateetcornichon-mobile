import { Dimensions, StyleSheet } from 'react-native'
import { defaultFontStyle, fontColor } from '../../config/styles'

const {width} = Dimensions.get('window')
const imageSize = width / 2

const styles = StyleSheet.create({
  favoriteView: {
    flex: 1,
    backgroundColor: 'white'
  },
  flatList: {
    flexDirection: 'column'
  },
  recipeImage: {
    width: imageSize,
    height: imageSize
  },
  noFavoriteView: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noFavoriteIconView: {
    borderColor: fontColor,
    borderWidth: 4,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  noFavoriteText: {
    ...defaultFontStyle,
    textAlign: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20
  }
})

export default styles
