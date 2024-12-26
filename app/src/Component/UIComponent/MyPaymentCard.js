import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';


//SECTION CUSTOM IMPORTS
import color from '../../../rsc/theme/color';
import fontsFamily from '../../../rsc/theme/fontsFamily';
import { DEVICE_WIDTH } from '../../../rsc/theme/screenSizes';
import image from '../../../rsc/theme/image';
import { AppConstants } from '../../constants/appConstants';
import { size } from '../../../rsc/theme/fonts';

export const MyPaymentCard = props => {
  const {myPayments}=AppConstants
  const {propsStyle, onPress, price,date,subTitle,title,item,index} = props;
  return (
    <TouchableOpacity
    activeOpacity={1}
      style={[
        Styles.payment,
      ]}
      key={item.id}>
      <View style={Styles.LatestBlogContent}>
        <View style={Styles.blogTop}>
          <Text style={Styles.planName}>{title}</Text>
          <Text style={Styles.price}>{price}</Text>
        </View>
        <View style={[Styles.blogTop, { marginTop: 2 }]}>
          <Text style={Styles.blogSubtitle}>{subTitle}</Text>
          <Text style={Styles.blogDate}>{date}</Text>
        </View>
        <View style={Styles.seprator} />
        <View style={[Styles.blogTop]}>
          <View>
            <Text style={Styles.dateHeader}>{myPayments.purchasedOn}</Text>
            <Text style={Styles.blogDate}>{date}</Text>
          </View>
          <View>
            <Text style={Styles.dateHeader}>{myPayments.expireOn}</Text>
            <Text style={Styles.blogDate}>{date}</Text>
          </View>
          <View style={{ width: '30%', alignItems: 'flex-end' }}>
            <Image
              source={image.reload}
              style={{ height: 20, width: 20 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
    payment: {
        marginLeft: 20,
        backgroundColor: color.white,
        borderRadius: 12,
        width:DEVICE_WIDTH *0.9,
        marginBottom: 15,
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
      planName: {
        color: color.lightRed,
        fontFamily: fontsFamily.montserratMedium,
        fontSize: size.size_16,
      },
      blogSubtitle: {
        color: color.dakrBlack,
        fontFamily: fontsFamily.montserratMedium,
        fontSize: 13,
      },
      dateHeader:{
        color: color.dakrBlack,
        fontFamily: fontsFamily.montserratRegular,
        fontSize: 13,
      },
      price:{
        color: color.dakrBlack,
        fontSize: size.size_16,
        fontFamily: fontsFamily.montserratMedium,
      },
      blogDate: {
        color: color.greyA9,
        fontSize: 12,
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
      seprator:{ 
        height: 1, 
        width: '100%', 
        marginVertical: 7, 
        backgroundColor: color.borderGreyColor 
      }
});
