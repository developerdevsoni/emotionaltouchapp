import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

//SECTION custom IMPORTS
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import { DEVICE_WIDTH } from '../../../rsc/theme/screenSizes';
import CustomTextView from './rc_textView';
import { AppConstants } from '../../constants/appConstants';
import FastImage from 'react-native-fast-image';
import image from '../../../rsc/theme/image';
import { size } from '../../../rsc/theme/fonts';

export const TransformationCard = props => {
  const{transformation}=AppConstants
  const {propsStyle,  onPress, image, lost,title,item,index} = props;
  return (
    <View
    style={[
      Styles.LatestTransformation,
      index === 1 &&
      Styles.LatestTransformationLast,
      { width: DEVICE_WIDTH - 40 },
    ]}
    key={item.id}>
    <View style={Styles.imageBeforeAfter}>
    <FastImage
          source={{
            uri:image
          }}
          style={Styles.beforeImg1}
          resizeMode="cover"
        />
        <View style={{flexDirection:'row'}}>
        <View style={Styles.imgView49}>
        <View style={Styles.labelBeforeAfterView}>
          <CustomTextView
            label={transformation.before}
            containerStyle={Styles.labelBeforeAfter}
          />
        </View>
      </View>
      <View style={Styles.imgView}>
      
        <View style={Styles.labelBeforeAfterView}>
          <CustomTextView
            label={transformation.after}
            containerStyle={Styles.labelBeforeAfter}
          />
        </View>
      </View>
        </View>
      {/* <View style={Styles.imgView}>
        <FastImage
          source={{
            uri: 'https://assets.bonappetit.com/photos/57bf319d6a6acdf3485df80b/3:2/w_3000,h_2000,c_limit/mise-en-place-tray-1.jpg',
          }}
          style={Styles.beforeImg}
          resizeMode="cover"
        />
        <View style={Styles.labelBeforeAfterView}>
          <CustomTextView
            label={transformation.before}
            containerStyle={Styles.labelBeforeAfter}
          />
        </View>
      </View>
      <View style={Styles.imgView}>
        <FastImage
          source={{
            uri: 'https://assets.bonappetit.com/photos/57bf319d6a6acdf3485df80b/3:2/w_3000,h_2000,c_limit/mise-en-place-tray-1.jpg',
          }}
          style={Styles.afterImg}
          resizeMode="cover"
        />
        <View style={Styles.labelBeforeAfterView}>
          <CustomTextView
            label={transformation.after}
            containerStyle={Styles.labelBeforeAfter}
          />
        </View>
      </View> */}
    </View>
    <View style={Styles.textTransformation}>
      <Text style={Styles.nameTransformation}>{title}</Text>
      <Text 
      numberOfLines={1}
      style={Styles.lostTransformation}>{lost}</Text>
    </View>
  </View>
  );
};

const Styles = StyleSheet.create({
   //REVIEW Transformation Recipes Box Style
   LatestTransformation: {
    marginLeft: 20,
    backgroundColor: color.white,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  LatestTransformationLast: {
    marginRight: 20,
  },
  imageBeforeAfter: {
    // flexDirection: 'row',
  },
  imgView: {
    width: '50%',
    position: 'relative',
  },
  imgView49: {
    width: '49%',
    position: 'relative',
  },
  labelBeforeAfter:{
    color:color.white,  
      fontSize: 13,
    fontFamily: fontsFamily.montserratRegular
  },
  labelBeforeAfterView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(11, 20, 96, 0.8)',
    color: color.white,
    fontSize: 13,
    fontFamily: fontsFamily.montserratRegular,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  afterImg: {
    height: 200,
    borderTopRightRadius: 12,
  },
  beforeImg: {
    height: 200,
    borderTopLeftRadius: 12,
  },
  beforeImg1: {
    height: 200,
    width:'100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,

  },
  textTransformation: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width:'95%',
    overflow:'hidden'
  },
  nameTransformation: {
    color: color.dakrBlack,
    fontSize: 17,
    fontFamily: fontsFamily.montserratMedium,
    marginRight: 5,
  },
  lostTransformation: {
    fontFamily: fontsFamily.montserratRegular,
    fontSize: size.size_14,
    width:'78%',
    color: color.grey79,
  }
});
