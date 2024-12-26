import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StatusBar,
  Modal,
  Platform,
  Dimensions,
} from "react-native";



import { TouchableOpacity } from "react-native-gesture-handler";
import { WheelPicker } from "../../../../libs/react-native-wheel-picker-android";
import { styles } from "./styles";
import fontsFamily from "../../../../rsc/theme/fontsFamily";
import { DEVICE_WIDTH } from "../../../Utils/size";
import color from "../../../../rsc/theme/color";
import { FontFamily } from "../../../../rsc/theme";
export const PickerModal = (props) => {
  const {
    isDropdownVisible,
    title,
    selectedValueIndex,
    items,
    onSelect,
    onClose,
    onValueChange,
  } = props;
  const [selectedItem, setSeletcedItem] = useState(selectedValueIndex);

  return (
    <Modal
      statusBarTranslucent={true}
      animated
      transparent
      visible={isDropdownVisible}
      animationType="fade"
    >
      <View style={styles.wrapper}>
        <View style={styles.outerContainer}>
          <View
            style={{
              ...styles.container,
              height:DEVICE_WIDTH * 0.5,
              marginBottom: 40,
            }}
          >
            <View style={styles.dropdownHeader}>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={onClose}
                style={styles.iconView}
              >
                <Text
                  onPress={onClose}
                  style={[styles.optionText, { fontFamily: fontsFamily.bold }]}>Cancel</Text>
              </TouchableOpacity>
              <Text
                maxFontSizeMultiplier={1}
                allowFontScaling={false}
                style={[styles.headerTitle, { fontFamily:fontsFamily.bold }]}
              >
                {title}
              </Text>
              <TouchableOpacity
                 onPress={() => onSelect(selectedItem)}
              // activeOpacity={0.4}
              // style={styles.iconView}
              >
                <Text
                  onPress={() => onSelect(selectedItem)}
                  style={{ ...styles.optionText, ...styles.iconView, color: color.darkRed, fontFamily:fontsFamily.bold }}>
                  Select
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.wheelPicker, marginTop: -10 }}>
              {items?.length > 0 && <WheelPicker
                selectedItem={selectedValueIndex ? selectedValueIndex :0}
                initPosition={selectedValueIndex ? selectedValueIndex :0}
                data={items}
                onItemSelected={(index) => {
                  setSeletcedItem(index)
                }}
                // style={{flex:}}
                // selectedItemTextColor={color.white}
                // selectedItemTextFontFamily={styleConstants.fontFamily.semiBold}
                itemTextFontFamily={fontsFamily.bold}
                // itemTextColor={color.white}
                indicatorColor={color.darkRed}
                // selectedItemTextColor={'red'}
                selectedItemTextSize={Platform.OS == 'ios' ? 18 : 22}
                selectedItemTextFontFamily={FontFamily.bold}
              />}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
