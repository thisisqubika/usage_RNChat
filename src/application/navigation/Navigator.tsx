import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useSelector } from 'react-redux';
import { selectLogin } from '@/features/Login/slice';

export const Navigator: React.FC = () => {
  const { isLogged } = useSelector(selectLogin)?.login;

  return (
    <NavigationContainer>
      {isLogged ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
