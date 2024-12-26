import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

//SECTION Custom Imports
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import { DEVICE_WIDTH } from '../../../rsc/theme/screenSizes';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import CustomTextView from './rc_textView';
import { FontFamily } from '../../../rsc/theme';
import { size } from '../../../rsc/theme/fonts';

export const TransactionCard = props => {

  const {propsStyle,amount,perMin,time, reason,price, onPress,item,index} = props;
  return (
    <View style={{ backgroundColor: color.blackBtn,  marginHorizontal: DEVICE_WIDTH * 0.05, borderRadius: 10, padding: 20,marginTop:20 }}>
       <CustomTextView
      numberOfLines={1}
      containerStyle={Styles.time}
      label={time}
    />
    <CustomTextView
      numberOfLines={1}
      containerStyle={Styles.amounttrans}
      label={amount}
    />
    <CustomTextView
      numberOfLines={1}
      containerStyle={Styles.reason}
      label={reason}
    />
    <CustomTextView
      numberOfLines={1}
      containerStyle={Styles.reason}
      label={perMin}
    />
    <View style={{flexDirection:'row',backgroundColor:color.blackLight,borderWidth:1,borderColor:color.darkRed,padding:10,borderRadius:10,marginTop:15,marginBottom:5}}>
    <CustomTextView
      numberOfLines={1}
      containerStyle={Styles.totalAmountt}
      label={price}
    />
    </View>
  </View>
  );
};

const Styles = StyleSheet.create({
  cardContainer: {
    width: DEVICE_WIDTH * 0.4,
    // alignItems:'center',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: color.brownDusty
  },
  text: {
    zIndex: 9,
    paddingVertical: 20,
    fontSize: 14,
    textAlign: 'left',
    color: color.white,
    fontFamily: fontsFamily.bold,
  },
  amounttrans: {
    fontSize: size.large,
    fontFamily: FontFamily.bold,
    color: color.white
  },
  time: {
    fontSize: size.small,
    fontFamily: FontFamily.semibold,
    color: color.label,
    position: 'absolute',
    right: 15,
    top: 15
  },
  reason: {
    marginTop: 4,
    fontSize: size.size_16,
    fontFamily: FontFamily.semibold,
    color: color.label
  },
  totalAmountt: {
    fontSize: size.size_14,
    fontFamily: FontFamily.bold,
    color: color.white
  },
});
