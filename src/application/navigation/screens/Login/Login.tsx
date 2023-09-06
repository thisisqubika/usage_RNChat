import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './Login.styles';
import { useDispatch } from 'react-redux';
import { setLoggedUser } from '@/features/Login/slice';

export function Login(): JSX.Element {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setLoggedUser());
  };

  return (
    <View style={styles.container}>
      <Text>{'Welcome'}</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
