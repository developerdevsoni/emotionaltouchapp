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
  row:{ flexDirection: 'row', alignItems: 'center' },
  emojiBtnView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 44,
    width: 44,
    // borderWidth: 1,
    marginBottom:7,
    // borderRadius: 360,
    borderColor: color.brownDusty,
  },
   emojiImage: {
    width: 30, height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonMainView: {

    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 45,
    height: 45,
  },
  avtarView:{height:30,width:30,borderRadius:15,marginTop:20},
  avtar:{height:30,width:30,borderRadius:15},
  textInputStyle: {
    color: color.white,
    fontSize: size.size_14,
    fontFamily: fontsFamily.regular,
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:15,
    lineHeight:18,
    borderColor:color.brownDusty,
    minHeight:50,
    marginRight:20
  },
  sendView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    marginBottom:5,
    borderColor:color.brownDusty,
    alignContent: 'center',
    borderRadius:10
  },
  sendIcon: {
    width: 20,
    height: 20,
    color:color.darkRed,
    fontSize:size.large,
    
  },
  ticks: {
    width: 20,
    height: 20,
    color:color.white,
    fontSize:size.medium,
    
  },
  headerIcons:{flexDirection:'row',justifyContent:'space-between',width:'40%'},
  textInputContainerStyle: {
    backgroundColor:color.transparent,
    borderTopWidth: 0,
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    alignSelf:'center',
  },
  textInputPrimaryStyle: {
    backgroundColor: color.transparent,
    borderWidth: 0,
    width:'90%',

    borderColor: color.brownDusty,
  },
  timeTextStyleLeft: {
    color: color.white,
    right: 0,
    fontFamily: fontsFamily.regular,
    fontSize: size.tiny,
  },
  timeTextStyleRight: {
    color: color.white,
    right: 0,
    fontFamily: fontsFamily.regular,
    fontSize: size.tiny,
  },
wrapperTextStyleLeft: {
  backgroundColor: color.brownDusty,
  borderColor: color.brownDusty,
  borderTopLeftRadius:0,
  borderBottomLeftRadius:10,
  borderTopRightRadius:10,
  borderBottomRightRadius:10,
  // paddingBottom:20,
  position: 'relative',
  // minWidth:DEVICE_WIDTH*0.25,
  marginTop:20
},
wrapperTextStyleRight: {
  backgroundColor: color.darkRed,
  borderColor: color.darkRed,
  borderTopLeftRadius:10,
  borderBottomLeftRadius:10,
  borderTopRightRadius:10,
  borderBottomRightRadius:0,
  marginRight:DEVICE_WIDTH *0.015,
  position: 'relative',
  marginTop:20,
  minWidth:DEVICE_WIDTH*0.25
},
leftReact:{
  shadowColor:color.black,
  shadowOffset:{height:1,width:1},
  shadowOpacity:1,
  shadowRadius:1,
  elevation:2,
  height:30,width:30,alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'rgba(67, 66, 66, 0.5)',top:-4,marginLeft:15},
rightReact:{height:30,width:30,
  shadowColor:color.black,
  shadowOffset:{height:1,width:1},
  shadowOpacity:1,
  shadowRadius:1,
  elevation:2,
  alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'rgba(67, 66, 66, 0.5)',alignSelf:'flex-end',right:15,top:-4},

textStyleLeft: {
  color: color.white,
  fontSize: size.size_14,
  fontFamily: fontsFamily.regular

},
textStyleRight: {
  color: color.white,
  fontSize: size.size_14,
  fontFamily: fontsFamily.regular
},
  //!SECTION header Styles
  back: {
    height: 15,
    width: 15,
  },
  profile: {
    height: 45,
    width: 45,
    borderRadius: 30,
    marginLeft: 10
  },
  onlineTxt: {
    fontFamily: FontFamily.regular,
    fontSize: 12,
    color: Colors.label,
    marginTop: 5
  },
  like: {
    fontFamily: FontFamily.regular,
    fontSize: 12,
    color: Colors.label,
    // marginTop: 5
  },
  name: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.white
  },
  nameDiv: {
    width: '65%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10
  },
  headerProfile: {
    width: '50%',
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center'
  },
  borderImg: {
    height: 18,
    width: 18,
    margin: 12
  },
  borderImgicon: {
    fontSize: size.large,
    fontFamily: fontsFamily.icon,
    color: color.white,
    height: 16,
    width: 16,
    margin: 12
  },

  filter: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: color.brownDusty
  },
  containerHeader: {
    backgroundColor: color.blackBg,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  on: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: color.green,
    marginTop: 5
  },
  subHeader: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.label,
    textAlign: 'center',
    marginTop: 5
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
  listTxt: {
    fontSize: size.small,
    fontFamily: FontFamily.bold,
    color: color.white,
    width: '80%'
  },
  offerDiv: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: color.brownDusty,
    padding: 10,
    marginHorizontal: DEVICE_WIDTH * 0.05,
    borderRadius: 10
  },

  radio: {
    height: 15,
    width: 15,
    alignSelf: 'center'
  },
  genderOptView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  genderOpt: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.label,
    textAlign: 'center',
    marginLeft: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
    borderRadius: 8,
    marginTop: 0
  },

  blackDiv: {
    flexDirection: 'row',
    backgroundColor: Colors.blackLight,
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  talktime: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.label,
    textAlign: 'center',
  },
  offerVal: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through'
  },
  underlineTxt: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: color.label
  },


  moreRechargesView: {
    flexDirection: 'row',
    marginTop: 0,
    justifyContent: 'space-between'
  },






});

export default Styles;