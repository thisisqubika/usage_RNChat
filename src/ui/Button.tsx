import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  testID?: string;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const Button: React.FC<ButtonProps> = ({ title, onPress, testID }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID={testID}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
