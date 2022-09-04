import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { iconsDictionary } from './src/utils/icons';
import loadFonts from './src/utils/fonts';

import {
  ExploreScreen,
  SearchScreen,
  PlanScreen,
  ReviewScreen
} from './src/screens';

type ScreenOptionProps = {
  route: {
    name: string;
  },
  navigation: any;
}

const getGeneralOptions = ({ route }: ScreenOptionProps): BottomTabNavigationOptions  => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused }) => {
      const iconName = iconsDictionary[route.name];

      return <Icon name={iconName} size={26} color={focused ? 'black' : 'gray'} />;
    },
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
    tabBarLabelStyle: {
      fontWeight: '500',
      fontFamily: 'Trip Sans, Arial',
      paddingBottom: 4,
    }
  }
};

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

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
