import React, { useContext } from 'react';
import {
  DeviceEventEmitter,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { CustomAlert, validateEmail } from '../../../../rsc/theme/customAlert';
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
import { Colors } from '../../../../rsc/theme';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import color from '../../../../rsc/theme/color';
import { signUpAction } from '../../../Redux/Actions/authActions';

export default function SignUp({ navigation }) {
  const { login } = AppConstants
  const [username, setUserName] = React.useState(__DEV__ ? 'harry' : '')
  const [email, setEmail] = React.useState(__DEV__ ? 'harry@gmail.com' : '')
  const [phone, setPhone] = React.useState(__DEV__ ? '' : '')
  const [referral, setRefer] = React.useState(__DEV__ ? '999' : '')
  const [code, setCode] = React.useState(__DEV__ ? '91' : '')
  const [focus, setFocus] = React.useState(false)

  const dispatch = useDispatch()
  const { signUp } = AppConstants
  const { app, auth } = useContext(AuthContext);
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const isFocused = useIsFocused()
  const { t, i18n } = useTranslation();


  const handleFocus = () => {
    console.log('cocus')
    setFocus(true)
    setFocus(true)
 };
 const handleBlur = () => {
   console.log('blur')
   setFocus(false)
 };
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
          label={t('common:signUp.header')}
        />
        <CustomTextView
          containerStyle={[Styles.paragraphStyle]}
          label={t('common:signUp.subHeader')}
        />
      </View>
    );
  };

  //REVIEW Mobile Number
  const mobileNumber = () => {
    return (
      <View style={Styles.phoneNoInputMain}>

        {/* <View style={Styles.phoneNoInput}> */}
        <TextBox
          label={t('common:signUp.fullname')}
          placeholder={t('common:signUp.fullname')}
          onType={(t) => setUserName(t)}

          textValue={username}
        />
        <TextBox
          label={t('common:signUp.email')}
          placeholder={t('common:signUp.email')}
          onType={(t) => setEmail(t)}
          textValue={email}
        // textValue=""
        />


<View style={[Styles.phoneNoInput,focus&&{borderColor:color.darkRed}]}>
          <CustomTextView
            containerStyle={[Styles.mobileNoLabel]}
            label={t('common:signUp.mobile')}
          />
          <PhoneInput
            containerStyle={[Styles.containerStyle]}
            textContainerStyle={[Styles.textContainerStyle]}
            textInputStyle={[Styles.textInput]}
            codeTextStyle={{
              color: Colors.white,
              fontFamily: fontsFamily.bold,
            }}
            textInputProps={{
              selectionColor: color.darkRed,
              placeholderTextColor: color.placeholder,
              onFocus: () => {handleFocus()},
              onBlur: () => {handleBlur()}
            }}
            onChangeText={(t) => setPhone(t)}
            onChangeCountry={(t) => setCode(t?.callingCode[0])}

            renderDropdownImage={<Image
              style={{ height: 12, width: 12, paddingBottom: 5 }}
              resizeMode="contain"
              tintColor={color.white}
              source={image.down}
            />}
            defaultCode="IN"
            layout="second"
          />
        </View>
        <TextBox
          label={t('common:signUp.referral')}
          placeholder={t('common:signUp.referral')}
          onType={(t) => setRefer(t)}

          textValue={referral}
        />

      </View>
    );
  };

  //REVIEW - ON SIGNUP
  const onLogin = () => {
    if (username.trim().length == 0) {
      CustomAlert(t('common:validationConstants.empty.emptyUserName'))
      return
    }
    if (!validateEmail(email)) {
      CustomAlert(t('common:validationConstants.invalid.email.invalidEmail'))
      return
    }

    if (phone.trim().length == 0) {
      CustomAlert(t('common:validationConstants.empty.emptyPhone'))
      return
    }
    // navigation.navigate(SCREEN_CONSTANT.OTP)
    let data = {
      email: email,
      full_name: username,
      phone_number: code + phone,
      referral_code: referral
    }

    dispatch(signUpAction(data,navigation))
    // app()

  }


  //REVIEW Send TOP Button
  const loginAction = () => {
    return <SubmitButton
      isLoading={isLoading}
      onPress={() => onLogin()}
      label={t('common:signUp.btn')} />;
  };

  


  //REVIEW Already Content Bottom
  const alreadyContent = () => {
    return (
      <View style={Styles.already}>
        <CustomTextView
          containerStyle={Styles.alreadyText}
          label={t('common:signUp.alreadyAccount')} />
        <TouchableOpacity>
          <CustomTextView
            onPress={() => navigation.navigate(SCREEN_CONSTANT.LOG_IN)}
            containerStyle={Styles.loginText}
            label={t('common:signUp.login')}
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
          <View style={Styles.loginTop}>
            {titleParagraph()}
          </View>
          {mobileNumber()}
          <View style={Styles.bottom}>
            {loginAction()}
            {alreadyContent()}
          </View>

          {isLoading && isFocused && <Loader />}
        </View>
      </ScrollViewComponent>
    </SafeAreaView>
  )
}
