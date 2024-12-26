// REVIEW for referance how to use this file
// import { sizeFont ,sizeWidth} from "../../../Utils/size"; //Please import this file whereaver you want to use
// <Text
// style={{justifyContent:'center',height: '100%',margin:sizeWidth(3),
// fontSize: sizeFont(19),fontFamily:Fonts.HanaleiRegular}}
// >Coming from Native Android Development, I proposed the React Native UI library at my workplace</Text>

import React from 'react';
import { Dimensions, StatusBar, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { isIphoneX } from 'react-native-iphone-x-helper';
// import Colors from './color';

const { width, height } = Dimensions.get('window');

const percentHeight = height / 100;
const percentWidth = width / 100;

const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

const deviceHeight =
  isIphoneX() || Platform.OS === 'android'
    ? standardLength - offset
    : standardLength;

// TODO This method use for width calculation
export const sizeWidth = (percent) => {
  return (
    percent * (percentWidth < percentHeight ? percentWidth : percentHeight)
  );
};

// TODO This method use for height calculation
export const sizeHeight = (percent) => {
  return (
    percent * (percentWidth > percentHeight ? percentWidth : percentHeight)
  );
};

// TODO This method use for font size calculation
export const sizeFont = (percent) => {
  var standardScreenHeight = 680;
  const heightPercent = (percent * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

// TODO: Return true when device is Portrait
export const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

// TODO: Return true when device is Landscape
export const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};

export const DEFAULT_FONT_SIZES = {
  XX_SMALL: sizeFont(10),
  X_SMALL: sizeFont(12),
  SMALL: sizeFont(13),
  MEDIUM: sizeFont(14),
  LARGE: sizeFont(15),
  X_LARGE: sizeFont(16),
  XX_LARGE: sizeFont(18),
  XXX_LARGE: sizeFont(20),
};

export const PIXEL_FONT_SIZES = {
  XXX_SMALL: 12,
  XX_SMALL: 14,
  X_SMALL: 16,
  SMALL: 18,
  MEDIUM: 20,
  LARGE: 22,
  X_LARGE: 24,
  XX_LARGE: 26,
  XXX_LARGE: 28,
};

export const LINE_HEIGHT = {
  XXX_SMALL: 14,
  XX_SMALL: 16,
  X_SMALL: 18,
  SMALL: 20,
  MEDIUM: 22,
  LARGE: 24,
  X_LARGE: 26,
  XX_LARGE: 28,
  XXX_LARGE: 30,
};

export const DEFAULT_SPACE = {
  XXX_SMALL: 3,
  XX_SMALL: 5,
  X_SMALL: 7,
  SMALL: 10,
  MEDIUM: 13,
  LARGE: 15,
  X_LARGE: 18,
  XX_LARGE: 20,
  XXX_LARGE: 25,
  XXXX_LARGE: 30,
};

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_STATUSBARHIGHT = getStatusBarHeight();
