import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabRoutes from '../BottomTabRoutes';
import { Drawer } from './SideMenu';
// import { Home } from '../../screens/app';

const DrawerStack = createDrawerNavigator();

function ProfileTab() {
    return (
      <DrawerStack.Navigator
        screenOptions={{ headerShown: false, drawerType: 'front' }}
        drawerContent={props => <Drawer {...props}/>}
        >
        <DrawerStack.Screen name={'drawer'} component={BottomTabRoutes} />
      </DrawerStack.Navigator>
    );
  }

  export {ProfileTab};