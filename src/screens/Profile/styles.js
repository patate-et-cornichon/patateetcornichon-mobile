import { Dimensions, StyleSheet } from 'react-native'

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
  profileView: {
    alignItems: 'center',
    backgroundColor: 'white'
  },
  keyboardView: {
    width,
    paddingHorizontal: 15
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 30
  },
  profileAvatarView: {
    alignItems: 'center'
  },
  profileInput: {
    marginBottom: 15
  }
})

export default styles
