import { StyleSheet, Text, View } from 'react-native';

const PlanScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Plan Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlanScreen;
