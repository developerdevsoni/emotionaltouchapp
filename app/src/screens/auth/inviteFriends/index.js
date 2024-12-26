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
  I18nManager,
  Share
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
import FastImage from 'react-native-fast-image';
import { Colors } from '../../../../rsc/theme';
import Clipboard from '@react-native-community/clipboard';
import icons from '../../../../rsc/theme/icons';

export default function InviteFriends({ navigation }) {
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const isFocused = useIsFocused()
  const [promo, setPromo] = React.useState('')
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;


  //console.log(languageCode, 'teststst')

  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={t('common:invite.header')}
          subLabel={''}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
        />
      </View>
    );
  };








  const topView=()=>{
    return  <View style={{ flexDirection: 'row' }}>
    <View style={Styles.width50}>
      <CustomTextView
        containerStyle={Styles.getText}
        label={t('common:invite.youGet')}
      />
      <FastImage
        source={image.invite1}
        resizeMode='cover'
        style={Styles.logoImg}
      />
      <CustomTextView
        containerStyle={Styles.price}
        label={t('common:invite.price')}
      />
      <CustomTextView
        containerStyle={Styles.priceCombo}
        label={t('common:invite.priceCombo')}
      />
    </View>
    <View style={Styles.width50}>
      <CustomTextView
        containerStyle={Styles.getText}
        label={t('common:invite.friendsGet')}
      />
      <FastImage
        source={image.invite2}
        resizeMode='cover'
        style={Styles.logoImg}
      />
        <CustomTextView
        containerStyle={Styles.price}
        label={t('common:invite.priceoff') +' '+t('common:invite.off')}
      />
     
    </View>

  </View>
  }

  const promoCode=()=>{
    return <View style={Styles.promoCodeDiv}>
    <TextBox
        // label={t('common:invite.code')}
        placeholder={t('common:invite.code')}
        textBoxContainerStyle={{borderStyle:'dashed'}}
        onType={(t) => setPromo(t)}
        rightIcon={icons.share}
        rightIcon2={icons.copy}
        onPressRightIcon2={()=>   Clipboard.getString('promo')}
        onPressRightIcon={()=> onShare()}
        textValue={promo}
      />
      </View>
  }


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      {topView()}

    {promoCode()}

        <View style={Styles.width90}>
        <CustomTextView
        containerStyle={Styles.faq}
        label={t('common:invite.faq')}
      />
      <View style={{backgroundColor:Colors.black,borderRadius:10}}>
      <CustomTextView
        containerStyle={Styles.ques}
        label={t('common:invite.whenWillRecv5')}
      />
        <CustomTextView
        containerStyle={Styles.ans}
        label={t('common:invite.whenWillRecvDesc')}
      />
       <CustomTextView
        containerStyle={Styles.ques}
        label={t('common:invite.whenWillRecv50')}
      />
        <CustomTextView
        containerStyle={Styles.ans}
        label={t('common:invite.whenWillRecvDesc50')}
      />
      </View>
        </View>

    </SafeAreaView>
  )
}
