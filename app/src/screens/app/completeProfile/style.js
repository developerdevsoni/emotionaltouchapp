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
  flex: {
    flex: 1,
    backgroundColor: color.blackBg
  },
  track: {
    backgroundColor: color.blackBtn,
    height: 5
  },
  listDiv1: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: color.blackLight,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: color.brownDusty,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  selected:{ backgroundColor: color.blackLight, borderWidth: 1, borderColor: color.darkRed },
  close: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: DEVICE_STATUSBARHIGHT+15,
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999999
  },
  radio: {
    height: 15,
    width: 15,
    alignSelf: 'center'
  },
  modalViewMain: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textArea: {
    height: DEVICE_HEIGHT * 0.15,
    width: '100%'
  },

  centeredView: {
    // backgroundColor: color.blackBg,
    width: '90%',
    borderRadius: 12,
    // padding: 20,
  },
  online:{
    height:25,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    bottom:0,
    alignSelf:'center',
    width:25,
    borderRadius:15
  },
  stepDiv: {
    alignItems: 'center',
    justifyContent: 'center',
    width: DEVICE_WIDTH * 0.65,
    alignSelf: 'center',
    marginTop: DEVICE_HEIGHT*0.07,
    marginBottom: DEVICE_HEIGHT*0.035
  },
  title: {
    fontFamily: fontsFamily.bold,
    color: color.white,
    fontSize: size.size_16,
    marginTop: 30,
    marginBottom: 5
  },
  label: {
    fontFamily: fontsFamily.semibold,
    color: color.label,
    fontSize: size.size_14,
    textAlign: 'center'
  },
  bgBlack: {
    backgroundColor: color.blackLight
  },
  bgBlack1: {
    backgroundColor: color.blackLight,
    width:DEVICE_WIDTH * 0.4,
  },
  slider: {
    backgroundColor: color.black,
    color: color.black,
    height: 5,
    borderRadius: 5,
  },
  btnDiv: {
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    marginVertical: 30
  },
  noBtn: {
    backgroundColor: color.blackBtn
  },
  optionTxtDiv: {
    flexDirection: 'row',
    width: '80%'
  },
  hoursTxt: {
    fontSize: size.size_14,
    fontFamily: fontsFamily.medium,
    color: color.white
  },
  yesBtn: {},

  container: {
    flex: 1,
    width: DEVICE_WIDTH * 0.95,
    alignSelf: 'center',
  },
  optionListIcon: {
    fontSize: size.size_16,
    fontFamily: FontFamily.icon,
    color: color.white,
    marginRight: 15
  },
  optionListIconRadio: {
    fontSize: size.size_14,
    fontFamily: FontFamily.icon,
    color: color.white,
  },
  listDiv: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: color.blackLight,
    padding: 15,
    // borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: color.brownDusty,
    // marginTop: 10,
    justifyContent: 'space-between'
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
    paddingVertical: 5
  },
  listTxtRegular: {
    fontFamily: FontFamily.regular,
    fontSize: size.size_16,
    color: Colors.white,
    textAlign: 'center',
    marginLeft: 2,
    paddingVertical: 5
  },
  count: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.white,
    textAlign: 'center',
    paddingVertical: 5
  },

  listHead: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.label,
    marginLeft: '5%',
    marginTop: DEVICE_HEIGHT * 0.03
  },
  logoProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  width90: {
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center'
  },
  headList: {
    fontFamily: FontFamily.regular,
    fontSize: size.size_16,
    color: Colors.label,
    textAlign: 'left',
    paddingVertical: 15,
    // marginTop: 15
  },
  uploadPopupHead: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.label,
    textAlign: 'center',
    paddingVertical: 10,
    // marginTop: 15
  },
  uploadImg:{height:DEVICE_HEIGHT *0.5,width:DEVICE_WIDTH *0.8,borderRadius:10,marginVertical:20,borderWidth:2,borderColor:color.darkRed},
  anonymous: {
    fontFamily: FontFamily.semibold,
    fontSize: size.size_16,
    color: Colors.label,
    textAlign: 'left',
    paddingVertical: 10,
    // marginTop: 15
  },
  anonymousDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: color.blackBtn,
    borderRadius: 10,
    marginBottom: 20,
  },
  headListOpt: {
    fontFamily: FontFamily.regular,
    fontSize: size.small,
    color: Colors.label,
    textAlign: 'center',
    // paddingBottom: 15,
    // marginTop: 15
  },
  doubleShade: {
    backgroundColor: color.blackLight,
    height: DEVICE_HEIGHT * 0.17,
    width: DEVICE_WIDTH,
  },
  profile: {
    height: DEVICE_HEIGHT * 0.145,
    width: DEVICE_HEIGHT * 0.145,
    borderRadius: DEVICE_HEIGHT * 0.1,
    borderWidth: 5,
    borderColor: color.blackBg,
  },
  selfie: {
    height: DEVICE_HEIGHT * 0.25,
    width: DEVICE_HEIGHT * 0.25,
    borderRadius: DEVICE_HEIGHT * 0.03,
    borderWidth: 5,
    borderColor: color.blackBg,
  },
  input: {
    marginBottom: 25,
    height: DEVICE_HEIGHT * 0.15,
    padding: 7,
    borderRadius: 10,
    alignItems: 'flex-start',
    backgroundColor: color.blackLight,
    shadowColor: 'transparent',
  },
  profileDiv: {
    height: DEVICE_HEIGHT * 0.2,
    // backgroundColor:'red',
    width: DEVICE_HEIGHT * 0.15,
    // borderRadius: DEVICE_HEIGHT * 0.1,/
    position: 'absolute',
    alignSelf: 'center'
  },
  firstShade: {
    backgroundColor: color.blackBg,
    height: DEVICE_HEIGHT * 0.085,
    width: DEVICE_WIDTH,
  },
  secondShade: {
    backgroundColor: color.blackLight,
    height: DEVICE_HEIGHT * 0.065,
    width: DEVICE_WIDTH,
  },
  backgroundColorBlack: {
    backgroundColor: color.blackLight,
    // height: DEVICE_HEIGHT * 0.065,
    width: DEVICE_WIDTH,
  },
  stepBorder: {
    width: DEVICE_WIDTH * 0.25,
    height: DEVICE_WIDTH * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.brownDusty
  },
  headIcon: {
    fontFamily: FontFamily.icon,
    fontSize: size.size_16,
    color: Colors.label,
    textAlign: 'center',
    paddingBottom: 10,
    // marginTop: 15
  },
  editIcon:{
    position:'absolute',
    bottom:8,
    right:8,
    padding:5,
    borderRadius:10,
    color:color.darkRed,
    backgroundColor:color.blackShadow,
    fontFamily: FontFamily.icon,
    fontSize: size.size_26,
    color: Colors.darkRed,
    textAlign: 'center',
  },
  uploadIcon: {
    fontFamily: FontFamily.icon,
    fontSize: size.size_30,
    color: Colors.label,
    textAlign: 'center',
    paddingBottom: 10,
    // marginTop: 15
  },
  pen: {
    fontFamily: FontFamily.icon,
    fontSize: size.size_14,
    color: Colors.label,
    textAlign: 'center',
    // paddingBottom: 10,
    // marginTop: 15
  },
  rowTop: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-between'
  },
  top: {
    marginHorizontal: DEVICE_WIDTH * 0.05,
    paddingVertical: 15
  },

});

export default Styles;