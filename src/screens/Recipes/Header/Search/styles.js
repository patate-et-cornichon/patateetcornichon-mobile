import { Platform, StyleSheet } from 'react-native'
import { fontColor, headerHeight } from '../../../../config/styles'

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: headerHeight,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'white'
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
