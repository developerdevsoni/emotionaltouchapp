
import React from 'react';
import {
  StyleSheet,
  View,
  Image as FastImage,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import image from '../../../rsc/theme/image';
import { AppConstants } from '../../constants/appConstants';
import { SCREEN_CONSTANT } from '../constant';
import { Colors } from '../../../rsc/theme';
import CustomTextView from '../../Component/UIComponent/rc_textView';
import { size } from '../../../rsc/theme/fonts';
import icons from '../../../rsc/theme/icons';
const { width } = Dimensions.get('screen');
const BottomBar = (props) => {
  const hasNotch = isIPhoneWithMonobrow()

  const [activeIndex, setSelectedIndex] = React.useState(0);
  const { BottomTab } = AppConstants
  const [tabData, setTabData] = React.useState([
    {
      key: '0',
      itemIndex: 0,
      title: BottomTab.home,
      icon: image.homeIcon,
      iconRender: (<CustomTextView containerStyle={styles.inactiveIcon} label={icons.tab1} />),
      iconRenderActive: (<CustomTextView containerStyle={styles.activeIcon} label={icons.tab1} />),
      route: SCREEN_CONSTANT.HOME,
      onPress: () => {
        setSelectedIndex(0);
      },
    },
    {
      key: '1',
      itemIndex: 1,
      title: BottomTab.handover,
      icon: image.dietIcon,
      iconRender: (<CustomTextView containerStyle={styles.inactiveIcon} label={icons.heart} />),
      iconRenderActive: (<CustomTextView containerStyle={styles.activeIcon} label={icons.heart} />),
      route: SCREEN_CONSTANT.FAV,
      onPress: () => {
        setSelectedIndex(1);
      },
    },
    {
      key: '2',
      itemIndex: 2,
      title: BottomTab.sign,
      icon: image.plans,
      route: SCREEN_CONSTANT.PROFILE,
      iconRender: (<CustomTextView containerStyle={styles.inactiveIcon} label={icons.user} />),
      iconRenderActive: (<CustomTextView containerStyle={styles.activeIcon} label={icons.user} />),
      onPress: () => {
        setSelectedIndex(2);
      },
    }
  ]);

  const _onClickTab = (index, route) => {

    // if (index == 0) {
    setSelectedIndex(index);
    props.navigation.navigate(route)
    // }


  }

  React.useEffect(() => {
    setSelectedIndex(props?.state?.index)
  }, [props])

  return (
    <View style={styles.tabBarContainer}>
      {
        tabData.map((item, index) => {
          // console.log(item)
          return (
            <TouchableOpacity
              key={item.key}
              style={[styles.tabButton, { width: '34%' }]}
              disabled={index==1}
              onPress={() => _onClickTab(index, item.route)}
            >
              {activeIndex === item.itemIndex && <View style={{ width: '50%', backgroundColor: Colors.darkRed, height: 2, position: 'absolute', top: 0 }} />}
              {activeIndex === item.itemIndex ? item.iconRenderActive : item.iconRender}

            </TouchableOpacity>
          )
        })
      }
    </View>

  )
};
const styles = StyleSheet.create({
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    height: '100%',
    width: '33%'
  },

  tabImage: {
    width: 25,
    height: 15,
    resizeMode: 'contain',
  },
  tabLabel: {
    fontSize: 11,
    fontFamily: fontsFamily.montserratRegular,
    color: color.greyB1,
    // marginTop: 6,
    textAlign: 'center',
    alignItems: 'center'

  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: color.white,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width,
    paddingRight: 10,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderColor: color.brownDusty,
    backgroundColor: color.blackBg,
    height: isIPhoneWithMonobrow() ? Dimensions.get('screen').height * 0.1 : Dimensions.get('screen').height * 0.07,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.0,
    elevation: 1,
  },
  inactiveIcon: { 
    fontSize: size.extraLarge, 
    fontFamily: fontsFamily.icon, 
    color: color.label 
  },
  activeIcon: { fontSize: size.extraLarge, fontFamily: fontsFamily.icon, color: color.darkRed },

  tabContainerView: {
    backgroundColor: color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: Dimensions.get('screen').width,
    paddingHorizontal: 15,
    height: isIPhoneWithMonobrow() ? Dimensions.get('screen').height * 0.09 : Dimensions.get('screen').height * 0.09,
    alignItems: 'flex-start',
    paddingTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: color.grey,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0.2,
    borderColor: '#ccc'
  },
});

export default BottomBar;
