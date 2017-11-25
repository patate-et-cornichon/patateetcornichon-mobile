import React from 'react';
import {View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Moment from '../../../../utils/moment';
import Text from '../../../../components/Text/Text';
import styles from './styles';


const defaultDateColor = '#dadada';

const RecipeDate = ({date, dateColor}) => (
    <View style={styles.recipeTimeView}>
        <MaterialIcons name={'access-time'}
                       size={16}
                       color={dateColor || defaultDateColor}
        />
        <Text style={[styles.recipeTime, {color: dateColor || defaultDateColor}]}>
            {Moment.transform(date, 'humanize').toUpperCase()}
        </Text>
    </View>
);

export default RecipeDate;