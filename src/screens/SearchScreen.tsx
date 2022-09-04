import { View } from 'react-native';
import InputField from '../components/InputField';
import ScreenTitle from '../components/ScreenTitle';
import screenStyles from '../styles/screen';

const SearchScreen = () => {
  return (
    <View style={screenStyles.container}>
      <ScreenTitle title='Search'/>
      <InputField placeholder='Where to?' icon={'search'}/>
    </View>
  );
};

export default SearchScreen;