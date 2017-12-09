import { Dimensions, StyleSheet } from 'react-native'
import { defaultBackground } from '../../../config/styles'

const buttonsSize = (Dimensions.get('window').width - 45) / 3

const styles = StyleSheet.create({
  controlView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 25,
    alignItems: 'center'
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: buttonsSize,
    width: buttonsSize,
    backgroundColor: defaultBackground,
    borderRadius: 15
  },
  buttonTitle: {
    marginTop: 8,
    fontSize: 10,
    fontFamily: 'roboto-bold'
  }
})

export default styles
