
import React, { useContext } from 'react';
import {
 
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { DEVICE_WIDTH } from '../../../Utils/size';
import color from '../../../../rsc/theme/color';
import FastImage from 'react-native-fast-image';

import { ScrollViewComponent } from '../../../Component/basicComponent';
import fontsFamily from '../../../../rsc/theme/fontsFamily';

export default function Offers({ navigation }) {
    const dispatch = useDispatch()
    const [selected, setSelected] = React.useState(0)

    const { t, i18n } = useTranslation();
    const languageCode = i18n.language;



    //REVIEW Header Top Main
    const HeaderTop = () => {
        return (
            <Header
                onPressBack={() => navigation.goBack()}
                label={t('common:wallet.offers')}
                subLabel={''}
                containerStyle={[Styles.containerHeader]}
                isBack={true}
            
            />
        );
    };

    //SECTION -  OFFER ITEM
    const renderItem = (item, index) => {
        return <TouchableOpacity
            onPress={() => setSelected(index)}
            style={[Styles.offerDiv, selected == index && { backgroundColor: color.blackLight, }]}>
            <CustomTextView
                numberOfLines={2}
                containerStyle={[Styles.listTxt]}
                label={'Get 50% cashback upto Rs40 on Airtel d d d d d Payments Bank'}
            />
            <FastImage
                style={Styles.radio}
                source={selected == index ? image.radioFilled : image.radio}
                tintColor={color.label}
            />
        </TouchableOpacity>
    }


    return (
        <SafeAreaView style={Styles.flex}>
            {HeaderTop()}
            <ScrollViewComponent>

                <View style={{ paddingHorizontal: DEVICE_WIDTH * 0.05, flexDirection: 'row' }}>
                    <CustomTextView
                        numberOfLines={1}
                        containerStyle={Styles.headOffers}
                        label={t('common:wallet.availableOffers')}
                    />
                    <CustomTextView
                        numberOfLines={1}
                        containerStyle={[Styles.headOffers, { fontFamily: fontsFamily.regular }]}
                        label={' ' + t('common:wallet.selectOffer')}
                    />
                </View>

                <FlatList
                    bounces={true}
                    data={[1, 2, 3]}
                    extraData={[1, 2, 3]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    keyExtractor={item => item?.workId}
                    ListFooterComponent={() => <View style={{ height: 55 }} />}
                />
      <SubmitButton
           onPress={() => navigation.goBack()}
           label={t('common:wallet.apply')} />
            </ScrollViewComponent>
        </SafeAreaView>
    )
}
