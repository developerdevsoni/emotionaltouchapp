import React, {useContext} from 'react';
import {View, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

//SECTION - CUSTOM IMPORTS
import Header from '../../../Component/basicComponent/header';
import Styles from './style';
import color from '../../../../rsc/theme/color';
import { AuthContext } from '../../../navigation/context';
import { AppConstants } from '../../../constants/appConstants';
import { ListCompo } from '../../../Component/UIComponent/chatList';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../../Redux/Actions/authActions';


export default function Favorites({navigation}) {
  const {handover}=AppConstants
  const isFocused=useIsFocused()
  const {app,auth} =useContext(AuthContext)
  const homeData = useSelector(state => state.authReducer.homeList);
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const dispatch=useDispatch()

 
  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <Header
        containerStyle={[Styles.containerHeader]}
        labelStyle={[Styles.headerStyle]}
        backIconStyle={{tintColor: color.dakrBlue}}
        isOnlyName={false}
        logouticon={true}
        label={'Favorites'}
      />
    );
  };

  const renderItem = (item) => {
    return<ListCompo
    firstPress={()=>navigation.navigate('HandoverStart',{id:item?.timeSheet,name:item?.childDetails[0]?.childName})}
    secondPress={()=>navigation.navigate('HandoverStart',{id:item?.timeSheet,name:item?.childDetails[0]?.childName,isEdit:true})}
    nameFirst={'Start'}
    nameSecond={'Edit'}
    workType={item?.workType}
    start={item?.from}
    day={item?.day}
    end={item?.to}
    workDetails={item?.workDetails &&item?.workDetails?.join('')}
    clientDetails={{name:item?.childDetails[0]?.childName,dob:item?.childDetails[0]?.dateOfBirth,address:item?.childDetails[0]?.ethnicOrigin}}
  
    />
  }

  return (
    <SafeAreaView style={Styles.flex}>
      <View style={Styles.container}>
      {isFocused &&<StatusBar 
      backgroundColor={isFocused ?color.white:color.white} barStyle="dark-content" />}
        {HeaderTop()}
        <View style={Styles.container}>
        {/* {renderItem()} */}
        <FlatList
         onRefresh={()=>dispatch(LoginAction({loggedIn:true}))}
         refreshing={isLoading}
         bounces={true}
        data={homeData?.workTimeTableList?.length > 0  && homeData?.workTimeTableList.filter((i,k)=> i?.timeSheetStatus !=='NOT SUBMITTED')}
        extraData={homeData?.workTimeTableList}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index}) => renderItem(item,index)}
        keyExtractor={item => item?.workId}
        ListFooterComponent={()=><View style={{height:55}}/>}
      />
      </View>
      </View>
    </SafeAreaView>
  );
}
