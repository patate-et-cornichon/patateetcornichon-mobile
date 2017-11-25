import React from 'react';
import {View} from 'react-native';
import RecipesUtils from '../../../utils/recipes';
import Meta from './Meta';
import styles from './styles';


const RecipeMeta = props => {
    const {
        recipe_yield,
        difficulty,
        preparation_time,
        cooking_time,
        leavening_time,
        fridge_time
    } = props;

    return (
        <View style={styles.recipeMetaView}>
            {/* Yield */}
            <Meta name='Pour'
                  data={recipe_yield}
                  icon='yield'
            />

            {/* Difficulty */}
            <Meta name='Difficulté'
                  data={RecipesUtils.getDifficulty(difficulty)}
                  icon='difficulty'
            />

            {/* Preparation */}
            <Meta name='Préparation'
                  data={RecipesUtils.minutesToHours(preparation_time)}
                  icon='preparation'
            />

            {/* Cooking Time */}
            {
                cooking_time &&
                <Meta name='Cuisson'
                      data={RecipesUtils.minutesToHours(cooking_time)}
                      icon='cooking'
                />
            }

            {/* Leavening time */}
            {
                leavening_time &&
                <Meta name='Pose'
                      data={RecipesUtils.minutesToHours(leavening_time)}
                      icon='leavening'
                />
            }

            {/* Fridge time */}
            {
                fridge_time &&
                <Meta name='Frigo'
                      data={RecipesUtils.minutesToHours(fridge_time)}
                      icon='fridge'
                />
            }
        </View>
    );
};

export default RecipeMeta;