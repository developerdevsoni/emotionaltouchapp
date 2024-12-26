/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useToast} from 'react-native-toast-notifications';

//SECTION - CUSTOM IMPORTS
import fontsFamily from '../../../rsc/theme/fontsFamily';
import { size } from '../../../rsc/theme/fonts';


export const DropDown = props => {
  const toast = useToast();

  const {
    label,
    imageName,
    textValue,
    imageIconStyle,
    containerStyle,
    isFiftyPresent,
    data,
    onSelectItem,
    isRequire,
    isRequireStyle,
    validationMessage,
    textBoxContainerStyle,
    rightIMGStyle,
    isDisable,
  } = props;
  const inputEl2 = useRef(null);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);

  const dropDownData = data.map(key => {
    return {
      value: key.id,
      label: key.label,
    };
  });

  useEffect(() => {
    if (textValue !== '') {
      setIsFocused(true);
      startAnimation(-20);
    }
  }, [textValue]);

  useEffect(() => {
    if (!isFocused) {
      if (textValue === '' || textValue === null) {
        startAnimation(0);
        setIsFocused(false);
      } else {
        setIsFocused(true);
      }
    }
  }, [isFocused]);

  const handleFocus = () => {
    startAnimation(-20);
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
    // }
  };

  const startAnimation = toValue => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {});
  };
  return (
    <View
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
        <Dropdown
          ref={inputEl2}
          style={[Style.dropDownStyle]}
          inputSearchStyle={Style.inputSearchStyle}
          selectedTextStyle={[
            Style.selectedTextStyle,
            {left: imageName ? 22 : -5},
          ]}
          placeholderStyle={[
            {
              position: 'absolute',
              left: imageName ? 33 : 5,
            },
            // fontStyle.textInputNormalLabel,
          ]}
          data={dropDownData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={isFocused ? '' : ''}
          searchPlaceholder={t('common:COMMON_LABELS.SEARCH')}
          value={textValue}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          onChange={item => {
            onSelectItem(item.value);
          }}
          fontFamily={
            isFocused ? fontsFamily.robotMedium : fontsFamily.robotRegular
          }
          renderLeftIcon={() => (
            <Image
              style={[
                Style.iconImage,
                imageIconStyle,
                {tintColor: isFocused ? '#707070' : '#A1A1A1'},
              ]}
              source={imageName ? imageName : ''}
            />
          )}
          renderRightIcon={() => (
            <Image
              style={[Style.rightIconStyle, rightIMGStyle]}
              source={Images.drop_down_icon}
            />
          )}
          itemTextStyle={[{color: '#1A1818'}]}
          disable={isDisable !== undefined ? isDisable : false}
        />

        <Animated.View
          style={[
            {
              position: 'absolute',
              transform: [{translateY: animatedValue}],
              fontSize: isFocused ? 20 : 20,
              flexDirection: 'row',
              zIndex: 1,
            },
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                // !isFocused
                //   ? fontStyle.textInputNormalLabel
                //   : fontStyle.textInputFocusedLabel,
                {left: imageName ? 28 : 5},
              ]}>
              {label}
            </Text>
            {isRequire && (
              <Image
                source={Images.require_icon}
                style={[
                  {width: 5, height: 14, left: 10, opacity: 1, top: 2},
                  isRequireStyle,
                  ,
                ]}
              />
            )}
          </View>
        </Animated.View>
      </View>
      <View
        style={{
          position: 'absolute',
          height: 20,
          width: 20,
          right: 35,
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
    textAlign: 'left',
  },
  dropDownStyle: {
    top: Platform.OS === 'ios' ? -5 : 5,
    width: '100%',
    zIndex: 999,
  },
  rightIconStyle: {
    width: 9,
    height: 14,
    right: 15,
    bottom: 8,
  },
});
