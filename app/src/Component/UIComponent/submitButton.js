import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  I18nManager,
  Image,
  ActivityIndicator,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import image from '../../../rsc/theme/image';
import { DEVICE_WIDTH } from '../../Utils/size';
import { size } from '../../../rsc/theme/fonts';

export const SubmitButton = props => {
  const {propsStyle,isLoading, label, onPress, disable, nextIcon, txtStyle,onLongPress} = props;
  return (
  
    <TouchableOpacity
      disabled={disable}
      style={[Style.buttonNext, propsStyle, {opacity: disable ? 1 : 1}]}
      onPress={() => (onPress ? onPress() : '')}>
        
     {isLoading ? 
      <ActivityIndicator
      size={'small'}
      />:
      <Text style={[Style.buttonNextText, txtStyle]}>{label}</Text>}

      {nextIcon && (
        <Image
          style={Style.nextIconStyle}
          resizeMode="contain"
          source={nextIcon}
        />
      )}
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  buttonNext: {
    backgroundColor: color.darkRed,
    paddingVertical: 12,
    marginHorizontal:DEVICE_WIDTH*0.15,
    borderRadius: 30,
    marginTop: 10,
    shadowColor: color.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonNextText: {
    color: color.white,
    textAlign: 'center',
    fontFamily: fontsFamily.bold,
    fontSize: size.size_16,
  },
  nextIconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
});
