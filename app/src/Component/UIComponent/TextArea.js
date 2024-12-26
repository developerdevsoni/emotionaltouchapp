/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';


//SECTION - CUSTOM IMPORTS
import color from '../../../rsc/theme/color';


export const TextArea = props => {
  const toast = useToast();
  const {
    label,
    imageName,
    textValue,
    onType,
    imageIconStyle,
    isSecure,
    containerStyle,
    isFiftyPresent,
    isRequire,
    validationMessage,
    rightIcon,
    onPressRightIcon,
    rightIconStyle,
    keyboardType,
    textBoxContainerStyle,
    maxLength,
  } = props;
  const inputEl2 = useRef(null);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (textValue !== '') {
      setIsFocused(true);
      startAnimation(-20);
    }
  }, []);

  useEffect(() => {
    if (textValue) {
      startAnimation(-20);
      setIsFocused(true);
    }
  }, [textValue]);

  const handleFocus = () => {
    startAnimation(-20);
    setIsFocused(true);
  };
  const handleBlur = () => {
    if (textValue === '') {
      startAnimation(0);
      setIsFocused(false);
    }
  };

  const startAnimation = toValue => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {});
  };
  return (
    <View style={[containerStyle, {zIndex: 2}, textBoxContainerStyle]}>
      <View
        style={[
          isFocused ? Style.containerFocused : Style.container,

          {zIndex: 2},
        ]}>
        {props.imageName ? (
          <Image
            style={[
              Style.iconImage,
              imageIconStyle,
              {tintColor: isFocused ? '#707070' : '#A1A1A1'},
            ]}
            source={imageName}
          />
        ) : (
          <View style={{marginLeft: 5}} />
        )}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            inputEl2.current.focus();
          }}
          style={[
            Style.textInputAndLabelWarper,
            {width: !imageName ? '100%' : isFiftyPresent ? '80%' : '91%'},
          ]}>
          <TextInput
            {...props}
            ref={inputEl2}
            value={textValue}
            onChangeText={value => onType(value)}
            style={[
              // fontStyle.textInputValue,
              isFiftyPresent && {width: '70%'},
              {
                textAlignVertical: 'top',
                height: Platform.OS === 'ios' ? 80 : 100,
                width: '87%',
              },
            ]}
            textAlign={'left'}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            secureTextEntry={isSecure}
            keyboardType={keyboardType ? keyboardType : 'default'}
            multiline={true}
            numberOfLines={3}
            maxLength={maxLength}
          />
          {rightIcon && (
            <TouchableOpacity
              style={{position: 'absolute', right: 10}}
              onPress={() => onPressRightIcon()}>
              <Image
                style={[{height: 14, width: 18}, rightIconStyle]}
                source={rightIcon}
              />
            </TouchableOpacity>
          )}
          <Animated.View
            style={[
              {
                position: 'absolute',
                transform: [{translateY: animatedValue}],
                fontSize: isFocused ? 20 : 20,
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
        </TouchableOpacity>
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
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    height: 55,
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
    height: 120,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomColor: color.transparent,
    shadowColor: '#666666',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    zIndex: 0,
    elevation: 4,
    borderRadius: 4,
  },
  iconImage: {
    width: 11,
    height: 14,
    top: 30,
    left: 10,
  },
  textInputAndLabelWarper: {
    top: 30,
    width: '90%',
  },
});
