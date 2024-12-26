import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigation from './app/src/navigation/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { DataManager } from './app/src/Utils/dataManager';
import 'react-native-gesture-handler';
import color from './app/rsc/theme/color';

import { Provider, useDispatch } from 'react-redux';
import { Store } from './app/src/Redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useTranslation } from 'react-i18next';
import './app/src/constants/translations/DCSLocalize';
const App = () => {
  // const {t, i18n} = useTranslation();
  const {i18n, t} = useTranslation();
  const selectedLanguageCode = i18n.language;
  // console.log(selectedLanguageCode,'selected')
  // console.log(i18n,'i18n')
  // console.log(t('common:COMMON_LABELS.SEARCH'),'sssssss')

  React.useEffect(()=>{
    
   i18n.changeLanguage('en')
  //  SplashScreen.hide()
  },[])
  // DataManager.clear()
  return (
    <View style={{flex: 1,backgroundColor:color.blackBg}}>
      <StatusBar backgroundColor={color.blackBg} barStyle="dark-content" />
      <Provider store={Store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
      </Provider>
    </View>
  );
};

export default App;