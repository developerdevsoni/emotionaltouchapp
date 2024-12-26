import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Root from '../screens/root/index';
// import Login from '../screens/auth/login';

import {
  InviteFriends,
  Language,
  Login,
  OnboardingScreen,
  PhoneVerification,
  SignUp,
  SplashSwitch,
} from '../screens/auth';
import { Linking, Platform, SafeAreaView, View } from 'react-native';
import color from '../../rsc/theme/color';

import { DataManager } from '../Utils/dataManager';
import BottomTabRoutes from './BottomTabRoutes';
import { AutoConnect, BeAListener, Chat, CompleteProfile, ContactUs, Dashboard, EditProfile, GiftListener, IncomingCall, InviteFriendListener, ListenerProfile, Offers, Passes, PaymentDetailsListener, RatingCall, SearchListener, SupportCategory, UserSupport, Wallet } from '../screens/app';
import { SCREEN_CONSTANT } from './constant';
import SupportCategoryQueries from '../screens/app/support/supportQueries';
import { Colors } from '../../rsc/theme';
import { useNavigation } from '@react-navigation/native';
import { Loader } from '../Component/UIComponent/Loader';
import { apiConstants } from '../constants/appConstants';

const rootStack = createStackNavigator();
const authStack = createStackNavigator();
const appStack = createStackNavigator();

function RootStackScreen(params) {
  return (
    <rootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <rootStack.Screen name="root" component={Root} />
    </rootStack.Navigator>
  );
}
function AuthStackScreen(params) {
  const [first, setFirst] = React.useState(null)
  React.useEffect(() => {
    DataManager.getFirstTime().then((res) => {
      if (res != null) {

        setFirst(res);
      }
      else {
        setFirst('');
      }
    })
  }, [])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.blackBg }}>

     {first ==null ?
     <Loader/>
     :<authStack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          cardOverlay: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.blackBg,
              }}
            />)
        }}
        cardStyle={{ backgroundColor: Colors.blackBg, }}

      >
       
        {first == '' && <authStack.Screen name={SCREEN_CONSTANT.ONBOARDING} component={OnboardingScreen} />}
        {/* <authStack.Screen name={SCREEN_CONSTANT.INCOMING_CALL} component={IncomingCall} /> */}

        <authStack.Screen name={SCREEN_CONSTANT.LOG_IN} component={Login} />

        <authStack.Screen name={SCREEN_CONSTANT.SPLASH} component={SplashSwitch} />
        <authStack.Screen name={SCREEN_CONSTANT.LANGUAGE} component={Language} />
        {/* <authStack.Screen name={SCREEN_CONSTANT.ONBOARDING} component={OnboardingScreen} /> */}
        <authStack.Screen name={SCREEN_CONSTANT.INVITE} component={InviteFriends} />
        <authStack.Screen name={SCREEN_CONSTANT.OTP} component={PhoneVerification} />
        <authStack.Screen name={SCREEN_CONSTANT.SIGN_UP} component={SignUp} />


      </authStack.Navigator>}
    </SafeAreaView>
  );
}
function AppStackScreen(params) {
  const nav=useNavigation()
  React.useEffect(()=>{
    setDeepLink()
  },[])
  const setDeepLink=()=> {
    if (Platform.OS === 'android') {
    Linking.addEventListener('url', handleOpenURL)
        Linking.getInitialURL().then(url => {
          console.log("DEEP LINK Android:::: here2", url);
           
            console.log("DEEP LINK Android:::: here", url == apiConstants.shareURL);
            if(url == apiConstants.shareURL)
            {
            DataManager.getAccessToken().then((res)=>{
              if(res)
              {
  
                setTimeout(() => {
               nav.navigate(SCREEN_CONSTANT.COMPLETE_PROFILE)
                }, 1000);
               }
              else{
               CustomAlert('Please login for completing your profile.')
               }
            })
          }
            // this.navigate(url);
        });
    } 
    else {
        //When app is killed this listener is called
        Linking.getInitialURL().then(url => {
            console.log("DEEP LINK IOS::::", url);
            //Manage your Url like below for navigation
            const route = url.replace(/.*?:\/\//g, '');
            const routefkEventId = route.match(/\/([^\/]+)\/?$/)[1];
            const routeName = route.split('/')[1];
        })
      }
    }
  
  
  
    const handleOpenURL=(url)=>{
      console.log("DEEP LINK Android:::: here1", url);

       console.log(url,'urururu',url.url == apiConstants.shareURL)
       if(url?.url == apiConstants.shareURL)
       {
       DataManager.getAccessToken().then((res)=>{
        if(res)
        {
  
          setTimeout(() => {
         nav.navigate(SCREEN_CONSTANT.COMPLETE_PROFILE)
          }, 1000);
         }
        else{
         CustomAlert('Please login for completing your profile.')
         }
      })
       }
    }

  return (
    <appStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        gestureEnabled: true,
        cardOverlay: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.blackBg,
            }}
          />)
      }}
      cardStyle={{ backgroundColor: Colors.blackBg, }}
    >

      <appStack.Screen name={SCREEN_CONSTANT.HOME} component={BottomTabRoutes} />
      <appStack.Screen name={SCREEN_CONSTANT.USER_SUPPORT} component={UserSupport} />
      <appStack.Screen name={SCREEN_CONSTANT.CONTACT_US} component={ContactUs} />
      <appStack.Screen name={SCREEN_CONSTANT.USER_SUPPORT_CATEGORY} component={SupportCategory} />
      <appStack.Screen name={SCREEN_CONSTANT.USER_SUPPORT_CATEGORY_QUERIES} component={SupportCategoryQueries} />
      <appStack.Screen name={SCREEN_CONSTANT.CHAT} component={Chat} />
      <appStack.Screen name={SCREEN_CONSTANT.WALLET} component={Wallet} />
      <appStack.Screen name={SCREEN_CONSTANT.OFFERS} component={Offers} />
      <appStack.Screen name={SCREEN_CONSTANT.PASSES} component={Passes} />
      <appStack.Screen name={SCREEN_CONSTANT.LANGUAGESET} component={Language} />
      <appStack.Screen name={SCREEN_CONSTANT.INVITE} component={InviteFriends} />
      <appStack.Screen name={SCREEN_CONSTANT.BE_A_LISTENER} component={BeAListener} />
      <appStack.Screen name={SCREEN_CONSTANT.PAYMENT_DETAILS_LISTENER} component={PaymentDetailsListener} />
      <appStack.Screen name={SCREEN_CONSTANT.AUTO_CONNECT} component={AutoConnect} />
      <appStack.Screen name={SCREEN_CONSTANT.LISTENER_PROFILE} component={ListenerProfile} />
      <appStack.Screen name={SCREEN_CONSTANT.EDIT_PROFILE} component={EditProfile} />
      <appStack.Screen name={SCREEN_CONSTANT.DASHBOARD} component={Dashboard} />
      <appStack.Screen name={SCREEN_CONSTANT.RATING_CALL} component={RatingCall} />
      <appStack.Screen name={SCREEN_CONSTANT.COMPLETE_PROFILE} component={CompleteProfile} />
      <appStack.Screen name={SCREEN_CONSTANT.SEARCH} component={SearchListener} />
      <appStack.Screen name={SCREEN_CONSTANT.GIFT_LISTENER} component={GiftListener} />
      <appStack.Screen name={SCREEN_CONSTANT.INVITE_LISTENER} component={InviteFriendListener} />
    </appStack.Navigator>
  );
}

export { RootStackScreen, AuthStackScreen, AppStackScreen };
