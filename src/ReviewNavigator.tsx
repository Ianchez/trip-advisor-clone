import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReviewScreen, WriteAReviewScreen } from './screens';

const Stack = createNativeStackNavigator();

const ReviewNavigator = () => (
  <Stack.Navigator initialRouteName="ReviewScreen">
    <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="WriteAReview" component={WriteAReviewScreen} />
  </Stack.Navigator>
);

export default ReviewNavigator;