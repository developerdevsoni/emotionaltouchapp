import {Platform, StyleSheet} from 'react-native';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import { DEVICE_WIDTH } from '../../../../rsc/theme/screenSizes';
import { DEVICE_HEIGHT } from '../../../Utils/size';
import { Colors } from '../../../../rsc/theme';
import { size } from '../../../../rsc/theme/fonts';

const Styles = StyleSheet.create({
  flex: {flex: 1,
    backgroundColor:color.blackBg
  
  },
  container: {
    flex: 1,
    width:DEVICE_WIDTH *0.95,
    alignSelf:'center',
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
  bottom:{
    // height:DEVICE_HEIGHT *0.2,
    justifyContent:'flex-end'
  },
  //REVIEW Header Top Main Style
  backBtn: {
    // marginTop: 30,
  },
  containerHeader: {
    justifyContent: 'flex-start',
    backgroundColor: color.transparent,
  },

  //REVIEW Title Paragraph Content Style
  loginTop: {
    alignItems: 'center',
    // marginTop: 40,
    justifyContent:'center',
    marginTop:DEVICE_WIDTH *0.5,
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
    fontFamily: fontsFamily.bold,
  },

  //REVIEW Mobile Number Input Style
  phoneNoInputMain: {
    marginTop: 20,
    marginHorizontal:15
  },
  mobileNoLabel: {
    color: color.label,
    fontFamily: fontsFamily.regular,
    position:'absolute',
    top:-9,
    fontSize:12,
    backgroundColor:color.blackBg,
    zIndex:99999999,
    paddingHorizontal:8,
    left:'6%'
  },
  phoneNoInput: {
    // shadowColor: '#666666',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.16,
    // shadowRadius: 16,
    zIndex: 0,
    borderWidth:1,
    borderColor:color.brownDusty,
    marginHorizontal:2,
    // elevation: 4,
    borderRadius: 10,
    marginBottom:25
  },
  textInput: {
    fontFamily: fontsFamily.bold,
    padding: 0,
    color:color.white
  },
  containerStyle: {
    backgroundColor:color.blackBg,
    width: '100%',
    borderRadius: 16,
    height: 48,
    paddingHorizontal:5,
    paddingVertical: 10,
  },
  textContainerStyle: {
    backgroundColor: color.blackBg,
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
    width: DEVICE_WIDTH *0.8,
    height: DEVICE_WIDTH *0.8,
    position:'absolute',
    alignSelf:'center',
    // backgroundColor:'red'

  },
});

export default Styles;
