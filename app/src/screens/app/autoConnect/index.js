import React, { useContext } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import Header from '../../../Component/basicComponent/header';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch } from 'react-redux';

import { ScrollViewComponent } from '../../../Component/basicComponent';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import FastImage from 'react-native-fast-image';
import image from '../../../../rsc/theme/image';
import color from '../../../../rsc/theme/color';
import icons from '../../../../rsc/theme/icons';

export default function AutoConnect({ navigation }) {
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const [selected, setSelected] = React.useState('')
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;



  //console.log(languageCode, 'teststst')

  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={t('common:autoConnect.header')}
          subLabel={''}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
        />
      </View>
    );
  };



  //REVIEW Title Paragraph Content
  const titleParagraph = () => {
    return (
      <View >
        <CustomTextView
          containerStyle={[Styles.titleStyle, Styles.welcomeText]}
          label={t('common:autoConnect.header')}
        />
        <CustomTextView
          containerStyle={[Styles.paragraphStyle]}
          label={t('common:autoConnect.desc')}
        />


        <FastImage
          source={image.usersList}
          resizeMode='contain'
          style={Styles.userListImg}
        />
      </View>
    );
  };





  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      <ScrollViewComponent>

        <View style={Styles.loginTop}>
          {titleParagraph()}
          <View style={Styles.iconsDiv}>
            {[icons.message, icons.phone, icons.video].map((i) => {
              return <TouchableOpacity 
              onPress={()=> setSelected(i)}
              style={[Styles.iconView,selected==i &&{borderColor:color.darkRed}]}>
                <CustomTextView
                  containerStyle={[Styles.iconStyle]}
                  label={i}
                />
              </TouchableOpacity>
            })}
          </View>
        </View>

        <SubmitButton
          onPress={() => navigation.goBack()}
          propsStyle={Styles.yesBtn}
          label={t('common:autoConnect.btn')} />



      </ScrollViewComponent>
    </SafeAreaView>
  )
}
