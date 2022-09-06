import React from 'react';
import { ScrollView, StyleSheet, StyleProp, Text, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';

type Props = {
  itemList: string[],
  containerStyle?: StyleProp<ViewStyle>;
  pillStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const HorizontalPillList: React.FC<Props> = ({ itemList, containerStyle, pillStyle, textStyle }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[ styles.pillsContainer, containerStyle ]}
      decelerationRate={0.3}
    >
      {itemList.map((item, index) =>
        <>
          <TouchableOpacity style={[ styles.pill, pillStyle ]}>
            <Text style={[ styles.pillText, textStyle ]}>{item}</Text>
          </TouchableOpacity>
          {index !== (itemList.length - 1) && // Avoid space at the end
            <View style={styles.spaceBetween}/>
          }
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pillsContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  pill: {
    height: 40,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#e9e9e9',
    paddingHorizontal: 16,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '500',
    position: 'relative',
    bottom: 1,
  },
  spaceBetween: {
    width: 6,
  }
});

export default HorizontalPillList;