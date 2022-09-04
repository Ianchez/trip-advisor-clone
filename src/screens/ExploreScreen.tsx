import { View } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import screenStyles from '../styles/screen';

const ExploreScreen = () => {
  return (
    <View style={screenStyles.container}>
      <ScreenTitle title='Explore'/>
    </View>
  );
};

export default ExploreScreen;
