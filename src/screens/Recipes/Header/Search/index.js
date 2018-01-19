import React from 'react'
import {View, TextInput} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { fontColor, placeholderColor } from '../../../../config/styles'
import styles from './styles'

export default class Search extends React.Component {
  state = {
    text: ''
  }

  render () {
    return (
      <View style={styles.searchView}>
        <MaterialIcons
          name='search'
          size={32}
          color={fontColor}
        />
        <TextInput
          style={styles.searchInput}
          keyboardAppearance='dark'
          placeholder="Qu'est-ce qu'on mange ?"
          underlineColorAndroid='transparent'
          placeholderTextColor={placeholderColor}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    )
  }
}
