import React from 'react';
import { Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { useDispatch } from 'react-redux';
import { styles } from './Dashboard.styles';
import { DashboardScreenProps } from '../../types';
import { Button } from '../../../../ui';
import { clearLogin } from '../../../../features/Login/slice';

const Dashboard: React.FC<DashboardScreenProps> = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearLogin());
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{'Hello world! Build Variant: ' + Config.BUILD_VARIANT}</Text>
      </View>
      <Button title="Logout" onPress={handleLogout} testID="LogoutButton" />
    </View>
  );
};

export default Dashboard;
