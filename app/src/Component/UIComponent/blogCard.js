import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

//SECTION Custom Imports
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import { DEVICE_WIDTH } from '../../../rsc/theme/screenSizes';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { size } from '../../../rsc/theme/fonts';

export const BlogCard = props => {
  const blogs = useSelector(state => state.homeReducer.blogs);

  const {propsStyle, label, onPress, url,title,subTitle,description,date, nextIcon, txtStyle,onLongPress,item,index} = props;
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[
      Styles.LatestBlog,
      index === blogs.length -1  && Styles.LatestBlogLast,
      { width: DEVICE_WIDTH - 100 },
     
    ]}
    key={item.id}>
    <FastImage
      source={{ uri: url }}
      style={Styles.blogImg}
      resizeMode="cover"
    />
    <View style={Styles.LatestBlogContent}>
      <View style={Styles.blogTop}>
        <Text style={Styles.blogSubtitle}>{subTitle}</Text>
        <Text style={Styles.blogDate}>{date}</Text>
      </View>
      <Text style={Styles.blogTitle}>{title}</Text>
      <Text numberOfLines={6} style={Styles.blogDescription}>{description}</Text>
    </View>
  </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
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
});
