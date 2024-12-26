
import React, { useContext } from 'react';
import {
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';

import { ScrollViewComponent } from '../../../Component/basicComponent';
import { LanguageCard } from '../../../Component/UIComponent/languageCard';
import { supportCategory } from '../../../constants/appConstants';
import { SCREEN_CONSTANT } from '../../../navigation/constant';

export default function SupportCategory({ navigation }) {
    const dispatch = useDispatch()
    const { app, auth } = useContext(AuthContext);
    const [deleteModal, setDeleteModalVisible] = React.useState(false)
    const [selected, setQuery] = React.useState()

    const { t, i18n } = useTranslation();
    const languageCode = i18n.language;


    //console.log(languageCode, 'teststst')

    //REVIEW Header Top Main
    const HeaderTop = () => {
        return (
            <View style={Styles.backBtn}>
                <Header
                    onPressBack={() => navigation.goBack()}
                    label={t('common:supportUs.header1')}
                    subLabel={''}
                    containerStyle={[Styles.containerHeader]}
                    isBack={true}
                // rightIcon={image.vert}
                // rightIconPress={() => alert('dsdsd')}
                />
            </View>
        );
    };



    const renderItem = ({ item }) => {
        return <LanguageCard
            label={item.name}
            selected={item.name ==selected}
            onPress={() =>{ setQuery(item.name),navigation.navigate(SCREEN_CONSTANT.USER_SUPPORT_CATEGORY_QUERIES)}}
        />
    }





    const TopList = ({ name, count, onPress }) => {
        return <TouchableOpacity
            onPress={onPress}
            style={Styles.lists}>
            <View style={Styles.logoProfileRow}>

                <CustomTextView
                    containerStyle={Styles.listTxt}
                    numberOfLines={1}
                    label={name}
                />
                <CustomTextView
                    containerStyle={Styles.listTxtRegular}
                    numberOfLines={1}
                    label={t('common:supportUs.queries')}
                />

            </View>
            <View style={Styles.rightIconDiv}>
                <CustomTextView
                    containerStyle={Styles.count}
                    numberOfLines={1}
                    label={count}
                />
            </View>
        </TouchableOpacity>
    }



    return (
        <SafeAreaView style={Styles.flex}>
            {HeaderTop()}
            <ScrollViewComponent>
                <TopList
                    onPress={() => console.log('sss')}
                    name={'Open'}
                    count={'0'}
                />
                <TopList
                    onPress={() => console.log('sss')}
                    name={'Replied'}
                    count={'0'}
                />
                <TopList
                    onPress={() => console.log('sss')}
                    name={'Previous'}
                    count={'3'}
                />
                  <CustomTextView
                    containerStyle={Styles.headList}
                    numberOfLines={1}
                    label={'Please select a Category'}
                />
                
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={Styles.width90}
                    data={supportCategory}
                    extraData={supportCategory}
                    keyExtractor={item => item}
                    renderItem={renderItem}
                    ListFooterComponent={() => <View style={{ height: 50 }} />}
                />

            </ScrollViewComponent>
        </SafeAreaView>
    )
}
