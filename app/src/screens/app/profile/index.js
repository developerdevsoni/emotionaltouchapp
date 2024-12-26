import React, { useContext } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Share,
  Linking,
  DeviceEventEmitter
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import { DEVICE_WIDTH } from '../../../Utils/size';
import color from '../../../../rsc/theme/color';
import { SCREEN_CONSTANT } from '../../../navigation/constant';
import FastImage from 'react-native-fast-image';
import { ScrollViewComponent } from '../../../Component/basicComponent';
import PopupModal from '../../../Component/UIComponent/rc_modal';
import icons from '../../../../rsc/theme/icons';
import { TextBox } from '../../../Component/UIComponent';
import { DataManager } from '../../../Utils/dataManager';
import { access_keys } from '../../../Utils/dataManagerKeys';
import { deleteAccountAction, getProfileAction, signUpAction } from '../../../Redux/Actions/authActions';

export default function Profile({ navigation }) {
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const profile = useSelector(state => state.authReducer.profileData);
  console.log(profile,'ppprofile')

  const [deleteModal, setDeleteModalVisible] = React.useState(false)
  const [logoutModal, setLogoutModal] = React.useState(false)

  const [listenerModal, setListenerModal] = React.useState(false)
  const [thanksModal, setThanksModal] = React.useState(false)

  const [profileModal, setProfileModal] = React.useState(false)
  const [messagePopup, setMessagePopup] = React.useState(false)



  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;
  let profileOptions = [
    {
      label: t('common:profile.beAListener'),
      nav: '',
      img: icons.listen,
      onPress: () => setListenerModal(true),
    },
    {
      label: t('common:profile.changeLang'),
      nav: '',
      img: icons.language,
      onPress: () => navigation.navigate(SCREEN_CONSTANT.LANGUAGESET, { type: 'app' }),
    },
    {
      label: t('common:profile.refer'),
      nav: '',
      img: icons.earn,
      onPress: () => navigation.navigate(SCREEN_CONSTANT.INVITE),
    },
    {
      label: t('common:profile.shareApp'),
      nav: '',
      img: icons.share,
      onPress: () => onShare()
    },
  ]

  let profileOptionsListener = [
   
    {
      label: t('common:profile.changeLang'),
      nav: '',
      img: icons.language,
      onPress:()=> console.log('ds')
      // onPress: () => navigation.navigate(SCREEN_CONSTANT.LANGUAGESET, { type: 'app' }),
    },
    {
      label: t('common:profile.refer'),
      nav: '',
      img: icons.earn,
      onPress:()=> console.log('ds')

      // onPress: () => navigation.navigate(SCREEN_CONSTANT.INVITE_LISTENER),
    },
    {
      label: t('common:profile.shareApp'),
      nav: '',
      img: icons.share,
      onPress: () => onShare()
    },
    {
      label: t('common:profile.myChatTemp'),
      nav: '',
      img: icons.edit,
      onPress:()=> console.log('ds')

      // onPress: () => setMessagePopup(true),
    },
    {
      label: t('common:profile.giftListener'),
      nav: '',
      img: icons.listen,
      onPress:()=> console.log('ds')

      // onPress: () => navigation.navigate(SCREEN_CONSTANT.GIFT_LISTENER),
    },
  ]

  let communicateOptions = [
    {
      label: t('common:profile.setting'),
      nav: '',
      img: icons.setting,
      onPress: () => Linking.openSettings(),
    },
    {
      label: t('common:profile.userSupport'),
      nav: '',
      // onPress: () => navigation.navigate(SCREEN_CONSTANT.USER_SUPPORT),
      onPress:()=> console.log('ADD ABOVE'),
      img: icons.support
    },
    {
      label: t('common:profile.report'),
      nav: '',
      img: icons.report,
      onPress: () => Linking.openURL('mailto:support@example.com')
    },
    // {
    //   label: t('common:profile.switch'),
    //   nav: '',
    //   img: icons.switch
    // },
    {
      label: t('common:profile.delete'),
      nav: '',
      onPress: () => setDeleteModalVisible(true),
      img: icons.delete


    },
    {
      label: t('common:profile.terms'),
      nav: '',
      img: icons.terms,


    },
    {
      label: t('common:profile.logout'),
      nav: '',
      img: icons.logout,
      // onPress: () => { auth() }
      onPress: () => setLogoutModal(true),


    },
  ]


  //console.log(languageCode, 'teststst')


  React.useEffect(()=>{
    DataManager.getUserId().then((res)=>{
      console.log(res,'userID')
      if(res!=null)
      {
        dispatch(getProfileAction(res))
      }
      else{
        console.log('---PROFILE---')
      }
    })
  },[])


  React.useEffect(()=>{
    const subscription = DeviceEventEmitter.addListener("Logout", async (e) => {
      // do something
      DataManager.multiRemoveData([access_keys.access_token])
      auth()

    })
    return () => {
      subscription.remove();
    };
    },[])


  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={t('common:profile.header')}
          subLabel={''}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
          // rightIcon={icons.vert}
          rightIconPress={() => navigation.navigate(SCREEN_CONSTANT.EDIT_PROFILE)}
        />
      </View>
    );
  };

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



  const offlineListener=()=>{
    return <PopupModal
    style={{ backgroundColor: color.brownDusty }}
    visible={messagePopup}
    // icon={icons.clock}
    onClose={() => setMessagePopup(false)}
    heading={t('common:profile.personalised')}
    icon={icons.edit}
  >
    <CustomTextView
      containerStyle={Styles.subHeader}
      label={t('common:profile.allset')}
    />

    <TextBox
      multiline={true}
      placeholder={t('common:chat.placeholder')}
      onType={(t) => console.log('msg')}
      textBoxContainerStyle={Styles.input}
      textValue={''}
      maxLength={200}
    />

  
    <View style={{ marginVertical: 10,alignSelf:'center' }}>
      <SubmitButton
        onPress={() => setMessagePopup(false)}
        propsStyle={[Styles.yesBtn]}
        label={t('common:profile.submit')}
      />
    </View>
  </PopupModal>
  }





  const MyProfileView = () => {
    return <>

      <TouchableOpacity
        disabled={profile?.profile_step!=3}
        onPress={()=>navigation.navigate(SCREEN_CONSTANT.EDIT_PROFILE)}
        style={Styles.myProfile}>
        <View style={Styles.logoProfileRow}>
          <FastImage
            style={Styles.logoImg}
            source={profile?.profile_photo ?{uri:profile.profile_photo}:  image.logoUser}
          />
          <CustomTextView
            containerStyle={Styles.myProfileTxt}
            numberOfLines={1}
            label={t('common:profile.header')}

          />

        </View>
        <View style={Styles.rightIconDiv}>
          <FastImage
            style={Styles.rightIcon}
            source={image.right}
            resizeMode='contain'
            tintColor={color.label}

          />
        </View>
      </TouchableOpacity>
    </>
  }

  const NameView = () => {
    return <View style={Styles.nameContainer}>
      <TouchableOpacity
      // onPress={()=> navigation.navigate(SCREEN_CONSTANT.COMPLETE_PROFILE)}
      style={{ width: DEVICE_WIDTH * 0.25 }}>
        <FastImage
            source={profile?.profile_photo ?{uri:profile.profile_photo}:  image.logoUser}
            style={Styles.nameLogo}
        />

      </TouchableOpacity>
      <View style={Styles.namePhoneDiv}>
        <CustomTextView
          containerStyle={Styles.name}
          numberOfLines={1}
          label={profile?.full_name}
        />
        <CustomTextView
          containerStyle={Styles.phone}
          label={profile?.phone_number}
          numberOfLines={1}
        />
      </View>

    </View>
  }

  const renderList = (arr) => {
    return arr.map((i, k) => {
      return <TouchableOpacity
        onPress={() => i.onPress && i?.onPress()}
        style={Styles.listView}>
        <View style={Styles.logoProfileRow}>

          <CustomTextView
            containerStyle={Styles.icon}
            numberOfLines={1}
            label={i.img}
          />
          <CustomTextView
            containerStyle={Styles.listTxt}
            numberOfLines={1}
            label={i.label}

          />

        </View>
        <View style={Styles.rightIconDiv}>
          <FastImage
            style={Styles.rightIcon}
            source={image.right}
            resizeMode='contain'
            tintColor={color.label}
          />
        </View>
      </TouchableOpacity>
    })

  }

  const deletePopup = () => {
    return <PopupModal
      style={{ backgroundColor: color.brownDusty }}
      visible={deleteModal}
      onClose={() => setDeleteModalVisible(false)}
      heading={t('common:profile.delete')}
      img={image.delete}
      icon={icons.delete}
    >
      <CustomTextView
        containerStyle={Styles.deleteAlert}
        label={t('common:profile.deleteAlert')}
      />
      <View style={Styles.deleteBtns}>
        <SubmitButton
          onPress={() =>{ setDeleteModalVisible(false), dispatch(deleteAccountAction()) }}
          propsStyle={Styles.yesBtn}
          label={t('common:profile.yes')} />
        <SubmitButton
          onPress={() => setDeleteModalVisible(false)}
          propsStyle={Styles.noBtn}
          label={t('common:profile.no')} />
      </View>

    </PopupModal>
  }

  const logoutPopup = () => {
    return <PopupModal
      style={{ backgroundColor: color.brownDusty }}
      visible={logoutModal}
      onClose={() => setLogoutModal(false)}
      heading={t('common:profile.logout')}
      // img={image.delete}
      icon={icons.logout}
    >
      <CustomTextView
        containerStyle={Styles.deleteAlert}
        label={t('common:profile.logoutAlert')}
      />
      <View style={Styles.deleteBtns}>
        <SubmitButton
          onPress={() =>{ setLogoutModal(false),DataManager.multiRemoveData([access_keys.access_token]),auth()}}
          propsStyle={Styles.yesBtn}
          label={t('common:profile.yes')} />
        <SubmitButton
          onPress={() => setLogoutModal(false)}
          propsStyle={Styles.noBtn}
          label={t('common:profile.no')} />
      </View>

    </PopupModal>
  }

  const myProfilePopup = () => {
    return <PopupModal
      style={{ backgroundColor: color.brownDusty }}
      visible={profileModal}
      onClose={() => setProfileModal(false)}
      heading={t('common:profile.profileHeaderUser')}
      icon={icons.user}
    >
      <CustomTextView
        containerStyle={Styles.deleteAlert}
        label={t('common:profile.descProfilePopup')}
      />
      <View style={Styles.deleteBtns}>
        <SubmitButton
          onPress={() => setProfileModal(false)}
          propsStyle={Styles.yesBtn}
          label={t('common:profile.ok')} />
      </View>
    </PopupModal>
  }

  const listenerPopup = () => {
    return <PopupModal
      style={{ backgroundColor: color.brownDusty }}
      visible={listenerModal}
      onClose={() => setListenerModal(false)}
      heading={t('common:profile.listenerPopupHeader')}
      icon={icons.listen}

    >
      <CustomTextView
        containerStyle={Styles.deleteAlert}
        label={t('common:profile.listenerPopupDesc')}
      />

      <View style={Styles.deleteBtns}>
        <SubmitButton
          propsStyle={Styles.noBtn}
          onPress={() => setListenerModal(false)}
          label={t('common:profile.cancel')} />
        <SubmitButton
          onPress={() => { setListenerModal(false), setThanksModal(true) }}
          propsStyle={Styles.interested}

          label={t('common:profile.btnListener2')} />
      </View>

    </PopupModal>
  }

  const thanksPopup = () => {
    return <PopupModal
      style={{ backgroundColor: color.brownDusty }}
      visible={thanksModal}
      onClose={() => setThanksModal(false)}
      heading={''}
      icon={icons.starF}

    >

      <FastImage
      source={image.success}
      style={Styles.logoThanks}
      
      />

      <CustomTextView
        containerStyle={Styles.thanks}
        label={t('common:profile.thanks')}
      />
      <CustomTextView
        containerStyle={Styles.deleteAlert}
        label={t('common:profile.thanksDesc')}
      />
      <View  style={{marginVertical:20}}>
      <SubmitButton
       
        onPress={() =>{ setThanksModal(false),navigation.navigate(SCREEN_CONSTANT.BE_A_LISTENER)}}
        label={t('common:profile.ok')} />
</View>
    </PopupModal>
  }

  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      <ScrollViewComponent>
        <View style={Styles.width90}>
          {NameView()}
          {MyProfileView()}
        </View>
        <View>
          <CustomTextView
            containerStyle={Styles.listHead}
            numberOfLines={1}
            label={t('common:profile.onlyForyou')}
          />
          {renderList(profileOptionsListener)}
        </View>
        <View>
          <CustomTextView
            containerStyle={Styles.listHead}
            numberOfLines={1}
            label={t('common:profile.comm')}
          />
          {renderList(communicateOptions)}
        </View>
     {listenerPopup()}
     {myProfilePopup()}
     {deletePopup()}
     {thanksPopup()}
     {logoutPopup()}
     {offlineListener()}
      </ScrollViewComponent>
    </SafeAreaView>
  )
}
