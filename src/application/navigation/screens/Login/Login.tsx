import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Login.styles';
import { useDispatch } from 'react-redux';
import { setLoggedUser } from '../../../../features/Login/slice';
import { Button } from '../../../../ui';

export function Login(): JSX.Element {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setLoggedUser());
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{'Welcome'}</Text>
      </View>
      <Button title="Login" onPress={handleLogin} testID="LoginButton" />
    </View>
  );
}
