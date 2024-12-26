
import React, { useContext } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    View
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import image from '../../../../rsc/theme/image';

export default function IncomingCall({ navigation }) {
    const dispatch = useDispatch()
    const { app, auth } = useContext(AuthContext);
    const [deleteModal, setDeleteModalVisible] = React.useState(false)
    const [selected, setQuery] = React.useState()
    const [expandedQuestion, setExpandedQuestion] = React.useState(null);

    const { t, i18n } = useTranslation();
    const languageCode = i18n.language;



    //console.log(languageCode, 'teststst')

    //REVIEW Header Top Main
    const HeaderTop = () => {
        return (
            <View style={Styles.backBtn}>
                <Header
                    onPressBack={() => navigation.goBack()}
                    label={''}
                    subLabel={''}
                    containerStyle={[Styles.containerHeader]}
                    isBack={true}

                />
            </View>
        );
    };





    return (
        <SafeAreaView style={Styles.flex}>
            <ImageBackground
                source={{ uri: 'https://picsum.photos/200/300/?blur' }}
                style={Styles.img}
            >
                {/* {HeaderTop()} */}
                <View style={Styles.name}>

                    <CustomTextView
                        containerStyle={Styles.noPassAvailable}
                        numberOfLines={2}
                        label={'Anushka'}

                    />
                    <CustomTextView
                        containerStyle={Styles.noPassAvailable}
                        numberOfLines={2}
                        label={'Incoming Call'}
                    />
                </View>
                <View style={Styles.callbtn}>
                    <TouchableOpacity>
                        <FastImage
                            source={image.reject}
                            style={Styles.btn}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FastImage
                            source={image.accept}
                            style={Styles.btn}
                        />
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
