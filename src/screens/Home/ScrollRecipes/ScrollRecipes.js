import React from 'react';
import {ScrollView, View, Text, FlatList} from 'react-native';
import Recipe from './Recipe/Recipe';
import styles from './styles';


const ScrollRecipes = ({recipes = [], recipesCategory = '', style = {}, navigation, actions}) => {
    /**
     * Get Recipe from database and navigate to SingleRecipe page
     *
     * @param recipeId
     * @returns {Promise}
     * @private
     */
    const _getRecipe = async recipeId => {
        const {getRecipeFromDatabase} = actions;
        const recipe = await getRecipeFromDatabase(recipeId);
        navigation.navigate('SingleRecipe', {
            recipe
        })
    };

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
                                onPress={() => _getRecipe(item.id)}
                        />
                    )}
                />
            </ScrollView>
        </View>
    );
};

export default ScrollRecipes;