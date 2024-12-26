// REVIEW for referance how to use this file
// import { sizeFont ,sizeWidth} from "../../../Utils/size"; //Please import this file whereaver you want to use
// <Text
// style={{justifyContent:'center',height: '100%',margin:sizeWidth(3),
// fontSize: sizeFont(19),fontFamily:Fonts.HanaleiRegular}}
// >Coming from Native Android Development, I proposed the React Native UI library at my workplace</Text>

import {Dimensions, StatusBar, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {isIphoneX} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');

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
export const sizeWidth = percent => {
  return (
    percent * (percentWidth < percentHeight ? percentWidth : percentHeight)
  );
};
// TODO This method use for height calculation
export const sizeHeight = percent => {
  return (
    percent * (percentWidth > percentHeight ? percentWidth : percentHeight)
  );
};
// TODO This method use for font size calculation
export const sizeFont = percent => {
  var standardScreenHeight = 680;
  const heightPercent = (percent * deviceHeight) / standardScreenHeight;

  return Math.round(heightPercent);
};

export const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
export const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_STATUSBARHIGHT = getStatusBarHeight();
