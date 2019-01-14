import * as React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import { DelishProText, OpenSansText } from '../../components/StyledText';
import { ExplorerProps } from '../../containers/ExplorerContainer';
import styles from './styles';

export default class ExplorerScreen extends React.Component<ExplorerProps> {
  componentDidMount(): void {
    this.props.fetchExplorerLastRecipesRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <DelishProText>Hello world</DelishProText>
          {
            this.props.lastRecipes.map(recipe => (
              <OpenSansText key={recipe.slug}>{recipe.full_title}</OpenSansText>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}
