import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen, PlaceDetailScreen, ReviewsListScreen } from './screens';

const Stack = createNativeStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator initialRouteName="SearchScreen">
    <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
    <Stack.Screen name="ReviewsList" component={ReviewsListScreen} />
  </Stack.Navigator>
);

export default SearchNavigator;