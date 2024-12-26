import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Alert,
  BackHandler,
  FlatList,
  Modal,
  TouchableOpacity,
  Text,
  Switch,
} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';


//SECTION CUSTOM IMPORTS
import Styles from './style';
import color from '../../../../rsc/theme/color';
import { useDispatch, useSelector } from 'react-redux';
import { ChatList } from '../../../Component/UIComponent/chatList';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import { SubmitButton, TextBox } from '../../../Component/UIComponent';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../Utils/size';
import { useTranslation } from 'react-i18next';
import image from '../../../../rsc/theme/image';
import FastImage from 'react-native-fast-image';
import { Colors, FontFamily } from '../../../../rsc/theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopTab } from '../../../Component/UIComponent/topTab';
import { Listener } from '../../../Component/UIComponent/allListener';
import { size } from '../../../../rsc/theme/fonts';
import { DropDown } from '../../../Component/UIComponent/rc_dropDown';
import PopupModal from '../../../Component/UIComponent/rc_modal';
import { SCREEN_CONSTANT } from '../../../navigation/constant';
import icons from '../../../../rsc/theme/icons';
import { DataManager } from '../../../Utils/dataManager';
import { getProfileAction, getTopicsListAction } from '../../../Redux/Actions/authActions';
import { getListenerDetailsAction, getListenerListAction } from '../../../Redux/Actions/homeActions';

export default function AllListeners(props,param) {
    const [allListenerState, setallListenerState] = useState([]);
    const allListener = useSelector(state => state.homeReducer.allListener);
  const [isLoad, setLoading] = React.useState(false);
  const [storyModal, setStoryModal] = useState(false);
  const [storyData, setStoryData] = useState(false);
  const { t, i18n } = useTranslation();
  const navigation=useNavigation()
  const onRefresh = () => {
    setLoading(true)
    dispatch(getListenerListAction())
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }
    // const allListenerState = useSelector(state => state.homeReducer.allListener);  
    const pages = useSelector(state => state.homeReducer);

    const listenerItem = (item,index) => {
        return <Listener
          onPressAvatar={()=>{ setStoryData(item), setStoryModal(true)}}
          img={{ uri: item.profile_photo }}
          name={item.full_name}
          msg={item.message}
          unseen={item?.unseen}
          time={item?.exp_hours}
          age={item?.age}
          topic={item?.topic_name}
          avgRating={item?.average_rating}
          totalReviews={item?.total_reviews}
          gender={item?.gender.toLowerCase() =='male' ?'M':'F'}
          isOnline={item?.online_status}
          onPress={() => navigation.navigate(SCREEN_CONSTANT.CHAT, { user: item })}
    
        />
      }

      const storyPopup = () => {
        return <PopupModal
          style={{ backgroundColor: color.blackBtn, padding: 0,overflow:'hidden' }}
          visible={storyModal}
          onClose={() => setStoryModal(false)}
        >
          <FastImage
            source={{ uri: storyData?.profile_photo }}
            style={{ height: DEVICE_HEIGHT / 3, width: '100%' }}
          />
          <View style={{ padding: 20 }}>
    
    
            <View style={Styles.storyInfoRow}>
    
              <View style={Styles.storyMine}>
                <CustomTextView
                  numberOfLines={10}
                  containerStyle={[Styles.storyTxt, { padding: 15 }]}
                  label={t('common:messages.story')}
                />
              </View>
              <CustomTextView
                onPress={() => {setStoryModal(false), setTimeout(() => {
                  navigation.navigate(SCREEN_CONSTANT.LISTENER_PROFILE,{id:storyData.id})
                }, 2000);}}
    
                numberOfLines={10}
                containerStyle={Styles.infoIcon}
                label={icons.info}
              />
            </View>
            <CustomTextView
              numberOfLines={10}
              containerStyle={Styles.storyTxt}
              label={storyData?.message}
            />
            <View style={{ marginVertical: 10 }}>
              <SubmitButton
                onPress={() => setStoryModal(false)}
                propsStyle={Styles.yesBtn}
                label={t('common:messages.share')} />
    
            </View>
          </View>
    
    
        </PopupModal>
      }

      React.useEffect(()=>{
        if(allListener.length >0)
        {
        
    
          
          let arr=[...allListenerState ,...allListener]
          console.log(arr,'dsdsdsds',pages?.current_page*5)
          if(allListenerState.length < pages?.current_page*5)
          {
          setallListenerState(arr)
          }
        }
    
      },[allListener])

  const EmptyCompo=()=>{
    return<View style={{alignItems:'center',justifyContent:'center',height:DEVICE_HEIGHT*0.5}}>
    <CustomTextView
      numberOfLines={1}
      containerStyle={Styles.empty}
      label={'No Results'}
    />
  </View>
  }

        return (<View style={{ flex: 1, backgroundColor: Colors.blackBg }}>
          {/* <CustomTextView
            numberOfLines={1}
            containerStyle={Styles.recentlyConnected}
            label={t('common:messages.recentConnect')}
          /> */}
    
    
          {/* <View style={Styles.recentChatView}>
            <FlatList
              horizontal={true}
              bounces={true}
              data={chats}
              extraData={chats}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={Styles.recentChatFlatList}
              renderItem={({ item, index }) => recentChat(item, index)}
              keyExtractor={item => item?.workId}
              ListFooterComponent={() => <View style={{ height: 55 }} />}
            />
          </View> */}
          <FlatList
            bounces={true}
            onRefresh={() => onRefresh()}
            refreshing={isLoad}       
            data={allListenerState}
            ListEmptyComponent={()=>EmptyCompo()}
            extraData={allListenerState}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => listenerItem(item, index)}
            keyExtractor={item => item?.workId}
            ListFooterComponent={() => <View style={{ height: 55 }} />}
            // onEndReached={()=>NextPage()}
          />
        {storyPopup()}

        </View>)
      
}

