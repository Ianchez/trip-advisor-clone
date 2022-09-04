import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  placeholder: string;
  icon: string;
}

const InputField: React.FC<Props> = ({ placeholder, icon }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={22} color="black" />
      <Text style={styles.placeholder}>
        {placeholder}
      </Text>
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
  placeholder: {
    position: 'relative',
    bottom: 1,
    paddingLeft: 6,
    fontSize: 14,
    fontWeight: '500',
    color: 'gray',
  },
});

export default InputField;