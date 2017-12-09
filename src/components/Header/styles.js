import { Platform, StyleSheet } from 'react-native'
import { defaultBorderColor, fontColor, headerHeight } from '../../config/styles'

const styles = StyleSheet.create({
  headerView: {
    height: headerHeight,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  headerSide: {
    width: '20%',
    paddingHorizontal: 20
  },
  headerCenter: {
    width: '60%'
  },
  title: {
    color: fontColor,
    fontSize: 18,
    fontFamily: 'roboto-bold',
    textAlign: 'center'
  },
  headerIcon: {
    color: fontColor
  },
  userAvatar: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    borderColor: defaultBorderColor,
    borderWidth: StyleSheet.hairlineWidth
  }
})

export default styles
