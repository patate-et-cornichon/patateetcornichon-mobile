import { StyleSheet } from 'react-native'
import { secondaryColor } from '../../../config/styles'

const styles = StyleSheet.create({
  categoriesText: {
    paddingTop: 15,
    paddingHorizontal: 15,
    color: '#ccc',
    letterSpacing: 3
  },
  categoriesView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 130
  },
  categoryItemView: {
    height: 100,
    width: 100,
    borderRadius: 5,
    shadowOpacity: 0.05,
    shadowColor: '#515151',
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryIcon: {
    color: secondaryColor,
    backgroundColor: 'transparent'
  },
  categoryItemName: {
    marginTop: 6,
    fontSize: 11,
    fontFamily: 'roboto-bold',
    color: secondaryColor,
    backgroundColor: 'transparent'
  }
})

export default styles
