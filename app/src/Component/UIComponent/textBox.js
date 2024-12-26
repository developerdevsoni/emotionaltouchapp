/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  Image,
  Text,
  Keyboard,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import color from '../../../rsc/theme/color';
import { useToast } from 'react-native-toast-notifications';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import { Colors } from '../../../rsc/theme';
import CustomTextView from './rc_textView';
import { size } from '../../../rsc/theme/fonts';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_CONSTANT } from '../../navigation/constant';

export const TextBox = props => {
  const toast = useToast();
  const {
    label,
    imageName,
    textValue,
    onType,
    isSearch,
    imageIconStyle,
    isSecure,
    containerStyle,
    isFiftyPresent,
    isRequire,
    validationMessage,
    rightIcon,
    rightIcon2,
    onPressRightIcon,
    onPressRightIcon2,
    rightIconStyle,
    isRightIconDisable,
    isPicker,
    keyboardType,
    placeholder,
    textBoxContainerStyle,
    maxLength,
    editable,
    labelText,
    multiline,
    textInput,
    leftIcon,
    isApply
  } = props;
  const inputEl2 = useRef(null);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (textValue !== '') {
      // setIsFocused(true);
      startAnimation(-20);
    }
  }, []);
  const nav=useNavigation()

  useEffect(() => {
    if (textValue) {
      startAnimation(-20);
      setIsFocused(false);
    }
    else{
      startAnimation(-20);
      setIsFocused(false);
    }
  }, [textValue]);

  const handleFocus = () => {
    
    startAnimation(-20);
    setIsFocused(true);
    if(isSearch)
    {
      Keyboard.dismiss()
      nav.navigate(SCREEN_CONSTANT.SEARCH)
    }
  };
  const handleBlur = () => {
    if (textValue === '') {
      startAnimation(0);
      setIsFocused(false);
    }
    else{
      setIsFocused(false);

    }
  };

  const startAnimation = toValue => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start(() => { });
  };
  return (
    <View style={[containerStyle]}>
      {label && <Text style={[Style.textBoxLabel, labelText]}>{label}</Text>}
      <View style={[Style.containerFocused, textBoxContainerStyle, isFocused &&  {borderColor:color.darkRed}]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            isPicker ?  onPressRightIcon(): inputEl2.current.focus();
          }}
          style={[
            {
              width: '100%',
              justifyContent: 'center'
            },
          ]}>
              {leftIcon &&
            <View
              style={{
                position: 'absolute',
                height: 20,
                width: 20,
                left: 2,
                alignSelf: 'center',
                zIndex: 99999999,
              }}>
              <TouchableOpacity
                style={Style.rightIcon}

                onPress={onPressRightIcon}
              >
                <Image
                  source={leftIcon}
                  style={Style.rightIcon}
                />
              </TouchableOpacity>
            </View>}
         {isPicker ?<CustomTextView
          label={textValue ?textValue :label}
          containerStyle={Style.textInputInner}
          />:
         <TextInput
            {...props}
            ref={inputEl2}
            value={textValue}
            placeholder={placeholder ? placeholder : label}
            placeholderTextColor={color.placeholder}
            onChangeText={value => onType(value)}
            textAlign={'left'}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            secureTextEntry={isSecure}
            keyboardType={keyboardType ? keyboardType : 'default'}
            maxLength={maxLength}
            editable={editable === false ? editable : true}
            style={[Style.textInputInner, textInput , leftIcon &&{paddingLeft:30}]}
          />
        }
          {isApply && <Text
            onPress={() => isApply()}
            style={{ position: 'absolute', right: -5, color: color.lightRed, fontFamily: fontsFamily.montserratMedium }}>Apply</Text>}
           {rightIcon2 &&
            <View
              style={{
                position: 'absolute',
                height: 20,
                width: 20,
                right: 30,
                alignSelf: 'center',
                zIndex: 99999999,
              }}>
              <TouchableOpacity
                style={Style.rightIcon}
                onPress={onPressRightIcon2}
              >
                {/* <Image
                  source={rightIcon2}
                  style={Style.rightIcon}
                /> */}
                <CustomTextView
                label={rightIcon2}
                containerStyle={{fontFamily:fontsFamily.icon,fontSize:size.size_14,color:color.white}}
                />
              </TouchableOpacity>
            </View>}
          {rightIcon &&
            <View
              style={{
                position: 'absolute',
                height: 20,
                width: 20,
                // backgroundColor:'red',
                right: rightIcon ? -8 : 15,
                alignSelf: 'center',
                zIndex: 99999999,
              }}>
              <TouchableOpacity
                style={Style.rightIcon}

                onPress={onPressRightIcon}
              >
                {/* <Image
                  source={rightIcon}
                  style={Style.rightIcon}
                /> */}
                 <CustomTextView
                label={rightIcon}
                containerStyle={{fontFamily:fontsFamily.icon,fontSize:size.size_14,color:color.white}}
                />
              </TouchableOpacity>
            </View>}
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

const Style = StyleSheet.create({
  containerFocused: {
    width: '100%',
    height: 48,
    paddingHorizontal: 15,
    backgroundColor: Colors.blackBg,
    flexDirection: 'row',
    alignItems: 'center',
    // shadowColor: '#666666',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    borderWidth:1,
    borderColor:color.brownDusty,
    // shadowOpacity: 0.16,
    // shadowRadius: 16,
    zIndex: 0,
    // elevation: 1,
    borderRadius: 8,
    marginBottom: 25,
  },
  rightIcon: {
    height: 18,
    width: 18,
  },
  textBoxLabel: {
    color: color.label,
    fontFamily: fontsFamily.regular,
    position:'absolute',
    top:-9,
    fontSize:12,
    backgroundColor:color.blackBg,
    zIndex:99999999,
    paddingHorizontal:8,
    left:'6%'
  },
  textInputInner: {
    fontFamily: fontsFamily.regular,
    color: color.white,
    fontSize:16,
    backgroundColor:Colors.transparent
  },
});
