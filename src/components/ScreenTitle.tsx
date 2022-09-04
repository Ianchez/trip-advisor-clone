import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
}

const ScreenTitle: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
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