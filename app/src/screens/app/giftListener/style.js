import {
  StyleSheet
} from 'react-native';
import color from '../../../../rsc/theme/color';
import {
  DEVICE_WIDTH
} from '../../../Utils/size';
import {
  size
} from '../../../../rsc/theme/fonts';
import {
  FontFamily
} from '../../../../rsc/theme';

const Styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: color.blackBg
  },
  container: {
    flex: 1,
    backgroundColor: color.blackBg,
  },
  amount: {
    fontSize: size.size_16,
    fontFamily: FontFamily.bold,
    color: color.white
  },
  btnRow:{ flexDirection: 'row',width:DEVICE_WIDTH *0.75,alignSelf:'center',justifyContent:'space-evenly' },

  label: {
    fontSize: size.size_16,
    fontFamily: FontFamily.semibold,
    color: color.label
  },
  value: {
    fontSize: size.size_16,
    fontFamily: FontFamily.semibold,
    color: color.label
  },
  labelo: {
    fontSize: size.size_16,
    fontFamily: FontFamily.semibold,
    color: color.label
  },
  noBtn: {
    backgroundColor: color.blackBtn,
    marginBottom:20
  },

  amountDiv: {
    marginTop: DEVICE_WIDTH * 0.05,
    width: DEVICE_WIDTH * 0.21,
    alignItems: 'center',
    justifyContent: 'center',
    height: DEVICE_WIDTH * 0.21,
    backgroundColor: color.blackLight,
    borderRadius: 10
  },
  imgRecent: {
    height: 45,
    width: 45,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  online: {
    height: 14,
    width: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: color.blackBg,
    position: 'absolute',
    bottom: 5,
    right: 4
  },
  footer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: DEVICE_WIDTH * 0.05,
    marginHorizontal:DEVICE_WIDTH * 0.05,
    borderRadius:10,
    backgroundColor:color.blackLight,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  width55: {
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between'
  },
  footerContainer: {
    backgroundColor: color.blackLight,
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: DEVICE_WIDTH * 0.05,
  },

  containerHeader: {
    backgroundColor: color.blackBg,
    // paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },

  column: {
    width: DEVICE_WIDTH * 0.72,
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  //SECTION - Transaction
  history: {
    fontSize: size.size_14,
    fontFamily: FontFamily.bold,
    color: color.white,
    padding: DEVICE_WIDTH * 0.05,
    paddingBottom: 0

  },
  amounttrans: {
    fontSize: size.large,
    fontFamily: FontFamily.bold,
    color: color.white
  },
  reason: {
    marginTop: 4,
    fontSize: size.size_16,
    fontFamily: FontFamily.semibold,
    color: color.label
  },
  totalAmountt: {
    fontSize: size.size_14,
    fontFamily: FontFamily.bold,
    color: color.white
  },


  //SECTION -  OFFERS
  headOffers: {
    fontSize: size.size_14,
    fontFamily: FontFamily.bold,
    color: color.white,
    marginTop:20
  },
  listTxt: {
    fontSize: size.size_14,
    fontFamily: FontFamily.bold,
    color: color.white,
    width: '80%'
  },
  radio: {
    height: 15,
    width: 15,
    alignSelf: 'center'
  },
  offerDiv: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: color.brownDusty,
    padding: 15,
    marginHorizontal: DEVICE_WIDTH * 0.05,
    borderRadius: 10
  },

  noPassAvailable: {
    fontSize: size.size_16,
    fontFamily: FontFamily.bold,
    color: color.white,
    width: '80%',
    textAlign: 'center'
  }
});

export default Styles;