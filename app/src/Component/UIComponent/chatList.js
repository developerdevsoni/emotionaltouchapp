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
import { Colors, FontFamily } from '../../../rsc/theme';
import CustomTextView from './rc_textView';
import { SubmitButton } from './submitButton';
import FastImage from 'react-native-fast-image';
import { size } from '../../../rsc/theme/fonts';
import icons from '../../../rsc/theme/icons';

export const ChatList = props => {
  const { myPayments } = AppConstants
  const { img, isOnline, unseen, name, msg, onPress, time, item, isOther,index,verified } = props;
  return (<TouchableOpacity
    onPress={onPress}
    style={Styles.root}>
    <View style={{ width: '20%' }}>
      <View style={{ height: 60, width: 60, }}>
        <FastImage
          source={img}
          style={Styles.profile}
        />
        <View style={{ height: 17, width: 17, borderRadius: 10, borderWidth: 2, borderColor: Colors.blackBg, backgroundColor: isOnline ? color.green : color.darkRed, position: 'absolute', bottom: 4, right: 6 }} />

      </View>
    </View>
    <View style={{ width: '62%', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <CustomTextView
        containerStyle={{ fontFamily: FontFamily.medium, fontSize: size.size_16, color: Colors.white }}
        numberOfLines={1}
        label={name+' '}
      />
     {verified && <CustomTextView
      containerStyle={{ fontFamily: FontFamily.icon, fontSize: size.size_16, color: Colors.darkRed }}
      numberOfLines={1}
      label={icons.verify}
    />}
    </View>
      <CustomTextView
        containerStyle={Styles.msg}
        label={msg}
        numberOfLines={1}
      />
    </View>
    <View style={{ width: '20%', alignItems: 'flex-end', justifyContent: 'space-evenly' }}>
      <CustomTextView
        containerStyle={Styles.time}
        label={time}
        numberOfLines={1}
      />
      {unseen ?
        <View style={[Styles.unseenDiv,{backgroundColor:color.darkRed}]}>
          <CustomTextView
            containerStyle={Styles.unseenTxt}
            label={unseen}
            numberOfLines={1}
          />
        </View> :

        isOther ? <View style={Styles.unseenDiv}>
          <CustomTextView
            containerStyle={Styles.phn}
            label={icons.phone}
            numberOfLines={1}
          />
        </View> :
          <View style={Styles.unseenDiv}>
            <CustomTextView
            containerStyle={Styles.unseenTxt}
            label={''}
              numberOfLines={1}
            />
          </View>}
    </View>
  </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  root: {
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.lightRed,
    backgroundColor: Colors.blackBg,
    paddingVertical: 12,
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    borderRadius: 10
  },
  profile: {
    height: 55,
    width: 55,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  phn: {
    fontFamily: FontFamily.icon,
    fontSize: size.size_14,
    color: Colors.white
  },
  unseenDiv: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
    width: 25,
    height: 25,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'flex-end',
    marginRight: 2
  },
  unseenTxt: {
    fontFamily: FontFamily.bold,
    fontSize: 12,
    color: Colors.white
  },
  time: {
    fontFamily: FontFamily.regular,
    fontSize: 12,
    color: Colors.white,
    marginTop: 5
  },
  msg: {
    fontFamily: FontFamily.semibold,
    fontSize: 12,
    color: Colors.white,
    marginTop: 10
  },
});
