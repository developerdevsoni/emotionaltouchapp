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
import Styles from './styles';
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { AppConstants } from '../../../constants/appConstants';
import { TextBox } from '../../../Component/UIComponent';
import { Loader } from '../../../Component/UIComponent/Loader';
import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { DEVICE_WIDTH } from '../../../Utils/size';
import { useTranslation } from 'react-i18next';
import { SCREEN_CONSTANT } from '../../../navigation/constant';
import { ScrollViewComponent } from '../../../Component/basicComponent';
import color from '../../../../rsc/theme/color';
import { AirbnbRating } from 'react-native-ratings';

export default function RatingCall({ navigation }) {
  const { login } = AppConstants
  const [serviceRate, setServiceRate] = React.useState('5');

  const [rating, setRating] = React.useState(__DEV__ ? '' : '')
  const [password, setPassword] = React.useState(__DEV__ ? 'ayi1234' : '')
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
          label={t('common:rating.header')}
        />
        <View style={[Styles.desc,{width:DEVICE_WIDTH*0.9}]}>
        <CustomTextView
          containerStyle={[Styles.paragraphStyle]}
          label={t('common:rating.desc')}
        />
          <AirbnbRating
                            showRating={false}
                            selectedColor={color.gold}
                            unSelectedColor={color.brownDusty}
                            starContainerStyle={Styles.star}
                            count={5}
                            defaultRating={4}
                            onFinishRating={setServiceRate}
                            size={DEVICE_WIDTH*0.05}
                        />
      <TextBox
            multiline={true}
            // label={t('common:rating.txt')}
            placeholder={t('common:rating.txt')}
            onType={(t) => setRating(t)}
            textBoxContainerStyle={Styles.input}
            textValue={rating}
            maxLength={200}
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
            label={t('common:rating.btn')} />
         


          {isLoading && isFocused && <Loader />}
        </ScrollView>
      </View>
      </ScrollViewComponent>
    </SafeAreaView>
  )
}
