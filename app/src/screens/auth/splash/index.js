import React, { useRef, useState } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//SECTION CUSTOM IMPORTS
import Styles from './styles';
import { AppConstants } from '../../../constants/appConstants';
import { DEVICE_WIDTH } from '../../../Utils/size';
import { Colors, Images } from '../../../../rsc/theme';
import SwipeButton from 'rn-swipe-button';
import { SCREEN_CONSTANT } from '../../../navigation/constant';


const { width, height } = Dimensions.get('screen');



export default function SplashSwitch({ navigation }) {
  const { onboarding } = AppConstants

  //REVIEW   LOGO Main View
  const Logo = () => {
    return (
      <View style={Styles.onboarding_Content}>
        <View style={Styles.onboarding_Img}>
          <FastImage
            style={Styles.logo}
            resizeMode={"contain"}
            source={Images.logo}
          />
        </View>
        <View style={Styles.bottomView}>
          <View style={Styles.iconRow}>
            <FontAwesome name={'angle-right'}
              style={[Styles.icon, { color: '#ffffff40' }]} />
            <FontAwesome name={'angle-right'}
              style={[Styles.icon, { color: '#ffffff70' }]} />
            <FontAwesome name={'angle-right'} style={Styles.icon} />
          </View>

          <SwipeButton
            onSwipeSuccess={() => setTimeout(() => {
              navigation.navigate(SCREEN_CONSTANT.LANGUAGE)
            }, 200)}
            railBackgroundColor={Colors.darkRed}
            thumbIconBackgroundColor={Colors.white}
            thumbIconBorderColor={Colors.darkRed}
            railBorderColor={Colors.darkRed}
            railFillBorderColor={Colors.darkRed}
            railFillBackgroundColor={Colors.darkRed}
            title=""
            titleColor={Colors.white}
            containerStyles={{ width: '50%', alignSelf: 'center' }}
            width={DEVICE_WIDTH * 0.4}
          />

        </View>
      </View>)
  };




  return (
    <View style={Styles.flex}>
      {Logo()}
    </View>
  );
}
