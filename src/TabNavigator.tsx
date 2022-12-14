import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import SearchNavigator from './SearchNavigator';
import ReviewNavigator from './ReviewNavigator';

import {
  ExploreScreen,
  PlanScreen,
  ReviewScreen
} from './screens';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { iconsDictionary } from './utils/icons';
import tabStyles from './styles/tabNavigator';

type ScreenOptionProps = {
  route: {
    name: string;
  },
  navigation: any;
}


const getGeneralOptions = ({ route }: ScreenOptionProps): BottomTabNavigationOptions  => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused }) => (
      <Icon
        name={iconsDictionary[route.name]}
        size={28}
        color={focused ? 'black' : 'gray'}
        style={focused ? tabStyles.selectedTab : {}}
      />
    ),
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
    tabBarLabelStyle: tabStyles.tabBarLabel
  }
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Search" screenOptions={getGeneralOptions}>
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Search" component={SearchNavigator} />
    <Tab.Screen name="Plan" component={PlanScreen} />
    <Tab.Screen name="Review" component={ReviewNavigator} />
  </Tab.Navigator>
);

export default TabNavigator;