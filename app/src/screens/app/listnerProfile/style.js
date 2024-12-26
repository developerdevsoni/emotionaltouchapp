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
  DEVICE_STATUSBARHIGHT
} from '../../../Utils/size';
import {
  size
} from '../../../../rsc/theme/fonts';
import {
  Colors,
  FontFamily
} from '../../../../rsc/theme';

const Styles = StyleSheet.create({
  profile: {
    height: DEVICE_HEIGHT * 0.145,
    width: DEVICE_HEIGHT * 0.145,
    borderRadius: DEVICE_HEIGHT * 0.1,
    borderWidth: 5,
    borderColor: color.blackBg,
  },
  reviewRoot:{width:DEVICE_WIDTH,backgroundColor:color.blackLight,paddingHorizontal:DEVICE_WIDTH*0.05},
  profileDiv: {
    height: DEVICE_HEIGHT * 0.15,
    width: DEVICE_HEIGHT * 0.15,
    borderRadius: DEVICE_HEIGHT * 0.1,
    position: 'absolute',
    alignSelf: 'center'
  },
  doubleShade: {
    backgroundColor: color.blackLight,
    height: DEVICE_HEIGHT * 0.15,
    width: DEVICE_WIDTH,
  },
  firstShade: {
    backgroundColor: color.blackLight,
    height: DEVICE_HEIGHT * 0.085,
    width: DEVICE_WIDTH,
  },
  secondShade: {
    backgroundColor: color.blackBg,
    height: DEVICE_HEIGHT * 0.065,
    width: DEVICE_WIDTH,
  },
  flex: {
    flex: 1,
    backgroundColor: color.blackLight

  },
  starEmpty: {
    fontFamily: fontsFamily.icon,
    fontSize: size.size_16,
    color: color.gold,
    marginLeft: 2,
    marginTop: 1
  },
  starF: {
    fontFamily: fontsFamily.icon,
    fontSize: size.large,
    color: color.gold,
    marginLeft: 2
  },

  aboutDiv: {
    flexDirection: 'row',
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    padding: 15,
    backgroundColor: color.blackLight,
    alignItems: 'center',
    borderRadius: 10
  },

  langGenderDiv: {
    borderRadius: 8,
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    overflow: 'hidden'
  },
  genderDiv: {
    flexDirection: 'row',
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: color.blackLight,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: color.brownDusty
  },
  logoThanks: {
    height: DEVICE_WIDTH * 0.3,
    width: DEVICE_WIDTH * 0.3,
    marginVertical: 20,
    alignSelf: 'center'
  },
  ratingMainContainer: {
    flexDirection: 'row',
    backgroundColor: color.blackLight,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  ratingGeneralData: {
    width: '40%',
    borderRightWidth: 1,
    borderColor: color.brownDusty,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: 15
  },
  ratingTxt: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 5
  },
  ratingBars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  online: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: color.blackBg,
    position: 'absolute',
    zIndex: 99999999,
    bottom: DEVICE_HEIGHT * 0.02,
    right: 10
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
    fontSize: size.size_16,
    fontFamily: FontFamily.icon,
    marginHorizontal: 5,
    color: color.white
  },
  gender: {
    fontFamily: FontFamily.semibold,
    fontSize: size.size_16,
    color: Colors.label,
    textAlign: 'center',
  },
  about: {
    fontFamily: FontFamily.semibold,
    fontSize: size.size_16,
    color: Colors.label,
    // textAlign: 'center',
  },
  age: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.white,
    textAlign: 'center',
  },

  deleteAlert: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.label,
    textAlign: 'center',
    marginTop: 5
  },
  profileName: {
    fontFamily: FontFamily.bold,
    fontSize: size.extraLarge,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 5
  },
  details: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.white,
    // marginVertical: 5,
    marginTop: 15,
    marginBottom: 10
  },

  rateTitle: {
    fontFamily: FontFamily.bold,
    fontSize: size.extraLarge,
    color: Colors.white,
    // marginVertical: 5,
    // marginTop:15,marginBottom:10
  },
  rateTitle5: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.label,
    // marginVertical: 5,
    // marginTop:15,marginBottom:10
  },
  hrs: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.white,
    textAlign: 'center'
    // marginVertical: 5,
    // marginTop:15,marginBottom:10
  },
  track: {
    backgroundColor: color.blackBtn,
    height: 5
  },
  slider: {
    backgroundColor: color.black,
    color: color.black,
    height: 5,
    borderRadius: 5,
  },
  thumbnailImg: {
    height: 30,
    width: 30,
    tintColor: color.darkRed
  },

  totalrate: {
    fontFamily: FontFamily.bold,
    fontSize: size.small,
    color: Colors.label,
    // marginVertical: 5,
    marginTop: 15,
    marginBottom: 10
  },
  optionDiv: {
    borderWidth: 1,
    borderColor: color.white,
    paddingHorizontal: 10,
    borderRadius: 7,
    alignSelf: 'flex-start'
  },
  detailsOption: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.white,
    marginVertical: 8,
    // marginTop:15,marginBottom:10
  },
  profileUsername: {
    fontFamily: FontFamily.semibold,
    fontSize: size.size_16,
    color: Colors.label,
    textAlign: 'center',
    marginTop: 2
  },
  desc: {
    // marginHorizontal: DEVICE_WIDTH * 0.05,
    backgroundColor: color.blackBtn,
    paddingVertical: 10,
    borderRadius: 10,
    // marginVertical: 20
  },
  listDiv: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: color.blackLight,
    backgroundColor: color.blackBtn,

    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  optionListIcon: {
    fontSize: size.size_16,
    fontFamily: fontsFamily.icon,
    color: color.white,
    marginRight: 15
  },
  optionTxtDiv: {
    flexDirection: 'row',
    width: '80%'
  },
  hoursTxt: {
    fontSize: size.size_14,
    fontFamily: fontsFamily.bold,
    color: color.white
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
    width: DEVICE_WIDTH * 0.38,
    marginHorizontal: 10
  },
  interested: {
    width: DEVICE_WIDTH * 0.33,
    marginHorizontal: 10
  },
  scroll: {
    backgroundColor: color.blackBg,
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    marginTop: 10
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
    backgroundColor: color.blackLight
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

});

export default Styles;