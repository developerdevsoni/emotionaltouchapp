import { Platform, StyleSheet } from 'react-native';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import { FontFamily } from '../../../../rsc/theme';
import { DEVICE_HEIGHT } from '../../../../rsc/theme/screenSizes';
import { DEVICE_WIDTH } from '../../../Utils/size';
import { size } from '../../../../rsc/theme/fonts';

const Styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: color.blackBg, position: 'relative' },
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
  logo:{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT / 2.2 },
  bottomView:{ position: 'absolute', bottom: 50, alignSelf: 'center' },
  iconRow: {
    flexDirection: 'row',
    top: 20,
    right: '10%',
    alignItems: 'center',
    zIndex: 9999999,
    position: 'absolute',
    marginLeft: '5%',
    width: '55%',
    justifyContent: 'space-evenly',
    alignSelf: 'center'
  },
  icon: {
    fontSize: 22,
    alignSelf: 'center',
    textAlign: 'center',
    color: color.white
  },
  btnRow: { flexDirection: 'row', width: DEVICE_WIDTH * 0.75, alignSelf: 'center', justifyContent: 'space-evenly' },
  btnContainer: {
    bottom: 10,
    position: 'absolute',
    width: '100%',
    alignSelf: 'center'
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25
  },
  onboarding_Content: {
    paddingTop: DEVICE_HEIGHT * 0.1,
    paddingHorizontal: 20,
    height: DEVICE_HEIGHT * 0.91,
    width: '100%'
  },
  onboarding_Img: {
    alignSelf: 'center',
  },
  //REVIEW Skip Button Style
  skipButton: {
    position: 'absolute',
    zIndex: 99999999,
    top: 30,
    right: 20,
  },
  skipButtonText: {
    color: color.white,
    fontSize: size.size_16,
    fontFamily: FontFamily.bold
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
    zIndex: -9999999,
    backgroundColor: color.darkRed,
    paddingVertical: 15,
    marginHorizontal: 35,
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
    fontSize: 26,
    fontFamily: fontsFamily.bold,
    color: color.white,
    textAlign: 'center',
    marginTop: 25,
  },
  paragraphStyle: {
    fontSize: size.size_14,
    marginHorizontal: '15%',
    fontFamily: fontsFamily.regular,
    color: color.label,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 10,
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
