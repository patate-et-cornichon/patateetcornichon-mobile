import { StyleSheet } from 'react-native'
import { placeholderColor, secondaryColor } from '../../../../config/styles'

const styles = StyleSheet.create({
  filtersView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20
  },
  filtersLengthView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    marginRight: 20,
    paddingVertical: 10,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: placeholderColor
  },
  filtersCountView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
    borderRadius: 11,
    overflow: 'hidden',
    backgroundColor: secondaryColor,
    marginRight: 7
  },
  filtersCount: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'roboto-bold'
  },
  filtersName: {
    letterSpacing: 2,
    fontSize: 13
  },
  filtersListView: {
    flexDirection: 'row'
  },
  filtersText: {
    color: placeholderColor,
    marginRight: 12,
    fontSize: 16
  }
})

export default styles
