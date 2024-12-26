import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

//SECTION Custom Imports
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import CustomTextView from './rc_textView';
import { AppConstants } from '../../constants/appConstants';
import FastImage from 'react-native-fast-image';
import { size } from '../../../rsc/theme/fonts';

export const TransformationListCard = props => {
  const{transformation}=AppConstants
  const {propsStyle, label, onPress, image, description, lost,title,item,index} = props;
  return (
    <View style={[Styles.LatestTransformation]} key={item.id}>
    <View>
    <FastImage
          source={{
            uri:image
          }}
          style={Styles.beforeImg}
          resizeMode="cover"
        />
    <View style={Styles.imageBeforeAfter}>

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
    </View>
    <View style={Styles.textTransformation}>
      <Text style={Styles.nameTransformation}>{title}</Text>
      <Text style={Styles.lostTransformation}>{lost}</Text>
      <Text style={Styles.desTransformation}>{description}</Text>
    </View>
  </View>
  );
};

const Styles = StyleSheet.create({
   //REVIEW Transformation Recipes Box Style
   transformationView: {
    margin: 20,
  },
  LatestTransformation: {
    backgroundColor: color.white,
    borderRadius: 12,
    marginHorizontal: 20,

    marginBottom: 20,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  imageBeforeAfter: {
    flexDirection: 'row',
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
    width:'100%',
    borderTopLeftRadius: 12,
  },
  textTransformation: {
    padding: 20,
    flexDirection: 'column',
  },
  nameTransformation: {
    color: color.dakrBlack,
    fontSize: size.size_16,
    fontFamily: fontsFamily.montserratMedium,
    marginRight: 5,
  },
  lostTransformation: {
    fontFamily: fontsFamily.montserratRegular,
    fontSize: size.size_14,
    color: color.lightRed,
    marginTop: 10,
  },
  desTransformation: {
    color: color.grey79,
    lineHeight: 24,
    fontFamily: fontsFamily.montserratRegular,
    marginTop: 15,
  },
});
