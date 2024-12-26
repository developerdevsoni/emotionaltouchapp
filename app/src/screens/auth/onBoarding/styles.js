import {Platform, StyleSheet} from 'react-native';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import { FontFamily } from '../../../../rsc/theme';
import { DEVICE_HEIGHT } from '../../../../rsc/theme/screenSizes';
import { DEVICE_STATUSBARHIGHT, DEVICE_WIDTH } from '../../../Utils/size';
import { size } from '../../../../rsc/theme/fonts';

const Styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: color.blackBg, position: 'relative'},
  container: {
    flex: 1,
    backgroundColor: color.blackBg,
    paddingHorizontal: 15,
  },
  //REVIEW Onboarding Style
  onboarding_main: {
    flex: 1,
    paddingTop: 100,
    position: 'relative',
  },
  btnRow:{ flexDirection: 'row',width:DEVICE_WIDTH *0.75,alignSelf:'center',justifyContent:'space-evenly' },
  btnContainer:{ 
    marginVertical: DEVICE_HEIGHT *0.04, 
    // position: 'absolute', 
    // bottom:0,

    width: '100%', 
    alignSelf: 'center' ,
    alignItems:'flex-end'
  },
  pagination:{ 
    flexDirection: 'row', 
    alignSelf: 'center', 
    marginBottom:15,
    marginTop:5
   },
  onboarding_Content: {
    paddingTop:DEVICE_HEIGHT*0.1,
    // backgroundColor:'red',
    paddingHorizontal: 20,
    height:Platform.OS =='ios'? DEVICE_HEIGHT*0.92:DEVICE_HEIGHT*0.92,
    width:'100%'
  },
  onboarding_Img: {
    alignSelf: 'center',
  },
  //REVIEW Skip Button Style
  skipButton: {
    position: 'absolute',
    zIndex:99999999,
    top: 30,
    right: 20,
  },
  skipButtonText: {
    color: color.white,
    fontSize:size.size_16,
    fontFamily:FontFamily.bold
  },
  //REVIEW Prev Button Style
  prevButton: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  prevIcon: {
    width: 8,
    height: 15,
  },
  //REVIEW Next Button Style
  buttonNext: {
    zIndex:-9999999,
    backgroundColor: color.darkRed,
    paddingVertical: 15,
    marginHorizontal:35,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonNextText: {
    color: color.white,
    textAlign: 'center',
    fontFamily: fontsFamily.montserratMedium,
    fontSize: size.size_14,
  },
  //REVIEW Title Paragraph Style
  titleStyle: {
    fontSize: size.size_26,
    fontFamily: fontsFamily.bold,
    color: color.white,
    textAlign:'center',
    marginTop: 15,
  },
  paragraphStyle: {
    fontSize: size.size_14,
    marginHorizontal:'12%',
    fontFamily: fontsFamily.regular,
    color: color.label,
    textAlign:'center',
    lineHeight: 22,
    marginTop: 10,
  },
  //REVIEW Already Content Bottom Style
  already: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
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
  //REVIEW Slider Dot Style
  activeDotStyle: {
    backgroundColor: color.darkRed,
    width: 16,
    height: 8,
    borderRadius: 50,
  },
  dotStyle: {
    backgroundColor: color.brownDusty,
    width: 8,
    height: 8,
    borderRadius: 50,
  },
});

export default Styles;
