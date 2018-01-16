import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    paddingHorizontal: 15
  }
})

export default styles
