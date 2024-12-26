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
import { Colors, FontFamily } from '../../../rsc/theme';
import CustomTextView from './rc_textView';
import { SubmitButton } from './submitButton';
import FastImage from 'react-native-fast-image';
import { size } from '../../../rsc/theme/fonts';
import { useTranslation } from 'react-i18next';
import icons from '../../../rsc/theme/icons';

export const ReviewCard = props => {
    const { myPayments } = AppConstants
    const { img, name, review, star, time, date, index } = props;
    const { t, i18n } = useTranslation();

    const renderStar = (rate) => {
        return [1, 2, 3, 4, 5].map((i) => {
            if (rate >= i) {
                return <CustomTextView
                    containerStyle={Styles.starF}
                    label={icons.starF}
                />
            }
            else {
                return <CustomTextView
                    containerStyle={Styles.starEmpty}
                    label={icons.starEmpty}
                />
            }
        })

    }


    return (<View style={Styles.container}>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '14%' }}>
                <TouchableOpacity
                    //   onPress={onPressAvatar}
                    style={{ height: 45, width: 45, }}>
                    <FastImage
                        source={img}
                        style={Styles.profile}
                    />

                </TouchableOpacity>
            </View>
            <View style={Styles.ratingDiv}>
                <CustomTextView
                    containerStyle={{ fontFamily: FontFamily.bold, fontSize: size.size_16, color: Colors.white }}
                    numberOfLines={1}
                    label={name}
                />
                <View style={Styles.rateRow}>
                    {renderStar(3)}
                    <CustomTextView
                        containerStyle={Styles.rateText}
                        numberOfLines={1}
                        label={'3.0'}
                    />
                </View>
            </View>
            <CustomTextView
                containerStyle={Styles.date}
                numberOfLines={1}
                label={date}
            />
            <CustomTextView
                containerStyle={Styles.time}
                numberOfLines={1}
                label={time}
            />
        </View>
        <CustomTextView
            containerStyle={{ fontFamily: FontFamily.semibold, fontSize: size.size_16, color: Colors.label, marginTop: 8 }}
            // numberOfLines={1}
            label={review}
        // label={}
        />

    </View>
    );
};

const Styles = StyleSheet.create({
    time: {
        fontFamily: FontFamily.semibold,
        fontSize: size.small,
        color: Colors.label,
        position: 'absolute',
        right: 0,
        top: 20
    },
    date: {
        fontFamily: FontFamily.semibold,
        fontSize: size.small,
        color: Colors.label,
        position: 'absolute',
        right: 0
    },
    rateText: {
        fontFamily: FontFamily.bold,
        fontSize: size.small,
        color: Colors.label
    },
    starEmpty: {
        fontFamily: fontsFamily.icon,
        fontSize: size.tiny,
        color: color.gold,
        marginRight: 2
    },
    starF: {
        fontFamily: fontsFamily.icon,
        fontSize: size.small,
        color: color.gold,
        marginRight: 2
    },
    container: {
        borderWidth: 1,
        borderColor: Colors.brownDusty,
        backgroundColor: Colors.blackBg,
        paddingBottom: 20,
        width: DEVICE_WIDTH * 0.9,
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    btn: {
        width: DEVICE_WIDTH * 0.32,
        backgroundColor: color.darkRed,
        marginHorizontal: 10,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    btnDiv: {
        width: '45%',
        justifyContent: 'flex-end'
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 30
    },
    ratingDiv: {
        width: '78%',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginTop: 2
    },
    rateRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '70%',
        alignItems: 'center'
    },





});
