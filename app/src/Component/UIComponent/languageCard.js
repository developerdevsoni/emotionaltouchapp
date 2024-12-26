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

export const LanguageCard = props => {

  const {propsStyle, selected,label, onPress,item,index} = props;
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[Styles.cardContainer,selected &&{borderColor:color.darkRed,backgroundColor:color.blackLight}]}>
      <CustomTextView
      label={label}
      containerStyle={Styles.text}
      />
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
 cardContainer:{
    width:DEVICE_WIDTH*0.4, 
    // alignItems:'center',
    borderRadius:8,
    justifyContent:'center',
    paddingHorizontal:20,
    marginVertical:10,
    borderWidth:1,
    borderColor:color.brownDusty
},
 text:{ 
    zIndex: 9,
    paddingVertical: 20,
    fontSize:14,
    textAlign:'left',
    color: color.white,
    fontFamily: fontsFamily.bold,}
});
