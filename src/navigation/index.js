import React from 'react';
import {StackNavigator} from 'react-navigation';
import PrivateRoutes from './privateRoutes';
import PublicRoutes from './publicRoutes';


const AppNavigator = StackNavigator(
    {
        PrivateRoutes: {
            screen: PrivateRoutes
        },
        PublicRoutes: {
            screen: PublicRoutes
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