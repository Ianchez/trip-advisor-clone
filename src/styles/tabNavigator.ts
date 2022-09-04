import { StyleSheet } from 'react-native';

const tabStyles = StyleSheet.create({
  selectedTab: {
    position: 'absolute',
    top: 0,
    borderTopWidth: 3,
    borderTopColor: 'black',
  },
  tabBarLabel: {
    fontWeight: '500',
    fontFamily: 'Trip Sans, Arial',
    paddingBottom: 4,
  }
});

export default tabStyles;