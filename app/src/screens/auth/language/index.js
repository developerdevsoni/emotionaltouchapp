import React, { useContext } from 'react';
import {
  DeviceEventEmitter,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  View,
  I18nManager
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './styles';
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { useTranslation } from 'react-i18next';

import { AppConstants, languages } from '../../../constants/appConstants';
import { TextBox } from '../../../Component/UIComponent';
import { Loader } from '../../../Component/UIComponent/Loader';
import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../../Redux/Actions/authActions';
import { useIsFocused } from '@react-navigation/native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../Utils/size';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import { LanguageCard } from '../../../Component/UIComponent/languageCard';
import { SCREEN_CONSTANT } from '../../../navigation/constant';

export default function Language({ navigation,route }) {
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const isFocused = useIsFocused()
  const [selected, setLang] = React.useState()
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;
  let type=route?.params?.type


  //console.log(languageCode, 'teststst')

  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={t('common:language.header')}
          subLabel={t('common:language.subHeader')}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
        />
      </View>
    );
  };





  const renderItem = ({ item }) => {
    return <LanguageCard
      label={item.name}
      selected={item.lang == selected}
      onPress={() => setLang(item.lang)}
    />
  }
  //REVIEW Send TOP Button
  const chooseLang = () => {
    return <SubmitButton
      onPress={() => type? navigation.goBack(): navigation.navigate(SCREEN_CONSTANT.ONBOARDING)}
      label={t('common:language.btn')} />;
  };


  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}

      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={Styles.width90}
        data={languages}
        extraData={languages}
        keyExtractor={item => item}
        renderItem={renderItem}
        ListFooterComponent={() => <View style={{ height:  50 }} />}
      />
      {chooseLang()}
      <View style={{ height:  30 }} />
    </SafeAreaView>
  )
}
