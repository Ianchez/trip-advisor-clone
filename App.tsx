import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ExploreScreen,
  SearchScreen,
  PlanScreen,
  ReviewScreen
} from './src/screens';

const getGeneralOptions = ({ route }): BottomTabNavigationOptions  => ({
  headerShown: false,
  tabBarIcon: ({ focused }) => {
    let iconName;

    if (route.name === 'Explore') {
      iconName = 'home';
    } else if (route.name === 'Search') {
      iconName = 'search';
    } else if (route.name === 'Plan') {
      iconName = 'favorite-border';
    } else if (route.name === 'Review') {
      iconName = 'edit';
    }

    return <Icon name={iconName} size={26} color={focused ? 'black' : 'gray'} />;
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'gray',
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Explore" screenOptions={getGeneralOptions}>
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Plan" component={PlanScreen} />
        <Tab.Screen name="Review" component={ReviewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
