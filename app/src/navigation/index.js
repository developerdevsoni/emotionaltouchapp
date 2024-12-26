import React, {useState, useMemo} from 'react';
import {AuthContext} from './context';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  RootStackScreen,
  AuthStackScreen,
  AppStackScreen,
} from './navigationStack';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';
import { DataManager } from '../Utils/dataManager';
import { Linking, Platform } from 'react-native';
import color from '../../rsc/theme/color';
import { CustomAlert } from '../../rsc/theme/customAlert';
import { SCREEN_CONSTANT } from './constant';
import { navigateTo } from '../Utils';

export const navigationRef = React.createRef();

export default function Navigation(params) {
  // const nav=useNavigation()
  const [currentStack, setCurrentStack] = useState('auth');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dispatch=useDispatch()
  const authContext = useMemo(() => {
    return {
      auth: () => {
        setCurrentStack('auth');
      },
      app: () => {
        setCurrentStack('app');
      },
      login: () => {
        setCurrentStack('login');
      },
    };
  });

React.useEffect(()=>{
  
  DataManager.getAccessToken().then((res)=>{
    if(res)
    {
      setCurrentStack('app');   
      setTimeout(() => {
        SplashScreen.hide()
        }, 3000);
     }
    else{
      setCurrentStack('auth');   
      setTimeout(() => {
        SplashScreen.hide()
        }, 3000);
     
     }
  })
 

},[])




//When app is in background this listener is called ​Linking​.​addEventListener​(​'url'​, ​this​.​handleOpenURL​);



  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={navigationRef}>
        {currentStack === '' ? (
          <RootStackScreen />
        ) : currentStack === 'auth' ? (
          <AuthStackScreen />
        ) : currentStack === 'app' ? (
          <AppStackScreen />
        ) : (
          <AuthStackScreen />
        )}
      </NavigationContainer>
      <FlashMessage
        position="top"
          style={{
            paddingTop:30,
          }}
        textStyle={{
          fontSize: 20,
          color:color.white,
          textAlign: "left",
        }}
      />
    </AuthContext.Provider>
  );
}
