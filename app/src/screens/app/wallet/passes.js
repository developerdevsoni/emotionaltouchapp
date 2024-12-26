
import React, { useContext } from 'react';
import {
    SafeAreaView,
    View
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';

export default function Passes({ navigation }) {
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
                    label={t('common:wallet.passes')}
                    subLabel={''}
                    containerStyle={[Styles.containerHeader]}
                    isBack={true}
              
                />
            </View>
        );
    };

  

 

    return (
        <SafeAreaView style={Styles.flex}>
            {HeaderTop()}
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               
                  <CustomTextView
                    containerStyle={Styles.noPassAvailable}
                    numberOfLines={2}
                    label={t('common:wallet.noPassAvailable')}

                />
                
              

            </View>
        </SafeAreaView>
    )
}
