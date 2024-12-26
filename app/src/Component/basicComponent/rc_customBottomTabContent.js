import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
} from 'react-native';

import {AuthContext} from '../../navigation/context';
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import image from '../../../rsc/theme/image';

export default function CustomBottomTabContent(props, {navigation}) {
  const {auth, home} = useContext(AuthContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLogoutAlert, setLogoutAlert] = useState(false);
  const [test, setTest] = useState(false);

  const [tabData, setTabData] = useState([
    {
      key: '0',
      itemIndex: 0,
      title: 'Home',
      icon: image.homeIcon,
      onPress: () => {
        setActiveIndex(0);
      },
    },
    {
      key: '1',
      itemIndex: 1,
      title: 'Diary',
      icon: image.diaryIcon,
      onPress: () => {
        setActiveIndex(1);
      },
    },
    {
      key: '2',
      itemIndex: 2,
      title: 'Diet',
      icon: image.dietIcon,
      onPress: () => {
        setActiveIndex(2);
      },
    },
    {
      key: '3',
      itemIndex: 3,
      title: 'Community',
      icon: image.communityIcon,
      onPress: () => {
        setActiveIndex(3);
      },
    },
    {
      key: '4',
      itemIndex: 4,
      title: 'Recipes',
      icon: image.recipesIcon,
      onPress: () => {
        setActiveIndex(4);
      },
    },
  ]);

  return (
    <SafeAreaView style={[styles.tabBarContainer]}>
      {tabData.map((item, index) => {
        return (
          <TouchableOpacity
            key={item.key}
            style={[styles.tabButton]}
            onPress={() => {
              item.onPress();
            }}>
            <Image
              source={item.icon}
              style={[
                styles.tabImage,
                {
                  tintColor:
                    activeIndex === item.itemIndex
                      ? color.lightRed
                      : color.greyB1,
                },
              ]}
            />
            <Text
              style={[
                styles.tabLabel,
                {
                  color:
                    activeIndex === item.itemIndex
                      ? color.lightRed
                      : color.greyB1,
                },
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: color.white,
    paddingHorizontal: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.0,
    elevation: 1,
  },
  tabButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabImage: {
    width: 25,
    height: 15,
    resizeMode: 'contain',
  },
  tabLabel: {
    fontSize: 12,
    fontFamily: fontsFamily.montserratRegular,
    color: color.greyB1,
    marginTop: 6,
  },
});
