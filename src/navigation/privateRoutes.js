import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Home from '../containers/Home';
import Recipes from '../containers/Recipes';
import Search from '../containers/Search';
import Favorites from '../containers/Favorites';
import SingleRecipe from '../containers/SingleRecipe';
import CommentAction from '../containers/CommentAction';
import Profile from '../containers/Profile';
import {defaultBackground, primaryColor, secondaryColor} from '../config/styles';


const cardStyle = {
    shadowColor: 'transparent',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: defaultBackground
};

const Tab = TabNavigator(
    {
        Home: {
            screen: Home,
        },
        Recipes: {
            screen: Recipes,
        },
        Search: {
            screen: Search,
        },
        Favorites: {
            screen: Favorites,
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        initialRouteName: 'Home',
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: primaryColor,
            inactiveTintColor: 'white',
            style: {
                backgroundColor: secondaryColor,
                borderTopWidth: 0,
            },
            iconStyle: {
                width: 35,
                height: 60
            },
            tabStyle: {
                height: 50,
                marginTop: null
            }

        }
    }
);

const PrivateRoutes = StackNavigator(
    {
        Main: {
            screen: Tab
        },
        SingleRecipe: {
            screen: SingleRecipe
        },
        CommentAction: {
            screen: CommentAction
        },
        Profile: {
            screen: Profile
        }
    },
    {
        cardStyle
    }
);

export default PrivateRoutes;