import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import loadFonts from './src/utils/fonts';
import TabNavigator from './src/TabNavigator';


export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
