import React from 'react';
import {View, StyleSheet, Image,Modal,TouchableOpacity} from 'react-native';

//SECTION - CUSTOM IMPORTS
import color from '../../../rsc/theme/color';
import { Colors } from '../../../rsc/theme';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import { size } from '../../../rsc/theme/fonts';
import image from '../../../rsc/theme/image';
import FastImage from 'react-native-fast-image';
import CustomTextView from './rc_textView';

export default function PopupModal(props) {
  const { img,icon, visible,onClose,heading ,style } = props;

        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => onClose()}>
            <View style={Styles.modalViewMain}>
    
              <View style={[Styles.centeredView,style]}>
              {icon &&  <View style={Styles.headIcon}>
                 {icon ?
                   <CustomTextView
                   containerStyle={Styles.headIconSt}
                   numberOfLines={1}
                   label={icon}
                 />:
                  <FastImage
                    style={Styles.imgg}
                    source={img}
                    resizeMode='contain'
                  />}
                  
                </View>}
                <TouchableOpacity
                  onPress={() =>onClose()}
                style={Styles.close}>
                  <FastImage
                    style={Styles.imgg}
                    source={image.close}
                  />
                </TouchableOpacity>
                <View>
                 {heading&& <CustomTextView
                    containerStyle={Styles.filterHead}
                    numberOfLines={1}
                    label={heading}
                  />}
                {props.children}
                </View>
              </View>
            </View>
          </Modal>
        )
      
}

const Styles = StyleSheet.create({
  container: {
    position: 'absolute',
    opacity: 0.3,
    backgroundColor: color.white,
    zIndex: 2,
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headIcon:{height:50,width:50,borderWidth:5,borderColor:Colors.blackLight,position:'absolute',top:-25,backgroundColor:Colors.darkRed,alignSelf:'center',borderRadius:25,alignItems:'center',justifyContent:'center'},
  close:{height:40,width:40,position:'absolute',top:5,right:5,alignItems:'center',justifyContent:'center',zIndex:99999999},

  imgg:{ height: 15, width: 15, alignSelf: 'center' },

  modalViewMain: {
    flex: 1,
    backgroundColor: 'rgba(29, 28, 28, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  filterHead:{ fontFamily: fontsFamily.bold, fontSize: size.size_16, color: Colors.white, textAlign: 'center', marginTop: 15 },

  centeredView: {
    backgroundColor: Colors.blackBg,
    width: '85%',
    borderRadius: 12,
    padding: 20,
  },
  headIconSt:{ color:color.white,fontSize: size.size_16, fontFamily: fontsFamily.icon, alignSelf: 'center' },

 
});
