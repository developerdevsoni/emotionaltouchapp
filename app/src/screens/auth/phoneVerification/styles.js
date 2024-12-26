import {Platform, StyleSheet} from 'react-native';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../Utils/size';
import { Colors } from '../../../../rsc/theme';
import { size } from '../../../../rsc/theme/fonts';

const Styles = StyleSheet.create({
  flex: {flex: 1,
    backgroundColor:color.blackBg
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop:DEVICE_WIDTH *0.5
  },
  logo: {
    width: DEVICE_WIDTH *0.8,
    height: DEVICE_WIDTH *0.8,
    position:'absolute',
    alignSelf:'center',
    // backgroundColor:'red'

  },
  welcomeText: {
    fontSize: 24,
    fontFamily: fontsFamily.bold,
    color: color.white,
    marginTop: 20,
    textAlign: 'center',

  },
  paragraphStyle: {
    fontSize: size.size_14,
    fontFamily: fontsFamily.regular,
    color: color.label,
    lineHeight: 24,
    marginTop: 5,
    textAlign: 'center',
  },
  resendOtp:{
    fontSize: size.size_16,
    fontFamily: fontsFamily.bold,
    color: color.white,
    lineHeight: 24,
    marginTop: 15,
    textAlign: 'center',
  },
  //REVIEW Header Top Main Style
  backBtn: {
    // marginTop: 30,
  },
  verificationText: {
    fontFamily: fontsFamily.montserratSemiBold,
    fontSize: size.size_16,
    color: color.dakrBlack,
    textAlign: 'center',
  },
  containerHeader: {
    justifyContent: 'flex-start',
    backgroundColor: color.transparent,
  },

  //REVIEW OTP Text View Main Style
  codeIs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  codeIsSent: {
    color: color.dakrBlack,
    fontFamily: fontsFamily.montserratRegular,
  },
  phoneOTP: {
    color: color.dakrBlack,
    fontFamily: fontsFamily.montserratMedium,
    marginLeft: 4,
  },
  editIcon: {
    marginLeft: 5,
  },
  editPenIcon: {
    width: 15,
    height: 15,
  },
  enterOtp: {
    fontSize: size.size_14,
    fontFamily: fontsFamily.montserratRegular,
    color: color.lightGrey,
    alignSelf: 'center',
    marginBottom: 30,
  },

  //REVIEW OTP Text Input View Style
  textInputStyle: {
    width: 40,
    height: 40,
    color: color.dakrBlack,
    backgroundColor: color.white,
    shadowColor: '#666666',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    zIndex: 0,
    elevation: 4,
    borderRadius: 5,
    borderBottomWidth: 0,
    fontFamily: fontsFamily.montserratRegular,
  },

  //REVIEW Already Content Bottom Style
  already: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  alreadyText: {
    fontFamily: fontsFamily.montserratRegular,
    color: color.dakrBlack,
  },
  loginText: {
    alignSelf: 'center',
    color: color.lightRed,
    marginTop: 15,
    fontFamily: fontsFamily.montserratMedium,
  },
  codeInputHighlightStyle: {
    color: Colors.black,
    backgroundColor: Colors.white,
     fontSize:16,
     fontFamily:fontsFamily.bold,
     paddingVertical: 0,
     textAlign: 'center',
     borderWidth:1,
     borderColor:Colors.darkRed

},
otpDiv:{width:DEVICE_WIDTH *0.6,alignSelf:'center',marginVertical:DEVICE_HEIGHT *0.08},
otpStyle:{height:DEVICE_HEIGHT *0.1,alignSelf: 'center',width:DEVICE_WIDTH*0.65 },
codeInputFieldStyle: {
    borderRadius: 5,
    width:  DEVICE_WIDTH *0.14,
    height: DEVICE_WIDTH *0.14,
    color: Colors.red,
    fontSize:  14,
    // fontFamily: fontName.medium,
    paddingVertical: 0,
    textAlign: 'center',
    backgroundColor: Colors.transparent
},
});

export default Styles;
