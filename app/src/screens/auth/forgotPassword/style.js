import {StyleSheet} from 'react-native';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import { DEVICE_WIDTH } from '../../../../rsc/theme/screenSizes';
import { size } from '../../../../rsc/theme/fonts';

const Styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: color.white},
  container: {
    flex: 1,
    width:DEVICE_WIDTH *0.95,
    alignSelf:'center'
  },
  logo: {
    width: 100,
    height: 100,
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

  //REVIEW Header Top Main Style
  backBtn: {
    marginTop: 30,
  },
  containerHeader: {
    justifyContent: 'flex-start',
    backgroundColor: color.transparent,
  },

  //REVIEW Title Paragraph Content Style
  loginTop: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  welcomeText: {
    fontSize: 24,
    textAlign:'center',
    fontFamily: fontsFamily.montserratBold,
    color: color.dakrBlack,
    marginTop: 20,
  },
  paragraphStyle: {
    fontSize: size.size_14,
    textAlign:'center',
    fontFamily: fontsFamily.montserratRegular,
    color: color.lightGrey,
    lineHeight: 24,
    marginTop: 5,
  },

  //REVIEW Full Name and Mobile Number Style
  phoneNoInputMain: {
    marginBottom: 40,
    marginHorizontal:15
  },
  mobileNoLabel: {
    color: color.lightBlack,
    fontFamily: fontsFamily.montserratMedium,
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
    elevation: 4,
    borderRadius: 16,
  },
  textInput: {
    fontFamily: fontsFamily.montserratRegular,
    padding: 0,
  },
  containerStyle: {
    width: '100%',
    borderRadius: 16,
    height: 48,
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
    fontFamily: fontsFamily.montserratRegular,
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
  socialIcon: {
    width: 35,
    height: 35,
  },
  orSign: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal:15,
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
    fontFamily: fontsFamily.montserratRegular,
  },

  //REVIEW Already Content Bottom Style
  already: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  alreadyText: {
    fontFamily: fontsFamily.montserratMedium,
    color: color.dakrBlack,
  },
  loginText: {
    marginLeft: 5,
    color: color.lightRed,
    fontFamily: fontsFamily.montserratRegular,
  },
});

export default Styles;
