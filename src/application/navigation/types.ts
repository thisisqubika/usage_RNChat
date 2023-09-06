import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Dashboard: undefined;
  Login: undefined;
};

export type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard',
  'Login'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
