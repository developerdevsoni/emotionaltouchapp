import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Alert,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//SECTION - CUSTOM IMPORTS
import Loader from './rc_loader';

export default function BottomPenal(props) {
  const showConfirmDialog = () => {
    return Alert.alert(
      'Conformation',
      'Are you sure you want to close this form?',
      [
        {
          text: 'Yes',
          onPress: () => {
            props.onCloseModal();
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showModal}
      onRequestClose={() => {
        showConfirmDialog();
      }}>
      <View style={styles.container}>
        <Loader isShow={props.isLoading} />
        <View style={styles.modalWrap}>
          <Pressable
            style={{paddingVertical: 20}}
            onPress={() => showConfirmDialog()}>
            <View style={styles.closeButton} />
          </Pressable>
          {props.children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  modalWrap: {
    maxHeight: hp(80),
    width: '100%',
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    shadowRadius: 2,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
  },
  closeButton: {
    alignSelf: 'center',
    width: 65,
    borderBottomColor: '#DBDCE0',
    borderBottomWidth: 3,
    borderRadius: 20,
  },
});
