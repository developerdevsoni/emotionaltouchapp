import {
  Platform,
  StyleSheet
} from 'react-native';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import {
  DEVICE_WIDTH
} from '../../../../rsc/theme/screenSizes';
import {
  DEVICE_HEIGHT,
} from '../../../Utils/size';
import {
  size
} from '../../../../rsc/theme/fonts';
import {
  Colors,
  FontFamily
} from '../../../../rsc/theme';

const Styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: color.blackBg

  },
  input: {
    marginTop: 20,
    height: DEVICE_HEIGHT * 0.15,
    marginBottom: 10,
    padding: 7,
    borderRadius: 10,
    alignItems: 'flex-start',
    shadowColor: 'transparent',
    backgroundColor: color.blackLight
  },
  subHeader: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.label,
    textAlign: 'center',
    marginTop: 5
  },
  topDiv:{ width: DEVICE_WIDTH * 0.9, alignSelf: 'center' },
  logoThanks: {
    height: DEVICE_WIDTH * 0.3,
    width: DEVICE_WIDTH * 0.3,
    marginVertical: 20,
    alignSelf: 'center'
  },
  phone: {
    fontFamily: FontFamily.semibold,
    fontSize: size.size_14,
    color: Colors.white,
    marginTop: 5
  },
  nameLogo: {
    height: DEVICE_WIDTH * 0.2,
    width: DEVICE_WIDTH * 0.2,
    borderRadius: DEVICE_WIDTH * 0.2
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.lightRed,
    backgroundColor: Colors.blackBg,
    paddingBottom: 12,
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  name: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.white
  },
  heading: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.label,
    marginTop: 15
  },
  namePhoneDiv: {
    width: DEVICE_WIDTH * 0.65,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },

  logoImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 5
  },
  rightIcon: {
    height: 15,
    width: 15,
    alignSelf: 'center'
  },
  rightIconDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  myProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.blackLight,
    borderRadius: 8,
    marginTop: 10
  },
  logoProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  myProfileTxt: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.label,
    textAlign: 'center',
    marginLeft: 10,
  },

  listImg: {
    height: 18,
    width: 18,
    marginHorizontal: 5
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: Colors.brownDusty,
    alignItems: 'center'
  },
  listTxt: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.white,
    textAlign: 'center',
    marginLeft: 10,
    paddingVertical: 5
  },
  listHead: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.label,
    marginLeft: '5%',
    marginTop: DEVICE_HEIGHT * 0.03
  },

  icon: {
    fontSize: size.large,
    fontFamily: FontFamily.icon,
    marginHorizontal: 5,
    color: color.white
  },

  deleteAlert: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.label,
    textAlign: 'center',
    marginTop: 5
  },
  deleteBtns: {
    flexDirection: 'row',
    width: DEVICE_WIDTH * 0.75,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginVertical: 8
  },
  noBtn: {
    width: DEVICE_WIDTH * 0.3,
    backgroundColor: color.blackBtn,
    marginHorizontal: 10
  },
  yesBtn: {
    width: DEVICE_WIDTH * 0.3,
    marginHorizontal: 10
  },
  interested: {
    width: DEVICE_WIDTH * 0.33,
    marginHorizontal: 10
  },



  thanks: {
    fontFamily: FontFamily.bold,
    fontSize: size.extraLarge,
    color: Colors.white,
    textAlign: 'center',
    marginVertical: 5
  },


  container: {
    flex: 1,
    width: DEVICE_WIDTH * 0.95,
    alignSelf: 'center',
  },
  width90: {
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center'
  },
  //REVIEW  Screen Background Image Style
  onboarding_main: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: 231,
    height: 358,
    backgroundColor: color.transparent,
  },
  bottom: {
    height: DEVICE_HEIGHT * 0.25,
    justifyContent: 'flex-end'
  },
  //REVIEW Header Top Main Style
  backBtn: {
    // marginTop: DEVICE_STATUSBARHIGHT,
  },
  containerHeader: {
    alignItems: 'center'
  },

  //REVIEW Title Paragraph Content Style
  loginTop: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: DEVICE_HEIGHT * 0.3,
    marginBottom: 10,
    // flex:0.8
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

  //REVIEW Social Icon Or Sign Main Style
  social_icon_main: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  social_icon: {
    marginHorizontal: 18,
  },
  orSign: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 15,
    position: 'relative',
  },
  borderLine: {
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    width: '100%',
    position: 'absolute',
    top: 9,
  },
  orSignText: {
    backgroundColor: color.white,
    zIndex: 9,
    paddingHorizontal: 20,
    color: color.lightGrey,
    fontFamily: fontsFamily.bold,
  },

  //REVIEW Mobile Number Input Style
  phoneNoInputMain: {
    marginTop: 20,
    marginHorizontal: 15
  },
  mobileNoLabel: {
    color: color.lightBlack,
    fontFamily: fontsFamily.bold,
    marginBottom: 10,
  },
  phoneNoInput: {
    shadowColor: '#666666',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    zIndex: 0,
    marginHorizontal: 2,
    elevation: 4,
    borderRadius: 16,
  },
  textInput: {
    fontFamily: fontsFamily.bold,
    padding: 0,
  },
  containerStyle: {
    width: '100%',
    borderRadius: 16,
    height: 48,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  textContainerStyle: {
    backgroundColor: color.white,
    borderLeftColor: '#DDDDDD',
    borderLeftWidth: 1,
    paddingVertical: 0,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    color: color.lightBlack,
    fontFamily: fontsFamily.bold,
  },
  socialIcon: {
    width: 35,
    height: 35,
  },

  //REVIEW Already Content Bottom Style
  already: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  alreadyText: {
    fontFamily: fontsFamily.bold,
    color: color.white,
  },
  loginText: {
    marginLeft: 5,
    color: color.darkRed,
    fontFamily: fontsFamily.bold,
  },
  //REVIEW App Logo Style
  logo: {
    width: DEVICE_HEIGHT * 0.38,
    height: DEVICE_HEIGHT * 0.38,
    position: 'absolute',
    alignSelf: 'center',
    // backgroundColor:'red'

  },
});

export default Styles;