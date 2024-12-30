import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Share
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './styles';
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { useTranslation } from 'react-i18next';

import { TextBox } from '../../../Component/UIComponent';
import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Clipboard from '@react-native-clipboard/clipboard';
import icons from '../../../../rsc/theme/icons';

export default function InviteFriendListener({ navigation }) {
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const isFocused = useIsFocused()
  const [promo, setPromo] = React.useState('')
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;



  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={t('common:inviteListener.header')}
          subLabel={''}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
        />
      </View>
    );
  };


  const topView=()=>{
    return  <View style={{ flexDirection: 'row',justifyContent:'center' }}>
    <View style={[Styles.width50]}>
      <CustomTextView
        containerStyle={Styles.getText}
        label={t('common:inviteListener.youGet')}
      />
      <FastImage
        source={image.invite1}
        resizeMode='cover'
        style={Styles.logoImg}
      />
      <CustomTextView
        containerStyle={Styles.price}
        label={'20% OF THE USER’S FIRST RECHARGE'}
      />
    
    </View>
  

  </View>
  }

  const promoCode=()=>{
    return <View style={Styles.promoCodeDiv}>
    <TextBox
        // label={t('common:invite.code')}
        placeholder={t('common:inviteListener.code')}
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
      <View style={Styles.width90}>
      
      <View style={Styles.desc}>
    
        <CustomTextView
        containerStyle={Styles.ans}
        label={t('common:inviteListener.whenWillRecv')}
      />
      
      </View>
        </View>
    {promoCode()}

       

    </SafeAreaView>
  )
}
