import React from 'react';
import {View, StyleSheet, Linking, PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import fs from 'react-native-fs';
import ActionMenu, {actionSheetReference} from './rc_actionMenu';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PERMISSIONS, check, request, RESULTS} from 'react-native-permissions';
import { CustomAlert } from '../../../rsc/theme/customAlert';
export default function ImagePicker(props) {
  const options = {
    quality:0.1
  };
  const actionMenuOption = [
    {
      id: '1',
      name: 'Capture from Camera',
      onPress: () => {
        props.onStart();
        onPickFromCamera();
      },
    },
    {
      id: '2',
      name: 'Choose from Gallery',
      onPress: () => {
        props.onStart();
        onPickFromStorage();
      },
    },
    {
      id: '3',
      name: 'Cancel',
    },
  ];

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Emotional Touch App Camera Permission',
          message:
            'Emotional Touch App needs access to your camera ' +
            'so you can add profile picture.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
        CustomAlert('Please give camera permission.')
      }
    } catch (err) {
      console.warn(err);
    }
  };

  async function onPickFromCamera() {
    try {
      launchCamera(
        {
          maxHeight: 1000,
          maxWidth: 1000,
          selectionLimit: 1,
          mediaType: 'photo',
          cameraType:props?.isFront ?'front':'back',
          includeBase64: false,
          quality:0.1
        },
        response => {
          if (response.didCancel) {
          } else if (response.errorCode) {
            console.log(response)
            requestCameraPermission();

          } else {
            onCaptureSuccess(response);
          }
        },
      );
    } catch (e) {
      console.log(e)
    }
  }

  async function onPickFromStorage() {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.errorCode) {
        console.log(response,'err')
      } else {
        onCaptureSuccess(response);
      }
    });
  }

  async function onCaptureSuccess(params) {
    props.onCaptureSuccess(params);
  }

  return (
    <View style={{width: '100%',marginBottom:40}}>
      <ActionMenu
        newActionSheetReference={props.newActionSheetReference}
        options={actionMenuOption}
      />
      <TouchableOpacity
        style={{alignSelf: 'center', width: '100%',alignItems:'center',justifyContent:'center'}}
        activeOpacity={1}
        onPress={() => {
          // props.onPress();
          actionSheetReference?.current?.show();
        }}>
        {props.children}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  bodyView: {
    height: '15%',
    width: '100%',
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'space-between',
  },
  buttonView: {
    height: '45%',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
