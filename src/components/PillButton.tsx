import React from 'react';
import { GestureResponderEvent, StyleSheet, StyleProp, TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

type Props = {
  text: string;
  pillStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

const PillButton: React.FC<Props> = ({ text, pillStyle, textStyle, onPress }) => {
  return (
    <TouchableOpacity style={[ styles.pill, pillStyle ]} onPress={onPress}>
      <Text style={[ styles.pillText, textStyle ]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 48,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 24,
    borderColor: '#e9e9e9',
    paddingHorizontal: 16,
  },
  pillText: {
    fontSize: 14,
    fontWeight: '500',
    position: 'relative',
    bottom: 1,
  },
});

export default PillButton;