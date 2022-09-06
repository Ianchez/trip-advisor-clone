import React from 'react';
import { StyleSheet, StyleProp, Text, View, ViewStyle } from 'react-native';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const ScreenTitle: React.FC<Props> = ({ title, style: propStyle }) => {
  return (
    <View style={[ styles.container, propStyle ]}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
});

export default ScreenTitle;