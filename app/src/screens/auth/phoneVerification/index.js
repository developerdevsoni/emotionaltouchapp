import React, { useContext } from 'react';
import {DeviceEventEmitter, Image, Keyboard, SafeAreaView, TouchableOpacity, View} from 'react-native';


//SECTION CUSTOM IMPORTS
import Styles from './styles';
import image from '../../../../rsc/theme/image';
import {SubmitButton} from '../../../Component/UIComponent/submitButton';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { AuthContext } from '../../../navigation/context';
import { CustomAlert } from '../../../../rsc/theme/customAlert';
import { AppConstants } from '../../../constants/appConstants';
import { useTranslation } from 'react-i18next';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../Utils/size';
import OTPInputView from '../../../../libs/@twotalltotems/react-native-otp-input';
import { Colors } from '../../../../rsc/theme';
import { useDispatch } from 'react-redux';
import { resendOtpAction, submitOtpAction } from '../../../Redux/Actions/authActions';
import { ScrollViewComponent } from '../../../Component/basicComponent';

export default function PhoneVerification({navigation , route}) {
  const {phoneVerification}=AppConstants
  //REVIEW Header Top Main
  const type = route?.params?.loginData

  console.log(type,'dsdsd')
  const { app,auth } = useContext(AuthContext);
  const [otp,setOtp]=React.useState('1234')
  const [sendTo,setSendTo]=React.useState('')

  const { t, i18n } = useTranslation();
  const dispatch =useDispatch()

React.useEffect(()=>{
if(route)
{
  setOtp(route?.params?.loginData?.otp.toString())
  if(route?.params?.loginData?.email ||route?.params?.loginData?.phone_number)
  {
    if(route?.params?.loginData?.email)
    {
       setSendTo(route?.params?.loginData?.email)
    }
    else{
      setSendTo(route?.params?.loginData?.phone_number)
    }
  }
}
},[route?.params])


 //onlogin
 React.useEffect(() => {
  const subscription = DeviceEventEmitter.addListener("onLogin", async (e) => {
    // do something
    app()

  })
  return () => {
    subscription.remove();
  };

}, [])

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
        source={image.otp}
      />
    );
  };


//SECTION - RESEND OTP
  const ResendOTP=()=>{
    let data={
      user_id:route?.params?.loginData.user_id
    }
    dispatch(resendOtpAction(data,navigation))
  }


//SECTION - SHUTTING KEYBOARD 
   React.useEffect(()=>{
   if(otp.length ==4)
   {
    Keyboard.dismiss()
   }
   },[otp])

  //REVIEW OTP Text Input View
  const OTPTextInput = () => {
    return (
      <View style={{width:DEVICE_WIDTH *0.6,alignSelf:'center',marginTop:30}}>
      
         <OTPInputView
                        // clearInputs={removeCode}
                        style={Styles.otpStyle}
                        pinCount={4}
                        code={otp}
                        // autoFocusOnLoad={true}
                        codeInputHighlightStyle={Styles.codeInputHighlightStyle}
                        selectionColor={Colors.white}
                        codeInputFieldStyle={Styles.codeInputFieldStyle}
                        onCodeChanged={code => {
                          // setRemoveCode(false)
                            setOtp(code)
                        }}
                    />
      </View>
    );
  };

//SECTION - SUBMIT OTP
  const onsubmitOtp=()=>{
     if(otp.trim().length !=4)
     {
      CustomAlert(t('common:validationConstants.empty.emptyOtp'))

      return false;
     }
    else{
      let data={
        otp:otp,
        user_id:route?.params?.loginData.user_id
      }
      dispatch(submitOtpAction(data))
    }
  }
  //REVIEW Verify Button
  const VerifyBtn = () => {
    return <View style={{marginTop:DEVICE_HEIGHT *0.14,marginBottom:DEVICE_HEIGHT*0.05}}>
      <SubmitButton 
    onPress={()=> onsubmitOtp()}
    label={phoneVerification.btn} />
      <CustomTextView
          onPress={()=> ResendOTP()}
          containerStyle={[Styles.resendOtp]}
          label={t('common:phoneVerification.resendOtp')}
        />
    </View>
  };

  //REVIEW Title Paragraph Content
  const titleParagraph = () => {
    return (
      <View>
        <CustomTextView
          containerStyle={[Styles.titleStyle, Styles.welcomeText]}
          label={t('common:phoneVerification.header')}
        />
        <CustomTextView
          containerStyle={[Styles.paragraphStyle]}
          label={t('common:phoneVerification.codeSentTo')}
        />
         <CustomTextView
          containerStyle={[Styles.paragraphStyle]}
          label={sendTo}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.flex}>
      <ScrollViewComponent>
       {HeaderTop()}
         {Logo()}
      <View style={[Styles.container]}>
        {titleParagraph()}
        {OTPTextInput()}
        {VerifyBtn()}
      </View>
      </ScrollViewComponent>
    </SafeAreaView>
  );
}
