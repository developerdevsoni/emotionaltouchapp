
import React, { useContext } from 'react';
import {

  SafeAreaView,
  
  View,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import Header from '../../../Component/basicComponent/header';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';

import { ScrollViewComponent } from '../../../Component/basicComponent';
import { SCREEN_CONSTANT } from '../../../navigation/constant';

export default function UserSupport({ navigation }) {
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const [deleteModal, setDeleteModalVisible] = React.useState(false)
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;
 


  //console.log(languageCode, 'teststst')

  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={t('common:supportUs.header')}
          subLabel={''}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
          // rightIcon={image.vert}
          // rightIconPress={() => alert('dsdsd')}
        />
      </View>
    );
  };



  


 

  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      <ScrollViewComponent>
        
           <SubmitButton
            onPress={() => navigation.navigate(SCREEN_CONSTANT.USER_SUPPORT_CATEGORY)}
            propsStyle={Styles.yesBtn}
            label={t('common:supportUs.btn1')} />
           <SubmitButton
            onPress={() => navigation.navigate(SCREEN_CONSTANT.CONTACT_US)}
            propsStyle={Styles.noBtn}
            label={t('common:supportUs.btn2')} />


      </ScrollViewComponent>
    </SafeAreaView>
  )
}
