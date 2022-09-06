import React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';

type Props = {
  rating: number;
  circleSize: number;
  // style?: StyleProp<ViewStyle>;
}

const renderCircle = (rating: number, circleSize: number, halfSection: number) => {
  const sizeStyle = { height: circleSize, width: circleSize, borderRadius: circleSize / 2 };
  return (
    <View style={[ styles.ratingCircle, rating < halfSection && styles.whiteBackground, sizeStyle ]}>
      {rating >= halfSection && rating < (Math.ceil(halfSection) - 0.1) && <>
        <View style={[ styles.halfCircle ]}/>
        <View style={[ styles.halfCircle, styles.whiteBackground ]}/>
      </>}
    </View>
  );
};

const RatingCircles: React.FC<Props> = ({ rating, circleSize }) => {
  return (
    <View style={{ ...styles.container, width: (circleSize * 5 + 8) }}>
      {renderCircle(rating, circleSize, 0.5)}
      {renderCircle(rating, circleSize, 1.5)}
      {renderCircle(rating, circleSize, 2.5)}
      {renderCircle(rating, circleSize, 3.5)}
      {renderCircle(rating, circleSize, 4.5)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 20,
    marginRight: 6,
  },
  ratingCircle: {
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#529d72',
    borderColor: '#529d72',
    borderWidth: 1,
  },
  halfCircle: {
    flex: 1
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
});

export default RatingCircles;