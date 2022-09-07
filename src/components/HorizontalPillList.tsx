import React from 'react';
import { ScrollView, StyleSheet, StyleProp, Text, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import PillButton from './PillButton';

type Props = {
  itemList: string[],
  itemActions?: any[],
  containerStyle?: StyleProp<ViewStyle>;
  pillStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const HorizontalPillList: React.FC<Props> = ({ itemList, itemActions, containerStyle, pillStyle, textStyle }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[ styles.pillsContainer, containerStyle ]}
      decelerationRate={0.3}
    >
      {itemList.map((item, index) =>
        <>
          <PillButton
            text={item}
            pillStyle={pillStyle}
            textStyle={textStyle}
            onPress={itemActions && itemActions[index]}
          />
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
  spaceBetween: {
    width: 6,
  }
});

export default HorizontalPillList;