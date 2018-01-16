import React from 'react'
import { View } from 'react-native'
import Search from './Search/Search'
import styles from './styles'
import Filters from './Filters'

const Header = (props) => (
  <View style={styles.headerView}>
    <Search />
    <Filters />

    {/* <SubCategories
      subCategories={subCategories}
    />
      */}
  </View>
)

export default Header
