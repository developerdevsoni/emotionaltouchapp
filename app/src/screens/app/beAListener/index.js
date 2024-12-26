import React, { useContext } from 'react';
import {
  DeviceEventEmitter,
  Image,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './styles';
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { AppConstants } from '../../../constants/appConstants';
import { Loader } from '../../../Component/UIComponent/Loader';
import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../Utils/size';
import { useTranslation } from 'react-i18next';
import { SCREEN_CONSTANT } from '../../../navigation/constant';
import { ScrollViewComponent } from '../../../Component/basicComponent';

export default function BeAListener({ navigation }) {

  const dispatch = useDispatch()
  const { signUp } = AppConstants
  const { app, auth } = useContext(AuthContext);
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const isFocused = useIsFocused()
  const { t, i18n } = useTranslation();


  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          containerStyle={[Styles.containerHeader]} isBack={true} />
      </View>
    );
  };

  //REVIEW App Logo
  const Logo = () => {
    return (
      <Image
        style={Styles.logo}
        resizeMode="contain"
        source={image.beAlistener}
      />
    );
  };

  //REVIEW Title Paragraph Content
  const titleParagraph = () => {
    return (
      <View>
        <CustomTextView
          containerStyle={[Styles.titleStyle, Styles.welcomeText]}
          label={t('common:beAListener.header')}
        />
        <View style={[Styles.desc,{width:DEVICE_WIDTH*0.8}]}>
        <CustomTextView
          containerStyle={[Styles.paragraphStyle]}
          label={t('common:beAListener.desc')}
        />
         <CustomTextView
          containerStyle={[Styles.paragraphStyle1]}
          label={t('common:beAListener.yrs')}
        />
        </View>
      </View>
    );
  };

 

 




 

  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      {Logo()}
      <ScrollViewComponent>
      <View style={[Styles.container]}>
        <ScrollView>
          <View style={Styles.loginTop}>
            {titleParagraph()}
          </View>
         
          <SubmitButton
            onPress={() => navigation.navigate(SCREEN_CONSTANT.PAYMENT_DETAILS_LISTENER)}
            propsStyle={Styles.yesBtn}
            label={t('common:beAListener.yes')} />
           <SubmitButton
            // onPress={() => setDeleteModalVisible(false)}
            propsStyle={Styles.noBtn}
            label={t('common:beAListener.no')} />


          {isLoading && isFocused && <Loader />}
        </ScrollView>
      </View>
      </ScrollViewComponent>
    </SafeAreaView>
  )
}
