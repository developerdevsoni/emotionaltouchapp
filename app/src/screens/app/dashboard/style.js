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
  slider: {
    backgroundColor: color.black,
    color: color.black,
    height: 5,
    borderRadius: 5,
  },
  noBtn: {
    backgroundColor: color.blackBtn
  },
  yesBtn: {},

  container: {
    flex: 1,
    width: DEVICE_WIDTH * 0.95,
    alignSelf: 'center',
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
    fontFamily: FontFamily.bold,
    fontSize: size.extraLarge,
    color: Colors.white,
    textAlign: 'right',
    marginRight: '5%',
    paddingVertical: 5,
    // marginTop: 15
  },
  rowTop:{ flexDirection: 'row', marginHorizontal: '5%', justifyContent: 'space-between' },
  top:{ marginHorizontal: DEVICE_WIDTH * 0.05, backgroundColor: color.blackLight, borderRadius: 10, paddingVertical: 15 },
  headListItem: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_14,
    color: Colors.white,
    textAlign: 'right',
    // marginRight: '5%',
    paddingVertical: 5,
    // marginTop: 15
  },
  descc: {
    fontFamily: FontFamily.regular,
    fontSize: size.size_14,
    color: Colors.label,
    // textAlign: 'right',
    marginHorizontal: '5%',
    paddingVertical: 5,
    // marginTop: 15
  },
  headListQuery: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.white,
    textAlign: 'left',
    marginLeft: '5%',
    paddingVertical: 10,
    marginTop: 15
  },

  rightIcon: {
    height: 15,
    width: 15,
    alignSelf: 'center'
  },
  rightIconDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  lists: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    backgroundColor: Colors.blackBtn,
    // borderRadius: 8,
    // marginTop: 10,
    // marginHorizontal: '5%'
  },
  list:{borderRadius:10,overflow:'hidden',width:DEVICE_WIDTH*0.9,alignSelf:'center',marginTop:20},
  //REVIEW FAQ Content View Style
  faqDataMain: {
    margin: 20,
  },
  questionBox: {
    backgroundColor: color.brownDusty,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    backgroundColor: color.blackBtn,
    justifyContent: 'space-between',
  },
  question: {

    fontFamily: fontsFamily.semibold,
    fontSize: size.size_16,
    color: color.white,
    lineHeight: 22,
    paddingRight: 20,
  },
  answer: {
    marginTop: 5,
    fontFamily: fontsFamily.semibold,
    lineHeight: 24,
    paddingHorizontal: 13,
    paddingVertical: 10,
    color: color.label,
    fontSize: 14,
  },
  faqArrowDown: {
    width: 10,
    height: 10,
    position: 'absolute',
    right: 5,
    transform: [{
      rotate: '-90deg'
    }],
  },
  faqArrowUp: {
    width: 10,
    height: 10,
    position: 'absolute',
    right: 5,
    transform: [{
      rotate: '90deg'
    }],
  },
});

export default Styles;




