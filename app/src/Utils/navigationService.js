import { useNavigation } from '@react-navigation/native';
import {navigationRef} from '../navigation/index';
// import {drawer} from '../navigation/navigationScalingDrawer';
// const useNav=useNavigation();
export function navigateTo(routeName, params) {
  navigationRef.current?.navigate(routeName, params);
}
export function navigateFromDrawer(routeName, params) {
  drawer.current.close();
  navigationRef.current?.navigate(routeName, params);
}
export function navigateBack()
{
  navigationRef.goBack()
}
