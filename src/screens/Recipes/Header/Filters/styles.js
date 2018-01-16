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
  filtersCount: {
    width: 22,
    height: 22,
    lineHeight: 22,
    borderRadius: 11,
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: 14,
    backgroundColor: secondaryColor,
    color: 'white',
    fontFamily: 'roboto-bold',
    marginRight: 7
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
