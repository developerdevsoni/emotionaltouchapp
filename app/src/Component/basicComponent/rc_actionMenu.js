import React from 'react';
import {View} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

export const actionSheetReference = React.createRef(null);
export default function ActionMenu(props) {
  const optionsData = props.options.map(key => {
    return key.name;
  }, {});
  const cancelButtonIndex = props.options.length - 1;
  return (
    <View>
      <ActionSheet
        ref={
          props.newActionSheetReference
            ? props.newActionSheetReference
            : actionSheetReference
        }
        options={optionsData}
        onPress={index => {
          if (index !== cancelButtonIndex) {
            props.options[index].onPress();
          }
        }}
        cancelButtonIndex={cancelButtonIndex}
      />
    </View>
  );
}
