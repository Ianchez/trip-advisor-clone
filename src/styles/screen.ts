import { StyleSheet, StatusBar } from 'react-native';

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight || 0 + 15,
  },
  subSectionText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default screenStyles;

