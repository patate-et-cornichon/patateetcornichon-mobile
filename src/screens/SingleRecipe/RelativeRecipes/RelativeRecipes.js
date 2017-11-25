import React from 'react';
import {View} from 'react-native';
import ScrollRecipes from '../../../containers/ScrollRecipes';
import styles from './styles';
import Text from '../../../components/Text/Text';

export default class RelativeRecipes extends React.Component {
    componentDidMount() {
        const {recipeSlug, actions: {fetchRelativeRecipes}} = this.props;
        fetchRelativeRecipes(recipeSlug);
    }

    render() {
        const {relativeRecipes, navigation} = this.props;

        return (
            <View style={styles.relativeRecipesView}>
                <Text style={styles.relativeRecipesText}>
                    Tu aimeras peut-être
                </Text>
                <ScrollRecipes recipes={relativeRecipes}
                               navigation={navigation}
                               style={styles.relativeRecipesScroll}
                />
            </View>
        )
    }
}