import React, { useContext } from 'react';
import {
  DeviceEventEmitter,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './styles';
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { CustomAlert } from '../../../../rsc/theme/customAlert';
import { ValidationConstants } from '../../../constants/validationConstants';
import { AppConstants } from '../../../constants/appConstants';
import { TextBox } from '../../../Component/UIComponent';
import { Loader } from '../../../Component/UIComponent/Loader';
import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SCREEN_CONSTANT } from '../../../navigation/constant';
import { ScrollViewComponent } from '../../../Component/basicComponent';
import PhoneInput from 'react-native-phone-number-input';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import { LoginAction } from '../../../Redux/Actions/authActions';


export default function Login({ navigation }) {
  const [username, setUserName] = React.useState(__DEV__ ? 'test124@yopmail.com' : '')
  const [password, setPassword] = React.useState(__DEV__ ? 'ayi1234' : '')
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const isFocused = useIsFocused()
  const { t, i18n } = useTranslation();
  const [phone, setPhone] = React.useState(__DEV__ ? '' : '')
  const [code, setCode] = React.useState(__DEV__ ? '91' : '')
  const [focus, setFocus] = React.useState(false)




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
        source={image.createAc}
      />
    );
  };

  //REVIEW Title Paragraph Content
  const titleParagraph = () => {
    return (
      <View>
        <CustomTextView
          containerStyle={[Styles.titleStyle, Styles.welcomeText]}
          label={t('common:login.header')}
        />
        <CustomTextView
          containerStyle={[Styles.paragraphStyle]}
          label={t('common:login.subHeader')}
        />
      </View>
    );
  };

  const handleFocus = () => {
     setFocus(true)
  };
  const handleBlur = () => {
    setFocus(false)
  };

  //REVIEW Mobile Number
  const mobileNumber = () => {
    return (
      <View style={Styles.phoneNoInputMain}>

        {/* <View style={Styles.phoneNoInput}> */}
        <TextBox
          label={t('common:login.username')}
          placeholder={t('common:login.username')}
          onType={(t) => setUserName(t)}

          textValue={username}
        />
         <View style={Styles.orSign}>
          <View style={Styles.borderLine} />
          <CustomTextView
            containerStyle={[Styles.orSignText]}
            label={t('common:login.or')}
          />
        </View>
       <View style={[Styles.phoneNoInput,focus&&{borderColor:color.darkRed}]}>
       <CustomTextView
            containerStyle={[Styles.mobileNoLabel]}
            label={t('common:signUp.mobile')}
          />
          <PhoneInput
            containerStyle={[Styles.containerStyle, ]}
            textContainerStyle={[Styles.textContainerStyle]}
            textInputStyle={[Styles.textInput]}
            codeTextStyle={{
              color: color.white,
              fontFamily: fontsFamily.bold,
            }}
            textInputProps={{
              selectionColor:color.darkRed,
              placeholderTextColor:color.placeholder,
              onFocus: () => {handleFocus()},
               onBlur: () => {handleBlur()}
              
            }}
            
            // onFocus={() => handleFocus()}
            // onBlur={() => handleBlur()}
            onChangeText={(t)=>setPhone(t)}
            onChangeCountry={(t)=> setCode(t?.callingCode[0])}
            renderDropdownImage={<Image
              style={{height:12,width:12,paddingBottom:5}}
              resizeMode="contain"
              tintColor={color.white}
              source={image.down}
            />}
            defaultCode="IN"
            layout="second"
          />
        </View>

      </View>
    );
  };

  //REVIEW - ON SIGNUP
  const onLogin = () => {
    if (username.trim().length == 0 && phone.trim().length == 0) {
      CustomAlert(t('common:validationConstants.empty.emptyUserName'))
      return
    }
    // if (phone.trim().length == 0) {
    //   CustomAlert(t('common:validationConstants.empty.emptyPassword'))
    //   return
    // }

   let data={
    email:username,
    phone_number: phone ?code+phone:''
   }

    dispatch(LoginAction(data,navigation))

    // navigation.navigate(SCREEN_CONSTANT.OTP)
    // app()

  }


  //REVIEW Send TOP Button
  const loginAction = () => {
    return <SubmitButton
      onPress={() => onLogin()}
      label={t('common:login.btn')} />;
  };

 


  //REVIEW Already Content Bottom
  const alreadyContent = () => {
    return (
      <View style={Styles.already}>
        <CustomTextView
          containerStyle={Styles.alreadyText}
          label={t('common:login.dontHaveAccount')}/>
        <TouchableOpacity>
          <CustomTextView
            // onPress={() => navigation.navigate(SCREEN_CONSTANT.SIGN_UP)}
            onPress={()=> CustomAlert('Please contact admin for creation of new account.')}
            containerStyle={Styles.loginText}
            label={t('common:login.signUp')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.flex}>
      
      <ScrollViewComponent>
      {HeaderTop()}
      {Logo()}
      <View style={[Styles.container]}>
        <ScrollView>
          <View style={Styles.loginTop}>
            {titleParagraph()}
          </View>
          {mobileNumber()}
          <View style={Styles.bottom}>
            {loginAction()}
            {alreadyContent()}
          </View>

          {isLoading && isFocused && <Loader />}
        </ScrollView>
      </View>
      </ScrollViewComponent>
    </SafeAreaView>
  )
}
