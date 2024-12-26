import {
  StyleSheet
} from 'react-native';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH
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
  container: {
    flex: 1,
    backgroundColor: color.blackBg,
  },
  heading: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.label,
    marginTop: 15
  },
  recentChatFlatList: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    width: '90%'
  },
  close: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: 5,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999999
  },
  headIcon: {
    height: 50,
    width: 50,
    borderWidth: 5,
    borderColor: Colors.blackLight,
    position: 'absolute',
    top: -25,
    backgroundColor: Colors.darkRed,
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  recentChatView: {
    marginHorizontal: DEVICE_WIDTH * 0.05,
    marginVertical: 15,
    borderRadius: 10,
    width: DEVICE_WIDTH * 0.9,
    backgroundColor: color.blackLight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  filter: {
    width: '15%',
    borderWidth: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    borderRadius: 8,
    borderColor: color.brownDusty
  },
  wallet: {
    width: '30%',
    flexDirection: 'row',
    borderWidth: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 5,
    borderRadius: 8,
    borderColor: color.brownDusty
  },
  filterHead: {
    fontFamily: FontFamily.bold,
    fontSize: size.size_16,
    color: Colors.label,
    textAlign: 'center',
    marginTop: 15
  },
  walletText: {
    fontFamily: fontsFamily.bold,
    fontSize: 14,
    color: color.white
  },
  name: {
    fontFamily: fontsFamily.semibold,
    fontSize: 12,
    color: color.white,
    width: 55
  },
  recentlyConnected: {
    fontFamily: fontsFamily.regular,
    fontSize: 12,
    color: color.label,
    marginLeft: '5.5%',
    marginTop: 20,
  },
  recentlyConnected1: {
    fontFamily: fontsFamily.icon,
    fontSize: 30,
    color: color.label,
    marginLeft: '5.5%',
    marginTop: 20,
  },
  down: {
    fontSize: size.size_16,
    fontFamily: FontFamily.icon,
    color: color.white
  },
  optionListIcon: {
    fontSize: size.size_16,
    fontFamily: FontFamily.icon,
    color: color.white,
    marginRight: 15
  },
  optionListIconRadio: {
    fontSize: size.size_16,
    fontFamily: FontFamily.icon,
    color: color.white,
  },
  empty: {
    fontSize: size.size_16,
    fontFamily: FontFamily.bold,
    color: color.white,
  },
  listDiv: {
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
  // optionListIcon:{},
  infoIcon: {
    fontSize: size.size_16,
    color: color.white,
    fontFamily: fontsFamily.icon
  },
  optionTxtDiv: {
    flexDirection: 'row',
    width: '80%'
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
  seprator:{ width: DEVICE_WIDTH, height: 1, backgroundColor: Colors.brownDusty },
  //ITEMS STYLES
  welcomeText: {
    fontSize: 24,
    fontFamily: fontsFamily.montserratBold,
    color: color.lightRed,
    marginTop: 20,
    textAlign: 'center',

  },
  available: {
    padding: 15,
    marginHorizontal: DEVICE_WIDTH * 0.05,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: color.blackLight,
    borderRadius: 10,
    marginVertical: 15
  },
  hoursTxt: {
    fontSize: size.size_14,
    fontFamily: fontsFamily.medium,
    color: color.white
  },
  storyTxt: {
    fontSize: size.size_14,
    fontFamily: fontsFamily.medium,
    color: color.white,
  },
  storyMine: {
    backgroundColor: color.blackLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginBottom: 10
  },
  storyInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  hours: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.brownDusty
  },
  autoConnect: {
    width: DEVICE_WIDTH * 0.3,
    marginHorizontal: 10,
    marginTop: 0,
    paddingVertical: 10
  },
  headIconSt: {
    color: color.white,
    fontSize: size.size_16,
    fontFamily: fontsFamily.icon,
    alignSelf: 'center'
  },
  walletIcon: {
    fontSize: size.extraLarge,
    color: color.darkRed,
    fontFamily: fontsFamily.icon
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
    backgroundColor: Colors.blackLight,
    borderRadius: 8,
    marginTop: 10
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
    backgroundColor: color.blackBg,
    width: '90%',
    borderRadius: 12,
    padding: 20,
  },
  popupTitle: {
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: size.size_16,
    fontFamily: fontsFamily.montserratMedium,
    color: color.dakrBlack,
  },
  updateButton: {
    backgroundColor: color.lightRed,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    shadowColor: color.lightRed,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paragraphStyle: {
    fontSize: size.size_16,
    fontFamily: fontsFamily.montserratMedium,
    color: color.black,
    lineHeight: 24,
    marginTop: 5,
    textAlign: 'center',
  },
  label: {
    fontSize: size.size_16,
    fontFamily: fontsFamily.montserratSemiBold,
    color: color.black,
    lineHeight: 24,
    marginTop: 5,
    textAlign: 'center',
  },
  timeStyle: {
    fontSize: size.size_16,
    fontFamily: fontsFamily.montserratSemiBold,
    color: color.lightRed,
    lineHeight: 24,
    marginTop: 5,
    textAlign: 'center',
  },
  headSection: {
    fontSize: size.extraLarge,
    fontFamily: fontsFamily.montserratBold,
    color: color.lightRed,
    lineHeight: 24,
    marginTop: 5,
    textAlign: 'center',
  },


  containerHeader: {
    backgroundColor: color.blackBg,
    paddingTop: 10,
    // paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,

  },
  headerStyle: {
    textAlign: 'center',
    color: color.dakrBlue,
    fontSize: 17,
    fontFamily: fontsFamily.montserratMedium,
    paddingLeft: 10,
  },

  //REVIEW Home Banner Main Style
  topBanner: {
    marginBottom: 50,
    marginTop: 20,
  },
  bannerImg: {
    width: 320,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 12,
    marginLeft: 20,
  },
  indicatorContainer: {
    position: 'relative',
    bottom: -45,
    padding: 0,
  },
  inActiveIndicator: {
    backgroundColor: '#E7E7E7',
    width: 8,
    height: 8,
  },
  activeIndicator: {
    width: 8,
    height: 8,
    padding: 0,
    backgroundColor: color.dakrBlue,
  },

  //REVIEW Section Title See All Style
  titleLink: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: size.size_16,
    color: color.dakrBlue,
    fontFamily: fontsFamily.montserratSemiBold,
  },
  seeAll: {
    color: color.dakrBlue,
    fontFamily: fontsFamily.montserratRegular,
    fontSize: size.size_14,
  },

  //REVIEW Consultation Book Box Style
  freeConsultationBanner: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  consultationBox: {
    marginLeft: 20,
    backgroundColor: color.white,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  consultationBoxLast: {
    marginRight: 20,
  },
  consultationImg: {
    width: '100%',
    height: 100,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  consultationContent: {
    padding: 10,
  },
  consultationTitle: {
    fontSize: size.size_14,
    color: color.dakrBlack,
    fontFamily: fontsFamily.montserratMedium,
  },
  consultationPrice: {
    fontSize: 12,
    color: color.lightRed,
    fontFamily: fontsFamily.montserratRegular,
    paddingVertical: 5,
  },
  consultationMin: {
    color: color.grey79,
    fontSize: 13,
    fontFamily: fontsFamily.montserratRegular,
  },

  //REVIEW Tracker Button Box Style
  trackerButtonBoxMain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  trackerButtonBox: {
    padding: 20,
    backgroundColor: color.white,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  buttonIconMain: {
    width: 60,
    height: 60,
    tintColor: color.lightRed,
  },
  buttonTextBox: {
    color: color.dakrBlack,
    fontSize: 15,
    fontFamily: fontsFamily.montserratSemiBold,
    marginTop: 20,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 15,
    top: 15,
  },
  trackerButtonGradientView: {
    position: 'absolute',
    right: 0,
    top: 0,
    overflow: 'hidden',
    width: 108,
    height: 108,
  },
  trackerButtonGradient: {
    width: 108,
    height: 108,
    borderRadius: 90,
    position: 'absolute',
    right: -30,
    top: -20,
  },

  //REVIEW Transformation Recipes Box Style
  LatestTransformation: {
    marginLeft: 20,
    backgroundColor: color.white,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  LatestTransformationLast: {
    marginRight: 20,
  },
  imageBeforeAfter: {
    flexDirection: 'row',
  },
  imgView: {
    width: '50%',
    position: 'relative',
  },
  labelBeforeAfter: {
    color: color.white,
    fontSize: 13,
    fontFamily: fontsFamily.montserratRegular
  },
  labelBeforeAfterView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(11, 20, 96, 0.8)',
    color: color.white,
    fontSize: 13,
    fontFamily: fontsFamily.montserratRegular,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  afterImg: {
    height: 200,
    borderTopRightRadius: 12,
  },
  beforeImg: {
    height: 200,
    borderTopLeftRadius: 12,
  },
  textTransformation: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    overflow: 'hidden'
  },
  nameTransformation: {
    color: color.dakrBlack,
    fontSize: 17,
    fontFamily: fontsFamily.montserratMedium,
    marginRight: 5,
  },
  lostTransformation: {
    fontFamily: fontsFamily.montserratRegular,
    fontSize: size.size_14,
    color: color.grey79,
  },

  //REVIEW Trending Recipes Box Style
  LatestRecipes: {
    marginLeft: 20,
    backgroundColor: color.white,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  LatestRecipesLast: {
    marginRight: 20,
  },
  recipesImg: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  recipesImgTitle: {
    position: 'relative',
  },
  recipesTitle: {
    fontFamily: fontsFamily.montserratMedium,
    fontSize: size.size_16,
    color: color.white,
    left: 0,
    padding: 15,
  },
  recipesImgShadow: {
    position: 'absolute',
    top: '30%',
    bottom: 0,
    width: '100%',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'flex-end',
  },

  //REVIEW Latest Video Box Style
  LatestVideo: {
    marginLeft: 20,
    backgroundColor: color.white,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  LatestVideoLast: {
    marginRight: 20,
  },
  videoImg: {
    width: '100%',
    height: 135,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  LatestVideoContent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  videoTitle: {
    fontFamily: fontsFamily.montserratMedium,
    lineHeight: 24,
    color: color.dakrBlack,
    fontSize: size.size_14,
  },
  videoBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  videoViews: {
    fontSize: 13,
    fontFamily: fontsFamily.montserratRegular,
    color: color.grey79,
  },
  videoDate: {
    fontSize: 13,
    fontFamily: fontsFamily.montserratRegular,
    color: color.grey79,
  },

  //REVIEW Latest Blog Box Style
  LatestBlog: {
    marginLeft: 20,
    backgroundColor: color.white,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  LatestBlogLast: {
    marginRight: 20,
  },
  blogImg: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  LatestBlogContent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  blogTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchDiv: {
    width: DEVICE_WIDTH * 0.38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  blogSubtitle: {
    color: color.lightRed,
    fontFamily: fontsFamily.montserratMedium,
    fontSize: size.size_14,
  },
  blogDate: {
    color: color.greyA9,
    fontSize: 13,
    fontFamily: fontsFamily.montserratRegular,
  },
  blogTitle: {
    color: color.dakrBlack,
    fontFamily: fontsFamily.montserratMedium,
    fontSize: size.size_16,
    lineHeight: 24,
    marginTop: 3,
    marginBottom: 5,
  },
  blogDescription: {
    lineHeight: 22,
    fontSize: size.size_14,
    fontFamily: fontsFamily.montserratRegular,
    color: color.grey79,
  },

  //REVIEW Counter Patients, Countries, Years Style
  counterBoxMain: {
    marginHorizontal: 20,
    backgroundColor: color.dakrBlue,
    borderRadius: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 25,
    marginBottom: 40,
  },
  counterBox: {
    width: '33.33%',
    paddingHorizontal: 10,
  },
  counterNo: {
    color: color.white,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fontsFamily.montserratSemiBold,
    marginBottom: 10,
  },
  counterTagline: {
    color: color.white,
    textAlign: 'center',
    fontSize: size.size_14,
    fontFamily: fontsFamily.montserratMedium,
    lineHeight: 20,
  },
});

export default Styles;