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
import { useIsFocused } from '@react-navigation/native';


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
import { TopTabCustom } from '../../../Component/UIComponent/topTabCustom';

const Tab = createMaterialTopTabNavigator();

const chats = [
  {
    img: 'https://picsum.photos/id/237/200/300',
    name: 'Anushka',
    msg: 'My boyfriend broke up with me over an...',
    unseen: '10',
    time: '10:45 AM',
    isOnline: true
  },
  {
    img: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
    name: 'Harry Devgan',
    msg: 'Yes, It’s perfect form me, that you.',
    unseen: '',
    time: '10:45 AM',
    isOnline: false

  },
  {
    img: 'https://picsum.photos/200/300/?blur',
    name: 'Amisha',
    msg: 'My boyfriend broke up with me over an...',
    unseen: '10',
    time: '10:45 AM',
    isOnline: true

  },
  {
    img: 'https://picsum.photos/200/300?grayscale',
    name: 'Sapana',
    msg: 'Yes, It’s perfect form me, that you.',
    unseen: '10',
    time: '10:45 AM',
    isOnline: true

  },
  {
    img: 'https://picsum.photos/seed/picsum/200/300',
    name: 'Harry Devgan',
    msg: 'My boyfriend broke up with me over an...',
    unseen: '0',
    time: '10:45 AM',
    isOnline: true

  },
  // {
  //   img: 'https://picsum.photos/id/237/200/300',
  //   name: 'Harry Devgan',
  //   msg: 'My boyfriend broke up with me over an...',
  //   unseen: '',
  //   time: '10:45 AM',
  //   isOnline: true

  // }
]


