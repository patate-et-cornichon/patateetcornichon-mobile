import React from 'react';
import {ScrollView, View, Text, FlatList} from 'react-native';
import Recipe from './Recipe/Recipe';
import styles from './styles';


export default class ScrollRecipes extends React.Component {
    state = {
        disabled: false
    };

    /**
     * Get Recipe from database and navigate to SingleRecipe page
     *
     * @param recipeId
     * @returns {Promise}
     * @private
     */
    _getRecipe = async recipeId => {
        const {disabled} = this.state;

        if (!disabled) {
            const {actions: {getRecipeFromDatabase}, navigation} = this.props;
            const recipe = await getRecipeFromDatabase(recipeId);

            this.setState({disabled: true});

            navigation.navigate('SingleRecipe', {
                recipe
            });

            setTimeout(() => this.setState({disabled: false}), 1000)
        }
    };

    render() {
        const {recipes = [], recipesCategory = '', style = {}} = this.props;

        return (
            <View style={[styles.recipesView, style]}>
                {
                    recipesCategory !== '' &&
                    <Text style={styles.recipesCategory}>
                        {recipesCategory}
                    </Text>
                }
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FlatList
                        horizontal={true}
                        contentContainerStyle={styles.recipesContainer}
                        data={recipes}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) => (
                            <Recipe lastItem={index === recipes.length - 1}
                                    recipe={item}
                                    onPress={() => this._getRecipe(item.id)}
                            />
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}