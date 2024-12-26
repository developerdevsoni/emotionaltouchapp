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
  //REVIEW  Screen Background Image Style

  bottom: {
    height: DEVICE_HEIGHT * 0.25,
    justifyContent: 'flex-end'
  },
  //REVIEW Header Top Main Style
  backBtn: {
    // marginTop: 30,
  },
  containerHeader: {
    justifyContent: 'flex-start',
    backgroundColor: color.transparent,
  },
  listDiv: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: color.blackLight,
    padding: 10,
    paddingHorizontal:15,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  optionListIcon: {
    fontSize: size.size_16,
    fontFamily: fontsFamily.icon,
    color: color.white,
    marginRight: 15
  },
  hoursTxt: {
    fontSize: size.size_16,
    fontFamily: fontsFamily.bold,
    color: color.white
  },
  //REVIEW Title Paragraph Content Style
  loginTop: {
    alignItems: 'center',
    // marginTop: 40,
    // height: DEVICE_HEIGHT * 0.32,
    // backgroundColor:'red',
    // justifyContent:'center',
    marginTop: DEVICE_WIDTH * 0.65,
    marginBottom: 10,
    // flex:1.5
  },
  optionTxtDiv: {
    flexDirection: 'row',
    width: '80%'
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: fontsFamily.bold,
    color: color.white,
    marginTop: 20,
    textAlign: 'center',

  },
  paragraphStyle: {
    fontSize: size.large,
    fontFamily: fontsFamily.regular,
    color: color.label,
    paddingTop: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  paragraphStyle1: {
    fontSize: size.large,
    fontFamily: fontsFamily.bold,
    color: color.white,
    paddingBottom: 10,
    textAlign: 'center',
  },
  desc: {
    // marginHorizontal: DEVICE_WIDTH * 0.05,
    backgroundColor: color.blackLight,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 20
  },


  containerStyle: {
    width: '100%',
    borderRadius: 16,
    height: 48,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  //REVIEW App Logo Style
  logo: {
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_WIDTH * 0.8,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: DEVICE_STATUSBARHIGHT
    // backgroundColor:'red'

  },
  noBtn: {
    backgroundColor: color.blackBtn
  },
});

export default Styles;