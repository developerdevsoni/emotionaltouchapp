import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';

//SECTION - CUSTOM IMPORTS
import color from '../../../rsc/theme/color';

export default function Loader(props) {
  if (props.isShow) {
    return (
      <View style={[Styles.container]}>
        {props.hide ? null : (
          <UIActivityIndicator size={40} color={color.primaryColor} />
        )}
      </View>
    );
  } else {
    return <></>;
  }
}

const Styles = StyleSheet.create({
  container: {
    position: 'absolute',
    opacity: 0.3,
    backgroundColor: '#fff',
    zIndex: 2,
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
