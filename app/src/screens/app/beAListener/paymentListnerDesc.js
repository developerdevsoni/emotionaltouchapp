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
import icons from '../../../../rsc/theme/icons';
import { Colors } from '../../../../rsc/theme';

export default function PaymentDetailsListener({ navigation }) {

  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const isFocused = useIsFocused()
  const { t, i18n } = useTranslation();
  const options = [
    {
      name: t('common:beAListener.chat'),
      icon: icons.message,
    },
    {
      name: t('common:beAListener.call'),
      icon: icons.phone,
    },
    {
      name: t('common:beAListener.videoCall'),
      icon: icons.video,
    },

  ]

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
          label={t('common:beAListener.header1')}
        />
        <View style={Styles.desc}>
       {options.map((i,k)=>{
        return<><View
        style={Styles.listDiv}
      >
        <View style={Styles.optionTxtDiv}>
          <CustomTextView
            numberOfLines={1}
            containerStyle={Styles.optionListIcon}
            label={i.icon}
          />
          <CustomTextView
            numberOfLines={1}
            containerStyle={Styles.hoursTxt}
            label={i.name}
          />
        </View>
      
      </View>
      {k!==2&&<View style={{height:1,backgroundColor:Colors.brownDusty}}/>}
      </>
       })} 
    
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
            <CustomTextView
          containerStyle={[Styles.paragraphStyle,{marginBottom:DEVICE_HEIGHT*0.05}]}
          label={t('common:beAListener.desc1')}
        />
          </View>
         
          <SubmitButton
            onPress={() => navigation.navigate(SCREEN_CONSTANT.PROFILE)}
            propsStyle={Styles.yesBtn}
            label={t('common:beAListener.continue')} />
     


          {isLoading && isFocused && <Loader />}
        </ScrollView>
      </View>
      </ScrollViewComponent>
    </SafeAreaView>
  )
}
