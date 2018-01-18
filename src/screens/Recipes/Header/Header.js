import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Filters from './Filters'

const Header = (props) => (
  <View style={styles.headerView}>
    <Filters />
    {/* <SubCategories
      subCategories={subCategories}
    />
      */}
  </View>
)

export default Header
