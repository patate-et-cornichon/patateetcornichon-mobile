import { StyleSheet } from 'react-native'

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
    shadowColor: '#515151',
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryIcon: {
    backgroundColor: 'transparent'
  },
  categoryItemName: {
    marginTop: 6,
    fontSize: 11,
    fontFamily: 'roboto-bold',
    backgroundColor: 'transparent'
  }
})

export default styles
