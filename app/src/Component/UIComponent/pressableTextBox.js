/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';

//SECTION - CUSTOM IMPORTS

import {useToast} from 'react-native-toast-notifications';
import { size } from '../../../rsc/theme/fonts';

export const PressableTextBox = props => {
  const toast = useToast();

  const {
    label,
    textValue,
    containerStyle,
    isFiftyPresent,
    isRequire,
    rightIcon,
    rightIconStyle,
    onPressRightIcon,
    onPressTextBox,
    validationMessage,
  } = props;
  const inputEl2 = useRef(null);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (textValue !== '') {
      setIsFocused(true);
      startAnimation(-20);
    }
  }, [textValue]);

  //   useEffect(() => {
  //     if (textValue === '' || textValue === null) {
  //       startAnimation(0);
  //       setIsFocused(false);
  //     } else {
  //       setIsFocused(true);
  //     }
  //   }, [isFocused]);

  const startAnimation = toValue => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {});
  };
  return (
    <Pressable
      onPress={() => (onPressTextBox ? onPressTextBox(true) : '')}
      style={[
        isFocused ? Style.containerFocused : Style.container,
        containerStyle,
      ]}>
      <View
        activeOpacity={1}
        style={[
          Style.textInputAndLabelWarper,
          {width: isFiftyPresent ? '80%' : '100%'},
        ]}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              transform: [{translateY: animatedValue}],
              fontSize: isFocused ? 20 : 20,
              left: 5,
              flexDirection: 'row',
            },
          ]}>
          <Text
            style={[
              // !isFocused
              //   ? fontStyle.textInputNormalLabel
              //   : fontStyle.textInputFocusedLabel,
            ]}>
            {label}
          </Text>

          {isRequire && (
            <Image
              source={Images.require_icon}
              style={{width: 5, height: 14, left: 5, opacity: 1, top: 2}}
            />
          )}
        </Animated.View>
        <Text style={[Style.dropDownStyle]}>
          {textValue}
        </Text>

        {rightIcon && (
          <TouchableOpacity
            style={{position: 'absolute', right: 10}}
            onPress={() => (onPressRightIcon ? onPressRightIcon() : '')}>
            <Image
              style={[{height: 14, width: 18}, rightIconStyle]}
              source={rightIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          position: 'absolute',
          height: 20,
          width: 20,
          right: rightIcon ? 35 : 15,
          top: isFocused ? 20 : 20,
          zIndex: 999,
        }}>
        {validationMessage && validationMessage.isValidationFire && (
          <View>
            {validationMessage.validationMessage ? (
              <View>
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                  }}
                  onPress={() =>
                    toast.show(validationMessage.validationMessage, {
                      type: 'normal',
                      // offsetTop: 200,
                      offsetBottom: 400,
                      duration: 2000,
                      animationType: 'slide-in',
                      placement: 'bottom',
                    })
                  }>
                  <Image
                    source={Images.info_icon}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <Image
                source={Images.check_icon}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: '#03911D',
                }}
              />
            )}
          </View>
        )}
      </View>
    </Pressable>
  );
};

const Style = StyleSheet.create({
  container: {
    height: 54,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomColor: '#D2D2D2',
  },
  containerFocused: {
    height: 54,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomColor: '#D2D2D2',
    shadowColor: '#595959',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  iconImage: {
    width: 11,
    height: 14,
    left: 10,
  },
  textInputAndLabelWarper: {
    top: 25,
    width: '100%',
    left: 0,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: size.size_16,
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
  },
  selectedTextStyle: {
    // ...fontStyle.textInputValue,
  },
  dropDownStyle: {top: 5, width: '100%', left: 5, textAlign: 'left'},
  rightIconStyle: {
    width: 9,
    height: 14,
    right: 15,
  },
});
