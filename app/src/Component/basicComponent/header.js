import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  I18nManager,
  Modal,
  Dimensions,
} from 'react-native';
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import image from '../../../rsc/theme/image';
import CustomTextView from '../UIComponent/rc_textView';
import {navigateBack, navigation} from '../../../src/Utils/navigationService';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomAlert } from '../../../rsc/theme/customAlert';
import { AuthContext } from '../../navigation/context';
import { SubmitButton } from '../UIComponent';
import { AppConstants } from '../../constants/appConstants';
import FastImage from 'react-native-fast-image';
import { Images } from '../../../rsc/theme';
import { DataManager } from '../../Utils/dataManager';
import { access_keys } from '../../Utils/dataManagerKeys';
import { DEVICE_WIDTH } from '../../Utils/size';
import { size } from '../../../rsc/theme/fonts';
import styles from '../UIComponent/topTab/styles';
import icons from '../../../rsc/theme/icons';

const {width, height} = Dimensions.get('screen');

export default function Header(props) {
  const useNav=useNavigation()
  const {
    containerStyle,
    profileImg,
    barcodeIcon,
    logouticon,
    onPressBack,
    isBack,
    label,
    subLabel,
    isWallet,
    labelStyle,
    isOnlyName,
    smallName,
    backIconStyle,
    clearAll,
    labelStyleView,
    dateText,
    dateShow,
    favoriteIcon,
    createIcon,
    rightIcon,
    likeIcon,
    rightIconPress,
    rightIcon2,
    rightIconPress2,
    onNotificationPress,
  } = props;
  // const nav=useNavigation()

  const [logoutVisible,setVisible]=React.useState(false)
  const { header } = AppConstants
  const {auth,app} =useContext(AuthContext)
  const onLogout=async()=>{
    setVisible(false)
    CustomAlert('Logout Successfully')
    await DataManager.multiRemoveData([access_keys.access_token])
    auth()
  }

  const logoutPopup = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={logoutVisible}
        onRequestClose={() => {
          setVisible(!logoutVisible)
        }}>
        <View style={Style.modalViewMain}>
          <View style={Style.centeredView}>
            <View>
              <FastImage
              style={{ height:60,width:60,alignSelf:'center',marginBottom:20}}
              source={Images.nutrinexLogo}
              />
              <CustomTextView
                containerStyle={Style.popupTitle}
                label={header.logoutQ}
              />
             

              <View style={{ flexDirection: 'row', marginHorizontal: 15, width: '92%', alignSelf: 'center' }}>
                <View style={{ width: '50%' }}>
                  <SubmitButton
                    onPress={() => setVisible(false)}
                    label={header.cancel} />
                </View>
                <View style={{ width: '50%' }}>
                  <SubmitButton
                    onPress={() => onLogout()}
                    label={header.yes} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
  return (
    <View style={[Style.container, containerStyle]}>
      {/* {profileImg && (
        <TouchableOpacity onPress={() => useNav.navigate('MyProfile')}>
          <Image source={image.profileImg} style={[Style.profileImg]} />
        </TouchableOpacity>
      )} */}

      {isBack && (
        <TouchableOpacity
          style={{left:'6%',position:'absolute',top:2,zIndex:999999999}}
          onPress={() => (onPressBack ? onPressBack() : useNav.goBack())}>
          {/* <Image
            source={image.prevIcon}
            resizeMode="cover"
            style={[Style.backIcon, backIconStyle]}
          /> */}
          <CustomTextView
          label={'s'}
          containerStyle={[Style.backIcon, backIconStyle]}

          />
        </TouchableOpacity>
      )}

     
        <View style={[{width: DEVICE_WIDTH *0.88,alignSelf:'center',}, labelStyleView]}>
          <Text numberOfLines={1} style={[Style.label, labelStyle]}>
            {label}
          </Text>
          {subLabel && <Text style={Style.dateText}>{subLabel}</Text>}
        </View>
        {rightIcon2 && (
        <TouchableOpacity
          style={{right:'22%',position:'absolute',top:-5,zIndex:999999999,borderWidth:1,borderRadius:5,borderColor:color.brownDusty,padding:10}}
          onPress={rightIconPress2}>
           <CustomTextView
             containerStyle={Style.rightIcon}
             label={rightIcon2}
          />
        </TouchableOpacity>
      )}
        {rightIcon && (
        <TouchableOpacity
          style={{right:'6%',position:'absolute',top:-5,zIndex:999999999,borderWidth:1,borderRadius:5,borderColor:color.brownDusty,padding:10}}
          onPress={rightIconPress}>
           <CustomTextView
             containerStyle={Style.rightIcon}
             label={rightIcon}
          />
        </TouchableOpacity>
      )}
      {isWallet && <View style={Style.wallet}>
         
            <CustomTextView
             containerStyle={Style.walletIcon}
             label={icons.wallet}
          />
           <CustomTextView
             containerStyle={Style.walletText}
             label={'₹50.00'}
          />
        </View>}

    
      {logoutPopup()}
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    marginVertical:20,
    width: '100%',
    backgroundColor: color.transparent,
    paddingHorizontal: 20,
    alignSelf:'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 9,
  },
  profileImg: {
    width: 40,
    height: 40,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barcodeIcon: {
    width: 19,
    height: 19,
  },
  createIcon: {
    width: 18,
    height: 21,
    marginRight: 15,
  },
  favoriteIcon: {
    width: 18,
    height: 21,
  },
  notificationIcon: {
    width: 18,
    height: 21,
    marginLeft: 15,
  },
  likeIcon: {
    height: 18,
    width: 20,
    tintColor: color.dakrBlue,
  },
  backIcon: {
    fontSize:size.extraLarge,
    color:color.white,
    fontFamily:fontsFamily.icon
  },
  walletIcon: {
    fontSize:size.extraLarge,
    color:color.darkRed,
    fontFamily:fontsFamily.icon
  },
  rightIcon: {
    fontSize:size.extraLarge,
    fontFamily:fontsFamily.icon,
    color:color.white,
    
  },
  label: {
    fontSize: size.extraLarge,
    textAlign:'center',
    color: color.white,
    fontFamily:fontsFamily.bold,
    opacity: 1,
  },
  smallNameText: {
    fontSize: size.size_14,
    fontFamily: fontsFamily.regular,
    color: color.dakrBlue,
  },
  clearAllBtn: {
    fontFamily: fontsFamily.regular,
    fontSize: size.size_14,
    color: color.dakrBlue,
  },
  modalViewMain: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  centeredView: {
    backgroundColor: color.white,
    width: '100%',
    borderRadius: 12,
    padding: 20,
  },
  popupTitle: {
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: size.size_16,
    fontFamily: fontsFamily.regular,
    color: color.dakrBlack,
  },
  dateText: {
    fontFamily: fontsFamily.regular,
    color: color.grey77,
    textAlign:'center',
    fontSize: 13,
    marginTop: 5,
  },
  wallet:{width:'25%',right:15,position:'absolute',flexDirection:'row',borderWidth:1,height:48,alignItems:'center',justifyContent:'space-evenly', borderRadius:8,borderColor:color.brownDusty},
  walletText:{fontFamily:fontsFamily.bold,fontSize:14,color:color.white},

});
