import React,{useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import color from '../../../rsc/theme/color';
import BottomBar from './BottomTabBar';
import {  Signature,  Home,  Favorites, Profile} from '../../screens/app';
import { SCREEN_CONSTANT } from '../constant';




const Tab = createBottomTabNavigator();

const BottomTabRoutes = props => {
  // const dispatch = useDispatch();
 
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: color.white,
        tabBarInactiveBackgroundColor: color.white,
      }}
      tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen name={SCREEN_CONSTANT.HOME} component={Home} />
      <Tab.Screen name={SCREEN_CONSTANT.FAV} component={Favorites} />
      <Tab.Screen name={SCREEN_CONSTANT.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabRoutes;
