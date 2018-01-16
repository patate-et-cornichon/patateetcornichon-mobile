import { StyleSheet } from 'react-native'
import { fontColor, placeholderColor } from '../../../../config/styles'

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: placeholderColor,
    paddingVertical: 15
  },
  searchInput: {
    paddingLeft: 10,
    flex: 1,
    fontFamily: 'roboto',
    color: fontColor,
    fontSize: 18
  }
})

export default styles
