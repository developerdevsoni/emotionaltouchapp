import React, { useContext } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import image from '../../../../rsc/theme/image';
import Styles from './style';
import { TextBox } from '../../../Component/UIComponent/textBox';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import Header from '../../../Component/basicComponent/header';
import { CustomAlert } from '../../../../rsc/theme/customAlert';
import { ValidationConstants } from '../../../constants/validationConstants';
import { AppConstants } from '../../../constants/appConstants';

import { useDispatch } from 'react-redux';
import { AuthContext } from '../../../navigation/context';

export default function ForgotPassword({ navigation }) {
  const { forgotPass } = AppConstants
  const { app, auth } = useContext(AuthContext);
  const dispatch = useDispatch()
  const [phone, setPhone] = React.useState('')
  const [fullName, setFullName] = React.useState('')



  //REVIEW  Screen Background Image
  const ImageBackgroundMain = () => {
    return (
      <ImageBackground
        source={image.loginBg}
        resizeMode="contain"
        style={Styles.onboarding_main}
      />
    );
  };



  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header containerStyle={[Styles.containerHeader]} isBack={true} />
      </View>
    );
  };

  //REVIEW Title Paragraph Content
  const titleParagraph = () => {
    return (
      <View style={{ width: '80%', alignSelf: 'center' }}>
        <CustomTextView
          containerStyle={[Styles.titleStyle, Styles.welcomeText]}
          label={forgotPass.header}
        />
        <CustomTextView
          containerStyle={[Styles.paragraphStyle]}
          label={forgotPass.subHeader}
        />
      </View>
    );
  };


  //REVIEW Google user data get
  async function googleUserData() {
    try {
      const data = await loginWithGoogle();
      console.log(data, 'dadadadadad')
      // setIsApiLoading(true);
      // var array_name = data.user.name.split(' ');
      const postData = {
        email: data.user.email,
        first_name: data?.user?.givenName,
        last_name: data?.user?.familyName,
        // photo: data?.user?.photo,
        login_unique_id: data.user.id,
        login_type: 'google',
      };
      console.log(postData, 'postDATATTA')
    } catch (error) {
      console.log('error>>>>>', error);
    }
  }

  //REVIEW - ON SIGNUP
  const onSignUp = () => {
    // if (fullName.trim().length == 0) {
    //   CustomAlert(ValidationConstants.empty.emptyEmail)
    //   return
    // }

    // navigation.navigate('PhoneVerification')
  }

  //REVIEW Full Name and Mobile Number
  const accountCreateForm = () => {
    return (
      <View style={Styles.phoneNoInputMain}>
        <TextBox label={forgotPass.email}
          placeholder={forgotPass.emailPlaceHolder}
          onType={(t) => setFullName(t)}

        // textValue=""
        />

        <View style={Styles.phoneNoInput}>

        </View>
      </View>
    );
  };

  //REVIEW Sign Up Button
  const signUpBtn = () => {
    return <SubmitButton
      onPress={() => onSignUp()}
      label={forgotPass.btn} />;
  };


  //REVIEW Already Content Bottom
  const alreadyContent = () => {
    return (
      <View style={Styles.already}>
        <CustomTextView
          containerStyle={Styles.alreadyText}
          label={forgotPass.alreadyAccount}
        />
        <TouchableOpacity>
          <CustomTextView
            onPress={() => navigation.navigate('Login')}
            containerStyle={Styles.loginText} label={forgotPass.login} />
        </TouchableOpacity>
      </View>
    );
  };

  //REVIEW App Logo
  const Logo = () => {
    return (
      <Image
        style={Styles.logo}
        resizeMode="contain"
        source={image.nutrinexLogo}
      />
    );
  };

  return (
    <SafeAreaView style={Styles.flex}>
      {ImageBackgroundMain()}
      {HeaderTop()}
      <View style={[Styles.container]}>
        <ScrollView>
          <View style={Styles.loginTop}>
          {Logo()}
            {titleParagraph()}
          </View>
          {accountCreateForm()}
          {signUpBtn()}
          {alreadyContent()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
