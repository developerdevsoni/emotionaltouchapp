
import React, { useContext } from 'react';
import {
 
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Keyboard
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import { SubmitButton } from '../../../Component/UIComponent/submitButton';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import color from '../../../../rsc/theme/color';
import FastImage from 'react-native-fast-image';

import { ScrollViewComponent } from '../../../Component/basicComponent';
import PopupModal from '../../../Component/UIComponent/rc_modal';
import { TextBox } from '../../../Component/UIComponent';
import { SCREEN_CONSTANT } from '../../../navigation/constant';
import icons from '../../../../rsc/theme/icons';
import { useState, useCallback, useEffect } from 'react'
import { Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import EmojiPicker, { EmojiKeyboard, EmojiBoard } from 'rn-emoji-keyboard';

import { DEVICE_WIDTH } from '../../../Utils/size';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import { size } from '../../../../rsc/theme/fonts';

export default function Chat({ navigation ,route}) {
  const routes=route.params
  console.log(routes,'routetete')
  const dispatch = useDispatch()
  const [offlineMenu, setOfflineMenu] = React.useState('');
  const [messagePopup, setMessagePopup] = React.useState(false);
  const [talktimePopup, setTalktimePopup] = React.useState(false);
  const [messages, setMessages] = useState([])
  const [emojiData, setEmojiData] = useState();
  const [show, setShow] = useState(false);



  // REVIEW handle emoji click
  const handlePick = (emojiObject) => {
    if (emojiData !== undefined) {
      setEmojiData();
    }
    var data_emoji = emojiData
      ? emojiData + emojiObject.emoji
      : emojiObject.emoji;
    setEmojiData(data_emoji);

  };

 



  useEffect(() => {
    if(routes.verified)
    {
      setMessages([
        {
          _id: 1,
          text: 'Daily Report: 29/1/2023 \n \nTotal Users: 16 \nListening Time: 340 \nAvg Listening Time: 17 Min \n\nEarning :  ₹ 1109',
          createdAt: new Date(),
          // react:image.star,
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: 'Daily Report: 29/1/2023 \n \nTotal Users: 16 \nListening Time: 340 \nAvg Listening Time: 17 Min \n\nEarning :  ₹ 1109',
          createdAt: new Date(),
          // react:image.star,
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: 'Daily Report: 29/1/2023 \n \nTotal Users: 16 \nListening Time: 340 \nAvg Listening Time: 17 Min \n\nEarning :  ₹ 1109',
          createdAt: new Date(),
          // react:image.star,
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: 'Daily Report: 29/1/2023 \n \nTotal Users: 16 \nListening Time: 340 \nAvg Listening Time: 17 Min \n\nEarning :  ₹ 1109',
          createdAt: new Date(),
          // react:image.star,
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
  
      ])
    }
    else{
    setMessages([
      {
        _id: 1,
        text: 'Hearing a bank machine go “brr” as it deals out the cash',
        createdAt: new Date(),
        react:image.star,
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hefdfdfdfsdfdsf',
        react:image.beAlistener,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hey Brother how are you ',
        react:image.logoUser,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hefdf',
        react:false,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hefdffdfddf',
        react:false,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hearing a bank machine go “brr” as it deals out the cash',
        createdAt: new Date(),
        react:image.starEmpty,

        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hearing a bank machine go “brr” as it deals out the cash',
        createdAt: new Date(),
        react:image.close,

        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hea',
        createdAt: new Date(),
        react:false,
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'He',
        createdAt: new Date(),
        react:false,
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }
  }, [])

  const onSend = useCallback((messages = []) => {
    console.log(messages[0].text,'mdsmdmsdms')
    if(messages[0].text)
    {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
    }
  }, [])


  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;


  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.containerHeader}>
        <View style={[Styles.headerProfile,routes?.verified && {width:'70%'}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FastImage
              source={image.prevIcon}
              resizeMode='contain'
              style={Styles.back}
            />
          </TouchableOpacity>
          <FastImage
            source={{uri:routes.user.img}}
            style={Styles.profile}
          />

          {/* </View> */}
          <View style={[Styles.nameDiv]}>
            <View style={[{justifyContent:'center'},Styles.row]}>
          <CustomTextView
              containerStyle={Styles.name}
              numberOfLines={1}
              label={routes?.user?.name+' '}
            />
             {routes.verified&& <CustomTextView
              containerStyle={{fontFamily:fontsFamily.icon,fontSize:size.large,color:color.darkRed}}
              numberOfLines={1}
              label={icons.verify}
            />}
            </View>
         
            <View style={Styles.row}>
              <View style={Styles.on} />

              <CustomTextView
                containerStyle={Styles.onlineTxt}
                label={' Online'}
                numberOfLines={1}
              />

            </View>

          </View>

        </View>
      {routes.verified?
      <View style={[Styles.headerIcons,{width:'20%'}]}/>
      
      : <View style={Styles.headerIcons}>
        <TouchableOpacity
          onPress={() => setTalktimePopup(true)}
          style={Styles.filter}>
         <CustomTextView
            label={icons.video}
            resizeMode='contain'
            containerStyle={Styles.borderImgicon}
          />
          
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTalktimePopup(true)}
          style={Styles.filter}>
       
            <CustomTextView
            label={icons.phone}
            resizeMode='contain'
            containerStyle={Styles.borderImgicon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMessagePopup(true)}
          style={Styles.filter}>
          <CustomTextView
            label={icons.bell}
            resizeMode='contain'
            containerStyle={Styles.borderImgicon}
          />
        </TouchableOpacity>
        </View>}
      </View>
    );
  };


  const offlineListener=()=>{
    return <PopupModal
    style={{ backgroundColor: color.brownDusty }}
    visible={messagePopup}
    icon={icons.clock}
    onClose={() => setMessagePopup(false)}
    heading={t('common:chat.offlineHeader')}
    img={image.delete}
  >
    <CustomTextView
      containerStyle={Styles.subHeader}
      label={t('common:chat.offlineSub')}
    />

    <TextBox
      multiline={true}
      placeholder={t('common:chat.placeholder')}
      onType={(t) => console.log('msg')}
      textBoxContainerStyle={Styles.input}
      textValue={''}
      maxLength={200}
    />

    <View style={Styles.genderContainer}>
      <TouchableOpacity
        onPress={() => setOfflineMenu(t('common:chat.chat'))}
        style={Styles.genderOptView}>
        <FastImage
          style={Styles.radio}
          source={offlineMenu == t('common:chat.chat') ? image.radioFilled : image.radio}
          tintColor={color.label}
        />
        <CustomTextView
          containerStyle={Styles.genderOpt}
          numberOfLines={1}
          label={t('common:chat.chat')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setOfflineMenu(t('common:chat.call'))}
        style={Styles.genderOptView}>
        <FastImage
          style={Styles.radio}
          source={offlineMenu == t('common:chat.call') ? image.radioFilled : image.radio}
          tintColor={color.label}
        />
        <CustomTextView
          containerStyle={Styles.genderOpt}
          numberOfLines={1}
          label={t('common:chat.call')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setOfflineMenu(t('common:chat.videoCall'))}
        style={Styles.genderOptView}>
        <FastImage
          style={Styles.radio}
          source={t('common:chat.videoCall') == offlineMenu ? image.radioFilled : image.radio}
          tintColor={color.label}
        />
        <CustomTextView
          containerStyle={Styles.genderOpt}
          numberOfLines={1}
          label={t('common:chat.videoCall')}
        />

      </TouchableOpacity>
    </View>
    <View style={{ marginVertical: 10 }}>
      <SubmitButton
        onPress={() => setMessagePopup(false)}
        propsStyle={Styles.yesBtn}
        label={t('common:chat.sendMessage')}
      />
    </View>
  </PopupModal>
  }


  const talktimeModal=()=>{
    return <PopupModal
    style={{ backgroundColor: color.brownDusty }}
    visible={talktimePopup}
    icon={'E'}
    onClose={() => setTalktimePopup(false)}
    heading={t('common:chat.addTalktime')}
    img={image.delete}
  >


    <View style={Styles.blackDiv}>
      <TouchableOpacity
        style={Styles.genderOptView}>
       
        <CustomTextView
          containerStyle={Styles.talktime}
          numberOfLines={1}
          label={'$110'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.genderOptView}>
       <CustomTextView
          containerStyle={[Styles.talktime,{marginRight:10}]}
          numberOfLines={1}
          label={'$96'}
        />
      <CustomTextView
          containerStyle={[Styles.talktime,Styles.offerVal]}
          numberOfLines={1}
          label={'$110'}
        />
      </TouchableOpacity>
    </View>
  
    <View style={{ marginVertical: 10 }}>
      <SubmitButton
        onPress={() => {setTalktimePopup(false),navigation.navigate(SCREEN_CONSTANT.WALLET)}}
        propsStyle={Styles.yesBtn}
        label={t('common:chat.addTalktime')}
      />

    </View>

  </PopupModal>
  }







 function renderBubble(props) {
  return (
    <View style={{ flex: 1 }}>
      <Bubble
        {...props}
        onLongPress={()=> alert('lll')}
        position={
          props.currentMessage.user._id !== 1 ? 'left' : 'right'
        }

        timeTextStyle={{
          left: Styles.timeTextStyleLeft,
          right: Styles.timeTextStyleRight,
        }}
        wrapperStyle={{
          right: Styles.wrapperTextStyleRight,
          left: Styles.wrapperTextStyleLeft,
        }}
        textStyle={{
          right: Styles.textStyleRight,
          left: Styles.textStyleLeft,
        }}
      />
    {props.currentMessage.react && props.currentMessage.user._id == 1 && <View style={Styles.rightReact}>
        {/* <FastImage
        source={props.currentMessage.react}
        style={{height:15,width:15}}
        /> */}
          <CustomTextView
                containerStyle={Styles.like}
                label={'👎'}
                numberOfLines={1}
              />
     </View>
     }
      {props.currentMessage.react && props.currentMessage.user._id !== 1 && <View style={[Styles.leftReact]}>
        {/* <FastImage
        source={props.currentMessage.react}
        style={{height:15,width:15}}
        /> */}
          <CustomTextView
                containerStyle={Styles.like}
                label={'👍'}
                numberOfLines={1}
              />
     </View>
     }
     
    </View>
  );
}

const renderTicks = (props) => {
  console.log(props,'cc ticks')
  if (props.user && props.user._id == 1) {
    return (
      <View style={{ marginBottom: 1, right:DEVICE_WIDTH *0.12,bottom:2,position:'absolute'}}>
        {props.read_status === true ? (
             <Ionicons name={'checkmark-done-sharp'}
             style={[Styles.ticks]} />
        ) : (
          <Ionicons name={'checkmark-done-sharp'}
          style={[Styles.ticks]} />
        )}
      </View>
    );
  }
  return null;
};

  // REVIEW main message input toolbar manage
  function renderInputToolbar(props) {
    if(routes.verified)
    {
      return null
    }
    return  <InputToolbar
            {...props}
            containerStyle={Styles.textInputContainerStyle}
            textInputStyle={Styles.textInputStyle}
            renderSend={()=><View
              style={Styles.sendView}
            >
              <Send {...props} containerStyle={Styles.sendButtonMainView}>
              <FontAwesome name={'send'}
                  style={[Styles.sendIcon]} />
              </Send>
            </View>}
            primaryStyle={Styles.textInputPrimaryStyle}
          />
        
  }

  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      renderTicks={renderTicks}
      renderBubble={renderBubble}
            user={{
        _id: 1,
        avatar: 'https://picsum.photos/id/237/200/300',

      }}
      alwaysShowSend={true}
      renderInputToolbar={renderInputToolbar}
      renderAvatarOnTop={true}
      showAvatarForEveryMessage={true}
      messagesContainerStyle={{paddingBottom:30}}
      renderAvatar={()=><View style={Styles.avtarView}>
        <FastImage
        source={{uri:'https://picsum.photos/id/237/200/300'}}
        style={Styles.avtar}
        />
      </View>}
      scrollToBottom={true}
      scrollToBottomComponent={()=> <CustomTextView
    label={icons.down}
    containerStyle={{fontFamily:fontsFamily.icon}}
    />}
    />
            {/* <TouchableOpacity
                    //  onPress={() => navigation.navigate(SCREEN_CONSTANT.OFFERS)}
            style={[Styles.offerDiv, true &&{ backgroundColor: color.blackLight, }]}>
               <CustomTextView
                numberOfLines={1}
                containerStyle={{fontFamily:fontsFamily.icon,color:color.white,}}
                label={icons.phone}
            />
        
            <CustomTextView
                numberOfLines={1}
                containerStyle={[Styles.listTxt]}
                label={'Call session at 9:32PM on 08-07-2023 for 5 Min'}
            />
            
        </TouchableOpacity>
        <TouchableOpacity
                    //  onPress={() => navigation.navigate(SCREEN_CONSTANT.OFFERS)}
            style={[Styles.offerDiv, true &&{ backgroundColor: color.blackLight, }]}>
               <CustomTextView
                numberOfLines={1}
                containerStyle={{fontFamily:fontsFamily.icon,color:color.white,}}
                label={icons.video}
            />
        
            <CustomTextView
                numberOfLines={1}
                containerStyle={[Styles.listTxt]}
                label={'Call session at 9:32PM on 08-07-2023 for 5 Min'}
            />
            
        </TouchableOpacity> */}


       {offlineListener()}
       {talktimeModal()}
    </SafeAreaView>
  )
}
