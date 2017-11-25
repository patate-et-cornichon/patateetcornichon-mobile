import React from 'react';
import {TouchableWithoutFeedback, Image} from 'react-native';
import styles from './styles';


const FavoriteRecipe = ({recipe, navigation}) => (
    <TouchableWithoutFeedback
        onPress={() => navigation.navigate('SingleRecipe', {
            recipe
        })}
    >
        <Image
            source={{uri: recipe.main_image}}
            style={styles.recipeImage}
        />
    </TouchableWithoutFeedback>
);

export default FavoriteRecipe;