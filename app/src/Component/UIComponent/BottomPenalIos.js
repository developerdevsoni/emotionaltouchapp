import React from 'react';
import {Modalize} from 'react-native-modalize';
export default function BottomPenalIOS(props) {
  return (
    <Modalize
      ref={props.bottomPenalRef}
      adjustToContentHeight={true}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        keyboardShouldPersistTaps: 'handled',
        bounces: false,
      }}
      useNativeDriver={true}>
      {props.children}
    </Modalize>
  );
}
