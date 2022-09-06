import React from 'react';
import { StyleSheet, StyleProp, TextInput, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  placeholder: string;
  icon?: string;
  style?: StyleProp<ViewStyle>;
}

const InputField: React.FC<Props> = ({ placeholder, icon, style: propStyle }) => {
  return (
    <View style={[ styles.container, propStyle ]}>
      {icon && <Icon name={icon} size={22} color="black" />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
      ></TextInput>
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
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    position: 'relative',
    bottom: 1,
    paddingLeft: 6,
    fontSize: 14,
    fontWeight: '500',
    color: 'lightslategrey',
  },
});

export default InputField;