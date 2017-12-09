import { Dimensions, StyleSheet } from 'react-native'
import { defaultBorderColor, defaultFontStyle } from '../../config/styles'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  menuContainer: {
    height
  },
  contentView: {
    height,
    width
  },
  menuContentContainer: {
    paddingTop: 30,
    paddingHorizontal: 20
  },
  menuUserName: {
    fontSize: 20,
    fontFamily: 'roboto-bold'
  },
  menuUserEmail: {
    color: '#9f9f9f',
    fontSize: 16
  },
  menuUserAvatar: {
    marginBottom: 8
  },
  menuItemsList: {
    marginTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: defaultBorderColor,
    paddingVertical: 5
  },
  menuItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  menuItemText: {
    ...defaultFontStyle,
    fontSize: 20
  },
  menuItemIcon: {
    marginRight: 10,
    color: '#898989'
  },
  extraMenu: {
    marginTop: 30
  }
})

export default styles
