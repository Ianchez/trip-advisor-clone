import { View } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import screenStyles from '../styles/screen';

const PlanScreen = () => {
  return (
    <View style={screenStyles.container}>
      <ScreenTitle title='Plan'/>
    </View>
  );
};

export default PlanScreen;
