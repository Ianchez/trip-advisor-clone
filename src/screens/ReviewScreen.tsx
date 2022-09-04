import { StyleSheet, Text, View } from 'react-native';

const ReviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Review Screen</Text>
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

export default ReviewScreen;