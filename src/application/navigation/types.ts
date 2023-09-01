import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Dashboard: undefined;
};

export type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
