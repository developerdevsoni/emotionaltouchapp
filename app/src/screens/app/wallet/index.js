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
import { DEVICE_WIDTH } from '../../../Utils/size';

const Tab = createMaterialTopTabNavigator();

const rech = ['96', '240', '480', '999', '1999', '4999', '9999', '14999', '19,999']


export default function Wallet({ navigation }) {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  const { t, i18n } = useTranslation();

  const [current, setCurrent] = useState('Inbox');
  const [pack, setPack] = useState(rech[0]);

  const transactionHistoryArr = [
    {
      amount: t('common:wallet.debit') + ' ₹28.32 INR',
      reason: 'Listening session with Kiyana',
      perMin: '@12 Per Minute',
      price: 'My boyfriend broke up with me over an...',
      mins: '3',
      price: t('common:wallet.total') + ' ='
    },
    {
      amount: t('common:wallet.debit') + ' ₹38.32 INR',
      reason: 'Listening session with Karan',
      perMin: '@12 Per Minute',
      price: 'My boyfriend broke up with me over an...',
      mins: '3',
      price: t('common:wallet.total') + ' ='
    },
    {
      amount: t('common:wallet.debit') + ' ₹48.32 INR',
      reason: 'Listening session with Aashika',
      perMin: '@12 Per Minute',
      price: 'My boyfriend broke up with me over an...',
      mins: '3',
      price: t('common:wallet.total') + ' ='
    },
    {
      amount: t('common:wallet.debit') + ' ₹28.32 INR',
      reason: 'Listening session with Priyanka',
      perMin: '@12 Per Minute',
      price: 'My boyfriend broke up with me over an...',
      mins: '3',
      price: t('common:wallet.total') + ' ='
    },

  ]




  const homeData = useSelector(state => state.authReducer.homeList);
  const isLoading = useSelector(state => state.globalReducer.isLoading);


  React.useEffect(() => {

    // dispatch(LoginAction({loggedIn:true}))
  }, [])









  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <Header
        onPressBack={() => navigation.goBack()}
        label={t('common:wallet.header')}
        containerStyle={[Styles.containerHeader]}
        isBack={true}
        isWallet={true}
      // rightIcon={image.vert}
      // rightIconPress={() => alert('dsdsd')}
      />

    );
  };

  //REVIEW BAck handler action
  const backActionHome = () => {
    Alert.alert('Confirm', 'Are you sure you want to exit from application', [
      {
        text: 'Cancel',
        onPress: () => '',
        style: 'cancel',
      },
      { text: 'OK', onPress: () => BackHandler.exitApp() },
    ]);

    return true;
  };

  //REVIEW BAck handler listener
  useEffect(() => {

    navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', backActionHome);
    });

    const unsubscribe = navigation.addListener('blur', () => {
      BackHandler.removeEventListener('hardwareBackPress', backActionHome);
    });

    return unsubscribe;
  }, []);










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


  const renderItemTransaction = (item) => {
    return <TransactionCard
      item={item}
      price={item.price + ' ₹ 28.32 + ₹ 4.32(GST)'}
      amount={item.amount}
      reason={item.reason}
      perMin={item.perMin}
      time={'3 minutes ago'}
    />
  }



  const Recharges = () => {

    return <View style={{ flex: 1, backgroundColor: Colors.blackBg }}>

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
          <View style={{ paddingHorizontal: DEVICE_WIDTH * 0.05, flexDirection: 'row' }}>
                    <CustomTextView
                        numberOfLines={1}
                        containerStyle={Styles.headOffers}
                        label={t('common:wallet.offer')}
                    />
                    </View>
         <TouchableOpacity
                     onPress={() => navigation.navigate(SCREEN_CONSTANT.OFFERS)}
            style={[Styles.offerDiv, true &&{ backgroundColor: color.blackLight, }]}>
            <CustomTextView
                numberOfLines={1}
                containerStyle={[Styles.listTxt]}
                label={'Get 50% cashback upto Rs40 on Airtel d'}
            />
             <CustomTextView
                numberOfLines={1}
                containerStyle={{fontFamily:fontsFamily.icon,color:color.white,}}
                label={icons.right}
            />
        
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>

          
        </View>
       
               <View style={Styles.btnRow}>
          <SubmitButton
            onPress={() => navigation.navigate(SCREEN_CONSTANT.OFFERS)}
            propsStyle={{width:DEVICE_WIDTH *0.36,backgroundColor:color.blackBtn}}
            label={t('common:wallet.offers')} />
              <SubmitButton
            onPress={() => navigation.navigate(SCREEN_CONSTANT.PASSES)}
            propsStyle={{width:DEVICE_WIDTH *0.36}}
            label={t('common:wallet.passes')} />
        </View>
          <View style={Styles.footerContainer}>
         
            <View style={[Styles.footer, { paddingBottom: 0 }]}>
              <View style={Styles.width55}>

                <CustomTextView
                  numberOfLines={1}
                  containerStyle={Styles.label}
                  label={t('common:wallet.transaction')}

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
            <View style={[Styles.footer, { paddingBottom: 0 }]}>
              <View style={Styles.width55}>

                <CustomTextView
                  numberOfLines={1}
                  containerStyle={Styles.label}
                  label={t('common:wallet.amount')}

                />
                <CustomTextView
                  numberOfLines={1}
                  containerStyle={Styles.labelo}
                  label={':'}
                />
              </View>
              <CustomTextView
                numberOfLines={1}
                containerStyle={Styles.value}
                label={'₹ ' + pack}
              />
            </View>
            <View style={[Styles.footer, { paddingBottom: 15 }]}>
              <View style={Styles.width55}>

                <CustomTextView
                  numberOfLines={1}
                  containerStyle={Styles.label}
                  label={t('common:wallet.discount')}

                />
                <CustomTextView
                  numberOfLines={1}
                  containerStyle={Styles.labelo}
                  label={':'}
                />
              </View>
              <CustomTextView
                numberOfLines={1}
                containerStyle={Styles.value}
                label={'₹ ' + pack}
              />
            </View>
            <View style={[Styles.footer, { paddingBottom: 20, borderTopWidth: 1, borderColor: color.brownDusty }]}>
              <View style={Styles.width55}>
                <CustomTextView
                  numberOfLines={1}
                  containerStyle={[Styles.label, { color: color.white }]}
                  label={t('common:wallet.payable')}
                />
                <CustomTextView
                  numberOfLines={1}
                  containerStyle={[Styles.labelo]}
                  label={':'}
                />
              </View>
              <CustomTextView
                numberOfLines={1}
                containerStyle={[Styles.value, { color: color.white }]}
                label={'₹ ' + pack}
              />
            </View>

          </View>
          <SubmitButton
            onPress={() => navigation.navigate(SCREEN_CONSTANT.OFFERS)}
            propsStyle={[Styles.yesBtn,{marginBottom:20}]}
            label={t('common:wallet.continue')} />
       
        </>
        }
      />


    </View>
  }


  const Transactions = () => {
    return <View style={{ flex: 1, backgroundColor: Colors.blackBg }}>
      <CustomTextView
        numberOfLines={1}
        containerStyle={Styles.history}
        label={t('common:wallet.history')}
      />

      <FlatList
        // onRefresh={()=>dispatch(LoginAction({loggedIn:true}))}
        // refreshing={isLoading}
        bounces={true}
        data={transactionHistoryArr}
        extraData={transactionHistoryArr}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => renderItemTransaction(item, index)}
        keyExtractor={item => item?.workId}
        ListFooterComponent={() => <View style={{ height: 55 }} />}
      />

    </View>
  }


  return (
    <SafeAreaView style={Styles.flex}>
      {isFocused && <StatusBar backgroundColor={isFocused ? color.blackBg : color.blackBg} barStyle="dark-content" />}
      {HeaderTop()}
      <View style={Styles.container}>
        <Tab.Navigator
          screenListeners={(res) => setCurrent(res?.route?.name)}
          tabBar={props => <TopTab {...props} />}>
          <Tab.Screen
            name={t('common:wallet.recharge')}
            component={Recharges}
            options={{ tabBarLabel: t('common:wallet.recharge') }}
          />
          <Tab.Screen
            name={t('common:wallet.transaction')}
            options={{ tabBarLabel: t('common:wallet.transaction') }}
            component={Transactions}
          />

        </Tab.Navigator>


      </View>
    </SafeAreaView>
  );
}
