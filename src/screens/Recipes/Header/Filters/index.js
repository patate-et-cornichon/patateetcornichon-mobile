import React from 'react'
import {View, ScrollView} from 'react-native'
import shortid from 'shortid'
import Text from '../../../../components/Text/Text'
import styles from './styles'

const FILTERS = [
  'Pâtisseries',
  'Tomates',
  'Légumes',
  'Eté',
  'Pommes de terre',
  'Soirée'
]

const Filters = (props) => (
  <View style={styles.filtersView}>
    {/* Filters Length */}
    <View style={styles.filtersLengthView}>
      <View style={styles.filtersCountView}>
        <Text style={styles.filtersCount}>
          0
        </Text>
      </View>
      <Text style={styles.filtersName}>
        TAGS
      </Text>
    </View>

    {/* Filters List */}
    <ScrollView
      contentContainerStyle={styles.filtersListView}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {
        FILTERS.map(item => (
          <Text
            key={shortid.generate()}
            style={styles.filtersText}
          >
            {item}
          </Text>
        ))
      }
    </ScrollView>
  </View>
)

export default Filters
