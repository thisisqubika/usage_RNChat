import React from 'react';
import {DashboardScreenProps} from '../types';
import {Text, View} from 'react-native';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';
import {selectLogin} from '../../../features/login/slice';

const Dashboard: React.FC<DashboardScreenProps> = () => {
  const login = useSelector(selectLogin);
  console.log(login);
  return (
    <View>
      <Text>{'Hello world! Build Variant: ' + Config.BUILD_VARIANT}</Text>
    </View>
  );
};

export default Dashboard;
