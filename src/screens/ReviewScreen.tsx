import { View } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import screenStyles from '../styles/screen';

const ReviewScreen = () => {
  return (
    <View style={screenStyles.container}>
      <ScreenTitle title='Review'/>
    </View>
  );
};

export default ReviewScreen;