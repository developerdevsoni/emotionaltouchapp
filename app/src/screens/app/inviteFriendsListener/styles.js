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

const Styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: color.blackBg

  },
  container: {
    flex: 1,
    width: DEVICE_WIDTH * 0.95,
    alignSelf: 'center',
  },
  width90: {
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    marginTop:15
  },
  desc:{backgroundColor:color.blackLight,borderRadius:10},
  promoCodeDiv: {
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    marginTop: 20
  },
  width50: {
    width: '85%',
    alignItems: 'center',
    alignSelf:'center'
  },
  logoImg: {
    width: DEVICE_WIDTH * 0.4,
    height: DEVICE_WIDTH * 0.4
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
  getText: {
    fontSize: 14,
    marginBottom: 10,
    color: color.white,
    fontFamily: fontsFamily.bold,
  },
  priceCombo: {
    fontSize: 14,
    marginBottom: 10,
    color: color.label,
    fontFamily: fontsFamily.semibold,
  },
  price: {
    fontSize: 16,
    marginTop: 20,
    color: color.white,
    fontFamily: fontsFamily.bold,
  },
  faq: {
    fontSize: 14,
    marginVertical: 10,
    color: color.white,
    fontFamily: fontsFamily.bold,
  },
  ques: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingTop: 15,
    color: color.white,
    fontFamily: fontsFamily.bold,
  },
  ans: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: color.label,
    fontFamily: fontsFamily.semibold,
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