import React from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function ScrollViewComponent(props) {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={[Styles.container, props.containerStyle]}>
      {props.children}
    </KeyboardAwareScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
