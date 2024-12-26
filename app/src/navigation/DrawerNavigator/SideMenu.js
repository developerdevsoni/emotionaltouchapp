import React, {useState} from 'react';
import {View, TouchableOpacity, Image,StyleSheet, Pressable, Dimensions, Text} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import image from '../../../rsc/theme/image';
// import {useDispatch, useSelector} from 'react-redux';




const Drawer = ({navigation}) => {
//   const dispatch = useDispatch();
  
// console.log(user,'user Image')
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.userImageContainer}>
          <Image
            source={image.profileImg}
            style={styles.userImage}
          />
        </View>
        <View style={styles.userDetailContainer}>
    
          <Text style={styles.name}>{'Scott C. Hummell'}</Text>
          <Text style={styles.number} >{'+916758787557'}</Text>
        </View>
       
      </View>
      <Pressable
        style={{width:'100%',backgroundColor:color.lightRed,}}
        onPress={() => navigation.navigate('Profile')}>
        <Image source={image.home} style={styles.iconImage} />
        <Text textStyles={styles.drawerContent}>{'Profile'}</Text>
      </Pressable>
    
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop:getStatusBarHeight()+5,
  },
  userImageContainer: {
    width:  Dimensions.get('screen').width*0.17,
    height:  Dimensions.get('screen').width*0.17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: Dimensions.get('screen').width*0.15,
    height:  Dimensions.get('screen').width*0.15,
    borderRadius: 40,
    resizeMode: 'contain',
    borderWidth: 3,
    borderColor: '#FFBC13',
  },
  userCrownContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 10,
    left: 2,
    backgroundColor: '#000',
    borderRadius: 50,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userCrown: {
    width: 15,
    height: 12,
    borderRadius: 12,
    // resizeMode: 'contain',
  },
  userDetailContainer: {
    flex: 1,
    marginLeft:10
  },
  editIcon: {
    marginTop: 0,
    marginLeft: 15,
  },
 
  
  
  name: {
    width: '100%',
    color: color.black,
    opacity: 1,
    // textAlign: 'center',
    fontSize: 17,
    fontFamily: fontsFamily.montserratMedium,
  },
  number: {
    width: '100%',
    color: color.black,
    fontSize: 12,
    marginTop: 3,
    // textAlign: 'center',
    fontFamily: fontsFamily.montserratMedium,

  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
 
  
});

export {Drawer};
