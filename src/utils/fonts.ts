import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'Trip Sans': require('./../../assets/fonts'),
  });
}

export default loadFonts;