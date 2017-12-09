import React from 'react'
import { View } from 'react-native'
import Text from '../../../components/Text/Text'
import RecipeIcon from '../../../components/Icons/RecipeIcon/RecipeIcon'
import { fontColor } from '../../../config/styles'
import styles from './styles'

const Meta = ({name, data, icon}) => (
  <View style={styles.metaView}>
    <RecipeIcon name={icon} size={20} color={fontColor} />
    <Text style={styles.metaText}>{name} : {data}</Text>
  </View>
)

export default Meta
