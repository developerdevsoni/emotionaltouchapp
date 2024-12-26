import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import color from '../../../rsc/theme/color';

export default function SafeArea(props) {
  return (
    <View style={[Style.container]}>
      <SafeAreaView style={[Style.topSafeArea]}>{props.children}</SafeAreaView>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSafeArea: {
    flex: 1,
    backgroundColor: color.white,
  },
});
