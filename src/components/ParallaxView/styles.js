import { Dimensions, StyleSheet } from 'react-native'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    borderColor: 'transparent'
  },
  scrollView: {
    backgroundColor: 'transparent'
  },
  background: {
    position: 'absolute',
    backgroundColor: '#2e2f31',
    width: screen.width,
    resizeMode: 'cover'
  },
  content: {
    backgroundColor: '#fff'
  }
})

export default styles
