import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  recipeCard: {
    width: 300,
    height: 225,
    borderRadius: 10,
    overflow: 'hidden'
  },
  recipeLastItem: {
    marginRight: 15
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4
  },
  recipeOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    borderRadius: 4
  },
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
