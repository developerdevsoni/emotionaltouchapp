import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Alert,
  BackHandler,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';


//SECTION CUSTOM IMPORTS
import Styles from './style';
import color from '../../../../rsc/theme/color';
import { AppConstants } from '../../../constants/appConstants';
import { useDispatch, useSelector } from 'react-redux';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import { SubmitButton, TextBox } from '../../../Component/UIComponent';
import { useTranslation } from 'react-i18next';
import { Colors } from '../../../../rsc/theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopTab } from '../../../Component/UIComponent/topTab';
import { SCREEN_CONSTANT } from '../../../navigation/constant';
import { Header } from '../../../Component/basicComponent';
import { TransactionCard } from '../../../Component/UIComponent/transaction';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import icons from '../../../../rsc/theme/icons';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../Utils/size';
import Slider from 'react-native-slider';


const rech = ['96', '240', '480', '999', '1999', '4999', '9999', '14999', '19,999']


export default function GiftListener({ navigation }) {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  const { t, i18n } = useTranslation();

  const [current, setCurrent] = useState('Inbox');
  const [pack, setPack] = useState(rech[0]);



  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <Header
        onPressBack={() => navigation.goBack()}
        label={t('common:giftListener.header')}
        containerStyle={[Styles.containerHeader]}
        isBack={true}
        // isWallet={true}
      // rightIcon={image.vert}
      // rightIconPress={() => alert('dsdsd')}
      />

    );
  };


  const renderItem = (item) => {
    return <TouchableOpacity
      onPress={() => setPack(item)}
      style={[Styles.amountDiv, item == pack && { borderWidth: 1, borderColor: color.darkRed }]}>
      <CustomTextView
        numberOfLines={1}
        containerStyle={Styles.amount}
        label={'₹ ' + item}
      />
    </TouchableOpacity>
  }





  const Recharges = () => {

    return <View style={{ flex: 1, backgroundColor: Colors.blackBg }}>
 <View style={[Styles.footer]}>
              <View style={Styles.width55}>

                <CustomTextView
                  numberOfLines={1}
                  containerStyle={Styles.label}
                  label={t('common:giftListener.amount')}

                />
                <CustomTextView
                  numberOfLines={1}
                  containerStyle={[Styles.labelo]}
                  label={':'}
                />
              </View>
              <CustomTextView
                numberOfLines={1}
                containerStyle={Styles.value}
                label={'₹ ' + pack}
              />
            </View>
      <FlatList
        bounces={true}
        data={rech}
        extraData={rech}
        numColumns={3}
        columnWrapperStyle={Styles.column}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={item => item}
        ListFooterComponent={() => <>
         
   
        
       
              
          
          <SubmitButton
            onPress={() => navigation.navigate(SCREEN_CONSTANT.OFFERS)}
            propsStyle={[Styles.yesBtn,{marginTop:DEVICE_HEIGHT*0.2}]}
            label={t('common:wallet.continue')} />
       
        </>
        }
      />


    </View>
  }




  return (
    <SafeAreaView style={Styles.flex}>
      {isFocused && <StatusBar backgroundColor={isFocused ? color.blackBg : color.blackBg} barStyle="dark-content" />}
      {HeaderTop()}
      <View style={Styles.container}>
       {Recharges()}
           
        


      </View>
    </SafeAreaView>
  );
}
