import * as React from 'react';
import { Platform } from 'react-native';
import {
  BottomTabNavigatorConfig,
  createBottomTabNavigator,
  createStackNavigator,
  NavigationRouteConfigMap,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ExplorerContainer from '../containers/ExplorerContainer';

interface TabBarIconProps {
  focused: boolean;
}

const ExplorerStack = createStackNavigator({
  Home: ExplorerContainer,
});

ExplorerStack.navigationOptions = {
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SearchStack = createStackNavigator({
  Links: ExplorerContainer,
});

SearchStack.navigationOptions = {
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const FavoritesStack = createStackNavigator({
  Settings: ExplorerContainer,
});

FavoritesStack.navigationOptions = {
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const routeConfigMap: NavigationRouteConfigMap = {
  ExplorerStack,
  SearchStack,
  FavoritesStack,
};

const drawConfig: BottomTabNavigatorConfig = {
  tabBarOptions: {
    showLabel: false,
  },
};

export default createBottomTabNavigator(routeConfigMap, drawConfig);
