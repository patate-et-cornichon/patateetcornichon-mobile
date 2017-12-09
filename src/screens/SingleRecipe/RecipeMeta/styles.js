import { StyleSheet } from 'react-native'
import { fontColor } from '../../../config/styles'

const styles = StyleSheet.create({
  recipeMetaView: {
    opacity: 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  metaView: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    paddingVertical: 8
  },
  metaText: {
    color: fontColor, marginLeft: 5
  }
})

export default styles
