import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Modal,
  TouchableOpacity,
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
import { Listener } from '../../../Component/UIComponent/allListener';
import { DropDown } from '../../../Component/UIComponent/rc_dropDown';
import PopupModal from '../../../Component/UIComponent/rc_modal';
import { SCREEN_CONSTANT } from '../../../navigation/constant';
import icons from '../../../../rsc/theme/icons';
import Slider from 'react-native-slider';


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


export default function SearchListener({ navigation }) {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  const [popup, setPopup] = useState(false);
  const [filterPopupVisible, setVisible] = useState(false);

  const { t, i18n } = useTranslation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [current, setCurrent] = useState('Inbox');
  const [dropDownState, setDropDownState] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [age, setAge] = useState(0.1);

  const [serviceTypeFilter, setServiceTypeFilter] = useState('');
  const [availablibilityModal, setAvailabilityModal] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  
  const [storyModal, setStoryModal] = useState(false);

  const [selected, setSelected] = useState([]);

console.log(age.toFixed(2) * 100 / 100,'dsssdsd')
  const options = [
    {
      name: t('common:messages.chat'),
      icon: icons.message,
      nameShort:'Chat'
    },
    {
      name: t('common:messages.call'),
      icon: icons.phone,
      nameShort:'Call'

    },
    {
      name: t('common:messages.videoCall'),
      icon: icons.video,
      nameShort:'Vcall'

    },

  ]

 


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
                selected={categoryFilter ? categoryFilter : t('common:messages.chooseCategory')}
                options={['Breakup', 'Loneliness', 'Divorced']}
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
        label={t('common:messages.whoTalk')}
      />
      <View style={Styles.genderContainer}>
        <TouchableOpacity
        onPress={()=> setMale(!male)}
        style={Styles.genderOptView}>
          <FastImage
            style={Styles.radio}
            source={male ?image.radioFilled:image.radio}
            tintColor={color.label}
          />
          <CustomTextView
            containerStyle={Styles.genderOpt}
            numberOfLines={1}
            label={t('common:messages.male')}

          />

        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> setFemale(!female)}
        
        style={Styles.genderOptView}>
          <FastImage
            style={Styles.radio}
            source={female ?image.radioFilled:image.radio}
            tintColor={color.label}
          />
          <CustomTextView
            containerStyle={Styles.genderOpt}
            numberOfLines={1}
            label={t('common:messages.female')}
          />

        </TouchableOpacity>
      </View>
    </>
  }



  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.containerHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Styles.filter}>

          <CustomTextView
            containerStyle={[Styles.walletIcon, { color: color.white }]}
            label={icons.back}
          />
        </TouchableOpacity>
        <View style={{ width: '80%' }}>
          <TextBox
            leftIcon={image.search}
            textBoxContainerStyle={{ marginBottom: 5 }}
            placeholder={t('common:messages.search')}
            onType={(t) => console.log(t)}
            textValue={''}
          />
        </View>
     
      </View>
    );
  };













  const renderItem = (item,index) => {
    return <ChatList
      img={{ uri: item.img }}
      name={item.name}
      index={index}
      verified={index==0}
      msg={item.msg}
      unseen={item?.unseen}
      time={item?.time}
      isOnline={item.isOnline}
      onPress={() => navigation.navigate(SCREEN_CONSTANT.CHAT, { user: item ,verified:index==0})}
    />
  }


  const listenerItem = (item) => {
    return <Listener
    onPressAvatar={()=> setStoryModal(true)}
      img={{ uri: item.img }}
      name={item.name}
      msg={item.msg}
      unseen={item?.unseen}
      time={item?.time}
      isOnline={item.isOnline}
      onPress={() => navigation.navigate(SCREEN_CONSTANT.CHAT, { user: item })}

    />
  }


 
 


  const AllListeners = () => {
    return <View style={{ flex: 1, backgroundColor: Colors.blackBg , paddingHorizontal:'5%'}}>
     
       
      {Gender()}
      <View style={{width:DEVICE_WIDTH*0.9,marginVertical:20}}>
      <Slider
        value={isNaN(Math.round(Math.floor(age) / Math.floor(age) * 100) / 100) ? 0 : (Math.round(Math.floor(age) / Math.floor(age) * 100) / 100)}
        trackStyle={Styles.track}
                style={Styles.slider}
                thumbStyle={{ height: 20, width: 20 ,backgroundColor:color.white}}
                thumbTouchSize={{ height: 20, width: 20 ,backgroundColor:color.white}}
                step={0.05}
                onValueChange={(value) =>setAge(value)} 
                minimumTrackTintColor={color.darkRed}
              />
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <CustomTextView
        containerStyle={Styles.heading}
        numberOfLines={1}
        label={'21'}
      />
       <CustomTextView
        containerStyle={Styles.heading}
        numberOfLines={1}
        label={'80'}
      />
              </View>
              </View>

      <FlatList
        bounces={true}
        data={chats}
        extraData={chats}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => listenerItem(item, index)}
        keyExtractor={item => item?.workId}
        ListFooterComponent={() => <View style={{ height: 55 }} />}
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
      style={{ backgroundColor: color.blackBtn, padding: 0,overflow:'hidden' }}
      visible={storyModal}
      onClose={() => setStoryModal(false)}
    >
      <FastImage
        source={{ uri: 'https://picsum.photos/id/237/200/300' }}
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
            onPress={() => {setStoryModal(false),navigation.navigate(SCREEN_CONSTANT.LISTENER_PROFILE)}}

            numberOfLines={10}
            containerStyle={Styles.infoIcon}
            label={icons.info}
          />
        </View>
        <CustomTextView
          numberOfLines={10}
          containerStyle={Styles.storyTxt}
          label={"I started practicing architecture during the pandemic. I was really good in my studies. I thought it would be easy to work on my own and it was going great initially but it quickly unraveled. I struggled to handle clients and failed miserably. Despite being bold and strong, this unforeseen downfall plunged me into a year-long depression, relying on medication, and feeling worthless. I always use to feel dumb and useless back then. However, I have since healed and realized that everyone progresses at their own pace. It took time, but I've emerged stronger. Now, I aim to support others in their journey. Let's connect and help each other thrive."}
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


  

  return (
    <SafeAreaView style={Styles.flex}>
      {isFocused &&<StatusBar backgroundColor={isFocused ? color.blackBg : color.blackBg} barStyle="dark-content" />}
      {HeaderTop()}
      <View style={Styles.container}>

        {AllListeners()}

        {filterPopup()}
        {availablibilityPopup()}
        {storyPopup()}
      </View>
    </SafeAreaView>
  );
}
