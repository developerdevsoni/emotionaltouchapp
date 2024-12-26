import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';


//SECTION CUSTOM IMPORTS
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import { DEVICE_WIDTH } from '../../../rsc/theme/screenSizes';
import image from '../../../rsc/theme/image';
import { AppConstants } from '../../constants/appConstants';
import { Colors, FontFamily, Images } from '../../../rsc/theme';
import CustomTextView from './rc_textView';
import { SubmitButton } from './submitButton';
import FastImage from 'react-native-fast-image';
import { size } from '../../../rsc/theme/fonts';
import { useTranslation } from 'react-i18next';
import icons from '../../../rsc/theme/icons';

export const Listener = props => {
  const { myPayments } = AppConstants
  const { img,age,totalReviews,avgRating,exp_hours,topic, isOnline,gender,onPress, name,onPressAvatar, msg, time, item, index } = props;
  const { t, i18n } = useTranslation();

  const renderStar=(rate)=>{
   return [1,2,3,4,5].map((i)=>{
    if(rate >= i)
    {
    return <CustomTextView
      containerStyle={Styles.starF}
      label={icons.starF}
    />}
  else{
    return <CustomTextView
    containerStyle={Styles.starEmpty}
    label={icons.starEmpty}
  />}
    })
  
  }


  return (<View style={Styles.container}>
    <View style={{flexDirection:'row'}}>
    <View style={{ width: '20%' }}>
      <TouchableOpacity 
      onPress={onPressAvatar}
      style={{height: 64, width: 64,}}>
      <FastImage
    source={img? img:Images.logo}
    style={Styles.profile}
  />
   <View style={{height:18,width:18,borderRadius:10,borderWidth:2,borderColor:Colors.blackBg,backgroundColor:isOnline?color.green:color.darkRed,position:'absolute',bottom:4,right:2}}/>

      </TouchableOpacity>
    </View>
    <View style={Styles.ratingDiv}>
     <View style={Styles.rateRow}>
     <CustomTextView
        containerStyle={{ fontFamily: FontFamily.bold, fontSize: size.small, color: Colors.label }}
        numberOfLines={1}
        label={avgRating}
      />
        {renderStar(avgRating)}
        <CustomTextView
        containerStyle={{ fontFamily: FontFamily.bold, fontSize: size.small, color: Colors.label,marginLeft:5 }}
        numberOfLines={1}
        label={'('+totalReviews+')'}
      />
     </View>

     <View style={{flexDirection:'row', justifyContent:'space-between', width: '100%',alignSelf:'flex-end'}}>
      <CustomTextView
        containerStyle={Styles.name}
        numberOfLines={1}
        label={name}
      />
       <CustomTextView
        containerStyle={Styles.topic}
        label={topic}
        numberOfLines={1}
      />
      </View>
      <CustomTextView
        containerStyle={Styles.gender}
        label={gender+' - '+age+' Years'}
        numberOfLines={1}
      />
    </View>
   
    </View>
    <CustomTextView
        containerStyle={Styles.msg}
        numberOfLines={1}
        label={msg}
      />
      <View style={Styles.bottomSec}>
      <CustomTextView
        containerStyle={Styles.exp}
        numberOfLines={1}
        label={time ? t('common:messages.exp')+time ?time +'  Hours':'':''}
      />
      <View style={Styles.btnDiv}>
      <SubmitButton
      propsStyle={Styles.btn}
      txtStyle={{fontSize:size.size_14}}
      onPress={onPress}
      nextIcon={image.down}
      label={t('common:messages.talkNow')}
      />
      </View>

      </View>
  </View>
  );
};

const Styles = StyleSheet.create({
  topic: {
      fontFamily: FontFamily.bold,
      fontSize: size.size_14,
      color: Colors.label,
      marginTop: 5
    },
    gender:{ fontFamily: FontFamily.bold, fontSize: size.small, color: Colors.label,marginTop:0 },
    starEmpty: {
      fontFamily: fontsFamily.icon,
      fontSize: size.tiny,
      color: color.gold,
      marginLeft: 2
    },
    starF: {
      fontFamily: fontsFamily.icon,
      fontSize: size.small,
      color: color.gold,
      marginLeft: 2
    },
    container: {
      borderWidth: 1,
      borderColor: Colors.brownDusty,
      backgroundColor: Colors.blackBg,
      paddingBottom: 20,
      width: DEVICE_WIDTH * 0.9,
      alignSelf: 'center',
      marginTop: 10,
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 15
    },
    name: {
      fontFamily: FontFamily.bold,
      fontSize: size.size_16,
      color: Colors.white
    },
    msg: {
      fontFamily: FontFamily.bold,
      fontSize: size.size_14,
      color: Colors.white,
      marginVertical: 8
    },
    btn: {
      width: DEVICE_WIDTH * 0.32,
      backgroundColor: color.darkRed,
      marginHorizontal: 10,
      flexDirection: 'row',
      paddingHorizontal: 15,
      alignItems: 'center'
    },
    btnDiv: {
      width: '45%',
      justifyContent: 'flex-end'
    },
    profile: {
      height: 60,
      width: 60,
      borderRadius: 30
    },
    exp: {
      fontFamily: FontFamily.bold,
      fontSize: size.size_14,
      color: Colors.label
    },
    bottomSec: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    ratingDiv: {
      width: '78%',
      alignItems: 'flex-start',
      marginLeft: 10,
      marginTop: 2
    },
    rateRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '70%',
      alignItems: 'center'
    },

 



});
