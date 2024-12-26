import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CustomTextView(props) {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      onPress={props?.onPress}
      style={[styles.container, props.containerStyle]}>
      {props.label}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
    textAlign: 'auto',
  },
});
