import {
  StyleSheet
} from 'react-native';
import color from '../../../../rsc/theme/color';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import {
  size
} from '../../../../rsc/theme/fonts';

const Styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: color.white
  },
  flexCont: {
    flex: 1,
    backgroundColor: color.appBg
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
  },

  //REVIEW Header Top Main Style
  containerHeader: {
    backgroundColor: color.white,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  headerStyle: {
    textAlign: 'center',
    color: color.dakrBlue,
    fontSize: 17,
    fontFamily: fontsFamily.montserratMedium,
    paddingLeft: 10,
  },

  //REVIEW Settings Menu List View Style
  SettingMenuMain: {
    margin: 20,
  },
  menuLabel: {
    color: color.dakrBlue,
    fontSize: size.size_16,
    fontFamily: fontsFamily.montserratSemiBold,
    marginBottom: 15,
  },
  settingMenuBtn: {
    backgroundColor: color.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'center',
    borderRadius: 12,
  },
  rightArrow: {
    position: 'absolute',
    tintColor: color.dakrBlack,
    width: 8,
    height: 12,
    right: 20,
  },
  menuList: {
    marginBottom: 20,
  },
  settingTop: {
    flex: 0.8,
  },
  menuText: {
    fontSize: size.size_14,
    color: color.dakrBlack,
    fontFamily: fontsFamily.montserratRegular,
  },
  smallText: {
    fontSize: 12,
    color: color.grey79,
    fontFamily: fontsFamily.montserratRegular,
    marginTop: 5,
  },
  settingBottom: {
    flex: 0.14,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  logo: {
    width: 150,
    alignSelf: 'center',
  },
  appVersionText: {
    textAlign: 'center',
    color: color.dakrBlue,
    fontFamily: fontsFamily.montserratRegular,
    marginBottom: 25,
  },
});

export default Styles;