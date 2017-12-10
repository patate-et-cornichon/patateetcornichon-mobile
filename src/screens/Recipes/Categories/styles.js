import { StyleSheet, Platform } from 'react-native'
import { primaryColor } from '../../../config/styles'

const styles = StyleSheet.create({
  categoriesView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
    paddingHorizontal: 50,
    backgroundColor: primaryColor,
    height: 120
  },
  categoryItemView: {
    alignItems: 'center'
  },
  categoryItemIconView: {
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
