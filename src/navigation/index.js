import React from 'react';
import {StackNavigator} from 'react-navigation';
import Initial from '../containers/Initial';


const AppNavigator = StackNavigator(
    {
        Initial: {
            screen: Initial
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
            shadowColor: 'transparent'
        }
    }
);

export default AppNavigator;