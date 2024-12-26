import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

//SECTION - CUSTOM IMPORTS
import color from '../../../rsc/theme/color';
import image from '../../../rsc/theme/image';

export const CheckBox = props => {
  const {label, onPressCheckBox, containerStyle, value, isError, labelStyle} =
    props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[Style.container, containerStyle]}
      onPress={() => onPressCheckBox()}>
      <View style={[Style.checkBox, isError && {borderColor: color.error}]}>
        {value && (
          <Image source={image.checkIcon} style={Style.checkIconImageStyle} />
        )}
      </View>
      <Text style={[fontStyle.textInputNormalLabel, Style.label, labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkBox: {
    height: 16,
    width: 16,
    borderWidth: 1,
    borderColor: '#79ACBE',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
    opacity: 1,
    color: '#475154',
  },
  checkIconImageStyle: {height: 7, width: 9},
});
