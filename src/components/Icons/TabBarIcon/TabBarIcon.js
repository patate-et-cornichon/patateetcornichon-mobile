import React from 'react';
import {View} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './styles';


export const MaterialTabBarIcon = ({name, tintColor, focused}) => (
    <View style={styles.iconView}>
        <MaterialIcons name={name}
                       color={tintColor}
                       size={focused ? 34 : 30}
        />
    </View>
);

export const MaterialCommunityTabBarIcon = ({name, tintColor, focused}) => (
    <View style={styles.iconView}>
        <MaterialCommunityIcons name={name}
                                color={tintColor}
                                size={focused ? 34 : 30}
        />
    </View>
);