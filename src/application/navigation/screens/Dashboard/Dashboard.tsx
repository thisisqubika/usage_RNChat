import React from 'react';
import { Text, View } from 'react-native';
import Config from 'react-native-config';
import { useDispatch } from 'react-redux';
import { styles } from './Dashboard.styles';
import { clearLogin } from '@/features/Login/slice';
import { DashboardScreenProps } from '@/application/navigation/types';
import { Button } from '@/ui';

const Dashboard: React.FC<DashboardScreenProps> = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearLogin());
  };

  return (
    <View style={styles.container}>
      <Text>{'Hello world! Build Variant: ' + Config.BUILD_VARIANT}</Text>
      <Button title="Logout" onPress={handleLogout} testID="LogoutButton" />
    </View>
  );
};

export default Dashboard;