export default function Home({ navigation }) {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  const [popup, setPopup] = useState(false);
  const [filterPopupVisible, setVisible] = useState(false);

  const { t, i18n } = useTranslation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const allListener = useSelector(state => state.homeReducer.allListener);
  // const allListenerState = useSelector(state => state.homeReducer.allListener);
  const [allListenerState, setallListenerState] = useState([]);

  const pages = useSelector(state => state.homeReducer);


  const [current, setCurrent] = useState('Inbox');
  const [dropDownState, setDropDownState] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [serviceTypeFilter, setServiceTypeFilter] = useState('');
  const [availablibilityModal, setAvailabilityModal] = useState(false);
  const [storyModal, setStoryModal] = useState(false);
  const [storyData, setStoryData] = useState(false);

  //setStoryData
  const [isLoad, setLoading] = React.useState(false);
  const topicsList = useSelector(state => state.authReducer.topicsList);

  const [selected, setSelected] = useState([t('common:messages.chat')]);

  console.log(topicsList, 'listener list', allListener)

  const options = [
    {
      name: t('common:messages.chat'),
      icon: icons.message,
      nameShort: 'Chat'
    },
    {
      name: t('common:messages.call'),
      icon: icons.phone,
      nameShort: 'Call'

    },
    {
      name: t('common:messages.videoCall'),
      icon: icons.video,
      nameShort: 'Vcall'

    },

  ]

  React.useEffect(() => {
    DataManager.getUserId().then((res) => {
      console.log(res, 'userID')
      if (res != null) {
        dispatch(getProfileAction(res))
        dispatch(getTopicsListAction())
        // dispatch(getListenerDetailsAction('3'))

      }
      else {
        console.log('---PROFILE---')
      }
    })
  }, [])

  React.useEffect(() => {

    // let data = {
    //   search: '',
    //   language: languageFilter,
    //   category: categoryFilter ? categoryFilter?.id : '',
    //   service_type: 'chat',
    //   page: 1
    // }
    // Object.keys(data).forEach(function (key) {
    //   if (!data[key]) {
    //     delete data[key];
    //   }
    // });
    // console.log(data, 'data spliced1')

    // dispatch(getListenerListAction(data))

  }, [])

  React.useEffect(() => {
    if (allListener.length > 0) {



      let arr = [...allListenerState, ...allListener]
      console.log(arr, 'dsdsdsds', pages?.current_page * 5)
      if (allListenerState.length < pages?.current_page * 5) {
        setallListenerState(arr)
      }
    }

  }, [allListener])




  const filterPopup = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={filterPopupVisible}
        onRequestClose={() => {
          setVisible(!filterPopupVisible)
        }}>
        <View style={Styles.modalViewMain}>

          <View style={Styles.centeredView}>
            <View style={Styles.headIcon}>

              <CustomTextView
                containerStyle={[Styles.headIconSt]}
                numberOfLines={1}
                label={icons.filter}
              />
            </View>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={Styles.close}>
              <FastImage
                style={Styles.radio}
                source={image.close}
              />
            </TouchableOpacity>
            <View>
              <CustomTextView
                containerStyle={Styles.filterHead}
                numberOfLines={1}
                label={t('common:messages.filter')}
              />
              {Gender()}
              <DropDown
                heading={t('common:messages.language')}
                selected={languageFilter ? languageFilter : t('common:messages.chooseLanguage')}
                options={['English', 'Hindi']}
                onPress={() => setDropDownState('language')}
                onSelect={(t) => { setDropDownState(''), setLanguageFilter(t) }}
                isOpen={dropDownState == 'language'}
              />
              <DropDown
                heading={t('common:messages.category')}
                selected={categoryFilter?.name ? categoryFilter.name : t('common:messages.chooseCategory')}
                // options={['Breakup', 'Loneliness', 'Divorced']}
                options={topicsList}
                onPress={() => setDropDownState('category')}
                onSelect={(t) => { setDropDownState(''), setCategoryFilter(t) }}
                isOpen={dropDownState == 'category'}
              />
              <DropDown
                heading={t('common:messages.service')}
                selected={serviceTypeFilter ? serviceTypeFilter : t('common:messages.chooseService')}
                options={['Listener', 'User']}
                onPress={() => setDropDownState('service')}
                onSelect={(t) => { setDropDownState(''), setServiceTypeFilter(t) }}
                isOpen={dropDownState == 'service'}
              />
              <View style={{ marginVertical: 20 }}>
                <SubmitButton
                  onPress={() => setVisible(false)}
                  label={t('common:messages.applyFilter')} />

              </View>


            </View>
          </View>
        </View>
      </Modal>
    )
  }






  const Gender = () => {
    return <>
      <CustomTextView
        containerStyle={Styles.heading}
        numberOfLines={1}
        label={t('common:messages.gender')}
      />
      <View style={Styles.genderContainer}>
        <View style={Styles.genderOptView}>
          <FastImage
            style={Styles.radio}
            source={image.radio}
            tintColor={color.label}
          />
          <CustomTextView
            containerStyle={Styles.genderOpt}
            numberOfLines={1}
            label={t('common:messages.male')}

          />

        </View>
        <View style={Styles.genderOptView}>
          <FastImage
            style={Styles.radio}
            source={image.radioFilled}
            tintColor={color.label}

          />
          <CustomTextView
            containerStyle={Styles.genderOpt}
            numberOfLines={1}
            label={t('common:messages.female')}
          />

        </View>
      </View>
    </>
  }



  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.containerHeader}>
        <View style={{ width: '45%' }}>
          <TextBox
            leftIcon={image.search}
            textBoxContainerStyle={{ marginBottom: 5 }}
            // isSearch={true}
            // label={t('common:login.password')}
            placeholder={t('common:messages.search')}
            onType={(t) => console.log(t)}
            textValue={''}
          // isSecure={true}
          // textValue=""
          />
        </View>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={Styles.filter}>

          <CustomTextView
            containerStyle={[Styles.walletIcon, { color: color.white }]}
            label={icons.filter}
          />
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate(SCREEN_CONSTANT.WALLET)}
          style={Styles.wallet}>
          <CustomTextView
            containerStyle={Styles.walletIcon}
            label={icons.wallet}
          />
          <CustomTextView
            containerStyle={Styles.walletText}
            label={'₹0.00'}
          />
        </TouchableOpacity>
      </View>
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










  const renderItem = (item, index) => {
    return <ChatList
      img={{ uri: item.img }}
      name={item.name}
      index={index}
      verified={index == 0}
      msg={item.msg}
      unseen={item?.unseen}
      time={item?.time}
      isOnline={item.isOnline}
      onPress={() => navigation.navigate(SCREEN_CONSTANT.CHAT, { user: item, verified: index == 0 })}
    />
  }

  const otherItem = (item) => {
    return <ChatList
      img={{ uri: item.img }}
      name={item.name}
      msg={item.msg}
      time={item?.time}
      isOther={true}
      isOnline={item.isOnline}
      onPress={() => navigation.navigate(SCREEN_CONSTANT.CHAT, { user: item })}
    />
  }

  const listenerItem = (item, index) => {
    return <Listener
      onPressAvatar={() => { setStoryData(item), setStoryModal(true) }}
      img={{ uri: item.profile_photo }}
      name={item.full_name}
      msg={item.message}
      unseen={item?.unseen}
      time={item?.exp_hours}
      age={item?.age}
      topic={item?.topic_name}
      avgRating={item?.average_rating}
      totalReviews={item?.total_reviews}
      gender={item?.gender.toLowerCase() == 'male' ? 'M' : 'F'}
      isOnline={item?.online_status}
      onPress={() => navigation.navigate(SCREEN_CONSTANT.CHAT, { user: item })}

    />
  }


  const recentChat = (item) => {
    return <View style={{}}>
      <View style={{ height: 50, width: 50, }}>
        <FastImage
          source={{ uri: item.img }}
          style={Styles.imgRecent}
        />
        <View style={[Styles.online, { backgroundColor: true ? color.green : color.darkRed }]} />

      </View>
      <CustomTextView
        numberOfLines={1}
        containerStyle={Styles.name}
        label={item.name}
      />
    </View>
  }

  const EmptyCompo = () => {
    return <View style={{ alignItems: 'center', justifyContent: 'center', height: DEVICE_HEIGHT * 0.5 }}>
      <CustomTextView
        numberOfLines={1}
        containerStyle={Styles.empty}
        label={'No Results'}
      />
    </View>
  }

  const Inbox = () => {
    let em = {
      img: 'https://picsum.photos/id/237/200/300',
      name: 'Emotional Touch',
      msg: 'Text',
      unseen: '10',
      time: '10:45 AM',
      isOnline: true
    }
    return <View style={{ flex: 1, backgroundColor: Colors.blackBg }}>

      <FlatList
        bounces={true}
        // data={[em,...chats]}
        data={[]}
        extraData={chats}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={<View style={Styles.seprator} />}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={item => item?.workId}
        ListEmptyComponent={() => EmptyCompo()}
        ListFooterComponent={() => <View style={{ height: 55 }} />}
      />
    </View>
  }

  const Others = () => {
    return <View style={{ flex: 1, backgroundColor: Colors.blackBg }}>

      <FlatList
        // onRefresh={()=>dispatch(LoginAction({loggedIn:true}))}
        // refreshing={isLoading}
        bounces={true}
        // data={chats}
        data={[]}
        ListEmptyComponent={() => EmptyCompo()}

        extraData={chats}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={<View style={Styles.seprator} />}
        renderItem={({ item, index }) => otherItem(item, index)}
        keyExtractor={item => item?.workId}
        ListFooterComponent={() => <View style={{ height: 55 }} />}
      />
    </View>
  }

  const onRefresh = () => {
    // setLoading(true)
    // dispatch(getListenerListAction())
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1500);
  }

  const NextPage = () => {
    console.log(pages, 'pages in NExt')
    // if(pages.currentPage <pages.lastPage)
    // {
    let data = {
      search: '',
      language: languageFilter,
      category: categoryFilter ? categoryFilter?.id : '',
      service_type: 'chat',
      page: 1
    }
    Object.keys(data).forEach(function (key) {
      if (!data[key]) {
        delete data[key];
      }
    });
    console.log(data, 'data spliced1')

    dispatch(getListenerListAction(data))

    // }
  }


  const AllListeners = () => {
    return <View style={{ flex: 1, backgroundColor: Colors.blackBg }}>
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
        ListEmptyComponent={() => EmptyCompo()}
        extraData={allListenerState}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => listenerItem(item, index)}
        keyExtractor={item => item?.workId}
        ListFooterComponent={() => <View style={{ height: 55 }} />}
      onEndReached={()=>NextPage()}
      />
    </View>
  }

  const onChangeOp = (i) => {
    let arr = [...selected];

    if (arr.includes(i)) {
      let d = arr.filter((ite) => ite !== i)
      setSelected(d);
    }
    else {
      arr.push(i)
      setSelected(arr)
    }

  }

  const availablibilityPopup = () => {
    return <PopupModal
      style={{ backgroundColor: color.blackBtn }}
      visible={availablibilityModal}
      onClose={() => setAvailabilityModal(false)}
      heading={t('common:messages.availability')}
      icon={icons.clock}

    >
      {options.map((i, k) => {
        return <TouchableOpacity
          style={Styles.listDiv}
          onPress={() => onChangeOp(i.nameShort)}
        >
          <View style={Styles.optionTxtDiv}>
            <CustomTextView
              numberOfLines={1}
              containerStyle={Styles.optionListIcon}
              label={i.icon}
            />
            <CustomTextView
              numberOfLines={1}
              containerStyle={Styles.hoursTxt}
              label={i.name}
            />
          </View>
          <CustomTextView
            numberOfLines={1}
            containerStyle={Styles.optionListIconRadio}
            label={selected.includes(i.nameShort) ? icons.check : ''}
          />
        </TouchableOpacity>
        //Availability on call is compulsory
      })}
      <CustomTextView
        numberOfLines={1}
        containerStyle={Styles.hoursTxt}
        label={'Availability on call is compulsory'}
      />
      <View style={Styles.deleteBtns}>
        <SubmitButton
          onPress={() => setAvailabilityModal(false)}
          propsStyle={Styles.yesBtn}
          label={t('common:messages.save')} />

      </View>

    </PopupModal>
  }


  const storyPopup = () => {
    return <PopupModal
      style={{ backgroundColor: color.blackBtn, padding: 0, overflow: 'hidden' }}
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
            onPress={() => {
              setStoryModal(false), setTimeout(() => {
                navigation.navigate(SCREEN_CONSTANT.LISTENER_PROFILE, { id: storyData.id })
              }, 2000);
            }}

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


  const SwitchListnerView = () => {
    return <View style={Styles.available}>
      <View style={Styles.switchDiv}>
        <Switch
          trackColor={{ false: color.brownDusty, true: color.brownDusty }}
          thumbColor={isEnabled ? color.green : color.brownDusty}
          ios_backgroundColor={color.blackLight}
          style={{ borderWidth: 1, borderColor: color.brownDusty }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <TouchableOpacity
          onPress={() => setAvailabilityModal(true)}
          style={{ flexDirection: 'row', alignItems: 'center', marginRight: selected.length == 3 ? 15 : 7 }}>
          <CustomTextView
            numberOfLines={1}
            containerStyle={[Styles.hoursTxt, { textAlign: 'left' }]}
            label={selected.length == 3 ? ' All ' : selected.join('/')}
          />
          <CustomTextView
            numberOfLines={1}
            containerStyle={Styles.down}
            label={icons.down}
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: DEVICE_WIDTH * 0.42, flexDirection: 'row' }}>
        <SubmitButton
          propsStyle={Styles.autoConnect}
          txtStyle={{ fontSize: size.size_14 }}
          // onPress={() => navigation.navigate(SCREEN_CONSTANT.AUTO_CONNECT)}
          label={t('common:messages.autoConnect')} />
        <TouchableOpacity
          // onPress={()=> navigation.navigate(SCREEN_CONSTANT.DASHBOARD)}
          style={Styles.hours}>
          <CustomTextView
            numberOfLines={1}
            containerStyle={Styles.hoursTxt}
            label={'1h'}
          />
        </TouchableOpacity>

      </View>
    </View>
  }
    

  const renderTab=()=>{
      switch (current) {
        case t('common:messages.inbox'):
          return Inbox()
          break;
        case t('common:messages.allListener'):
          return Inbox()
          break;
        case t('common:messages.others'):
          return Others()
          break;
        default:
          break;
      }
  }

  return (
    <SafeAreaView style={Styles.flex}>
      {isFocused && <StatusBar backgroundColor={isFocused ? color.blackBg : color.blackBg} barStyle="dark-content" />}
      {HeaderTop()}
      {SwitchListnerView()}
      <View style={Styles.container}>
        {/* <Tab.Navigator
          screenListeners={(res) => setCurrent(res?.route?.name)}
          tabBar={props => <TopTab {...props} />}>
          <Tab.Screen
            name={t('common:messages.inbox')}
            component={Inbox}
            options={{ tabBarLabel: t('common:messages.inbox') }}
          />
          <Tab.Screen
            name={t('common:messages.allListener')}
            options={{ tabBarLabel: t('common:messages.allListener') }}
            component={AllListeners}
          />
          <Tab.Screen
            name={t('common:messages.others')}
            options={{ tabBarLabel: t('common:messages.others') }}
            component={Others}
          />


        </Tab.Navigator> */}
        <TopTabCustom
          onPress={(res) => setCurrent(res)}
          selectedTab={current}
          options={[t('common:messages.inbox'), t('common:messages.allListener'), t('common:messages.others')]}
        />
        {renderTab()}
        {filterPopup()}
        {availablibilityPopup()}
        {storyPopup()}
      </View>
    </SafeAreaView>
  );
}
