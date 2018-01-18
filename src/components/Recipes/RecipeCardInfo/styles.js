import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  recipeTitlesView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 10,
    backgroundColor: 'transparent'
  },
  recipeTitles: {
    color: 'white',
    fontFamily: 'roboto-bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {
      width: -1,
      height: 1
    },
    textShadowRadius: 20
  },
  recipeMainTitle: {
    fontSize: 30
  },
  recipeSubTitle: {
    fontSize: 20
  }
})

export default styles
