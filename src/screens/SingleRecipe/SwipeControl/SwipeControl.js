import React from 'react';
import {View} from 'react-native';
import SwipeButton from './SwipeButton';
import styles from './styles';


const SwipeControl = ({activeIndex, onPress}) => (
    <View style={styles.controlView}>
        {/* Introduction Icon */}
        <SwipeButton index={0}
                     title='Hello hello !'
                     activeIndex={activeIndex}
                     iconName='toque'
                     onPress={() => onPress(0)}
        />

        {/* Ingredients Icon */}
        <SwipeButton index={1}
                     title='Ingredients'
                     activeIndex={activeIndex}
                     iconName='food-basket'
                     onPress={() => onPress(1)}
        />

        {/* Preparation Icon */}
        <SwipeButton index={2}
                     title='Préparation'
                     activeIndex={activeIndex}
                     iconName='preparation'
                     onPress={() => onPress(2)}
        />
    </View>
);

export default SwipeControl;