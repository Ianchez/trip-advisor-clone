import React from 'react';
import { StyleSheet, StyleProp, TextInput, View, ViewStyle, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  placeholder: string;
  value: string;
  icon?: string;
  style?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
  onFocus?: () => void;
}

const InputField: React.FC<Props> = ({ placeholder, value, icon, style: propStyle, onChange, onFocus }) => {
  return (
    <View style={[ styles.container, propStyle ]}>
      {icon && <Icon name={icon} size={22} color="black" />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onFocus={onFocus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dae0dc',
    borderWidth: 2,
    borderRadius: 23,
    height: 46,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    position: 'relative',
    bottom: 1,
    paddingLeft: 6,
    fontSize: 16,
    fontWeight: '500',
    color: 'lightslategrey',
  },
});

export default InputField;