import { Shadow, Neomorph, NeomorphBlur } from "react-native-neomorph-shadows";

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";
import { DEVICE_WIDTH } from "../../../../rsc/theme/screenSizes";

const OuterShadow = ({
  children,
  style,
  darkShadowColor,
  lightShadowColor,
  onPress,
  containerStyle,
}) => {
  return (
    <Pressable
      style={[
        {
          alignSelf: "center",
          paddingVertical: scale(10),
        },
        containerStyle,
      ]}
      onPress={onPress}
    >
      <Neomorph
        darkShadowColor={darkShadowColor || "black"}
        lightShadowColor={lightShadowColor || "grey"}
        style={StyleSheet.flatten([
          styles.active,
          { shadowOpacity: 0.1 },
          style,
        ])}
        // style={styles.active}
      >
        {children}
      </Neomorph>
      {/* <View style={{ height: 15 }} /> */}
    </Pressable>
  );
};


const InnerShadow = ({
  children,
  style,
  darkShadowColor,
  lightShadowColor,
  containerStyle,
  onPress,
  disabled,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || false}
      style={[styles.containerStyle, containerStyle]}
    >
      <Neomorph
        // style={styles.active}
        // style={{ ...styles.active, shadowOpacity: 1, ...style }}
        style={StyleSheet.flatten([styles.active, { shadowOpacity: 1 }, style])}
        inner
        darkShadowColor={darkShadowColor || "#c8d2e2"}
        lightShadowColor={lightShadowColor || "white"}

        // darkShadowColor="darkcyan"
        // lightShadowColor="darkcyan"
        // style={[styles.active, style]}
      >
        {children}
      </Neomorph>
    </Pressable>
  );
};

export { OuterShadow, InnerShadow };

const styles = StyleSheet.create({
  active: {
    borderRadius: scale(10),
    shadowRadius: 6,
    backgroundColor: 'red',
    height: scale(80),
    width:DEVICE_WIDTH *0.9,
  },
  containerStyle: {
    marginTop: 10,
    borderRadius: scale(10),
  },
  neomorph6: {
    borderRadius: 80,
    shadowRadius: 12,
    backgroundColor: "#ECF0F3",
    width: 160,
    height: 160,
    shadowOpacity: 0.5,
  },
});
