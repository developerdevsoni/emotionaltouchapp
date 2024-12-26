
import React, { useContext } from 'react';
import {
 
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Keyboard
} from 'react-native';

//SECTION CUSTOM IMPORTS
import image from '../../../../rsc/theme/image';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import color from '../../../../rsc/theme/color';
import FastImage from 'react-native-fast-image';

import { Header, ScrollViewComponent } from '../../../Component/basicComponent';
import icons from '../../../../rsc/theme/icons';
import { useState, useCallback, useEffect } from 'react'
import { Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import EmojiPicker, { EmojiKeyboard, EmojiBoard } from 'rn-emoji-keyboard';


import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../Utils/size';
import fontsFamily from '../../../../rsc/theme/fontsFamily';
import { Colors, FontFamily } from '../../../../rsc/theme';
import { size } from '../../../../rsc/theme/fonts';

export default function ContactUs({ navigation }) {
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

  function renderActions(props) {
    return (
      <View style={{ flexDirection: 'row', }}>
        <View style={Styles.emojiBtnView}>
          <TouchableOpacity
            style={Styles.emojiImage}
            onPress={() => {
              Keyboard.dismiss();
              setTimeout(function () {
                //Start the timer
                setShow(!show);
              }, 100);
            }}
          >
            <FastImage
              style={{ height: 23, width: 23 }}
              source={image.stickers}
            // resizeMode={'center'}
            />

            {/* <EmojiPicker
              onEmojiSelected={handlePick}
              open={show}
              onClose={() => {
                setShow(false);
              }}
              onRequestClose={() => setShow(false)}
            // onRequestClose={()=> setShow(false))}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }



  useEffect(() => {
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
        <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={t('common:supportUs.btn2')}
          subLabel={''}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
          // rightIcon={image.vert}
          // rightIconPress={() => alert('dsdsd')}
        />
      </View>
    );
  };










 function renderBubble(props) {
  console.log(props.currentMessage,'currentMsg')
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
     
    </SafeAreaView>
  )
}

  
  
  const Styles = StyleSheet.create({
    flex: {
      flex: 1,
      backgroundColor: color.blackBg
  
    },
    emojiBtnView: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      height: 44,
      width: 44,
      // borderWidth: 1,
      marginBottom:7,
      // borderRadius: 360,
      borderColor: color.brownDusty,
    },
     emojiImage: {
      width: 30, height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sendButtonMainView: {
  
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 45,
      height: 45,
    },
    avtarView:{height:30,width:30,borderRadius:15,marginTop:10},
    avtar:{height:30,width:30,borderRadius:15},
    textInputStyle: {
      color: color.white,
      fontSize: size.size_14,
      fontFamily: fontsFamily.regular,
      borderWidth:1,
      borderRadius:10,
      paddingHorizontal:15,
      paddingVertical:15,
      lineHeight:18,
      borderColor:color.brownDusty,
      minHeight:50,
      marginRight:20
    },
    sendView:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:1,
      marginBottom:5,
      borderColor:color.brownDusty,
      alignContent: 'center',
      borderRadius:10
    },
    sendIcon: {
      width: 20,
      height: 20,
      color:color.darkRed,
      fontSize:size.large,
      
    },
    ticks: {
      width: 20,
      height: 20,
      color:color.white,
      fontSize:size.medium,
      
    },
    textInputContainerStyle: {
      backgroundColor:color.transparent,
      borderTopWidth: 0,
      alignItems:'center',
      justifyContent:'space-between',
      width:'100%',
      alignSelf:'center',
    },
    textInputPrimaryStyle: {
      backgroundColor: color.transparent,
      borderWidth: 0,
      width:'90%',
  
      borderColor: color.brownDusty,
    },
    timeTextStyleLeft: {
      color: color.white,
      right: 0,
      fontFamily: fontsFamily.regular,
      fontSize: size.tiny,
    },
    timeTextStyleRight: {
      color: color.white,
      right: 0,
      fontFamily: fontsFamily.regular,
      fontSize: size.tiny,
    },
  wrapperTextStyleLeft: {
    backgroundColor: color.brownDusty,
    borderColor: color.brownDusty,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    // paddingBottom:20,
    position: 'relative',
    // minWidth:DEVICE_WIDTH*0.25,
    marginTop:20
  },
  wrapperTextStyleRight: {
    backgroundColor: color.darkRed,
    borderColor: color.darkRed,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomRightRadius:0,
    marginRight:DEVICE_WIDTH *0.015,
    position: 'relative',
    marginTop:20,
    minWidth:DEVICE_WIDTH*0.25
  },
  leftReact:{
    shadowColor:color.black,
    shadowOffset:{height:1,width:1},
    shadowOpacity:1,
    shadowRadius:1,
    elevation:2,
    height:30,width:30,alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'rgba(67, 66, 66, 0.5)',top:-4,marginLeft:15},
  rightReact:{height:30,width:30,
    shadowColor:color.black,
    shadowOffset:{height:1,width:1},
    shadowOpacity:1,
    shadowRadius:1,
    elevation:2,
    alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'rgba(67, 66, 66, 0.5)',alignSelf:'flex-end',right:15,top:-4},
  
  textStyleLeft: {
    color: color.white,
    fontSize: size.size_14,
    fontFamily: fontsFamily.regular
  
  },
  textStyleRight: {
    color: color.white,
    fontSize: size.size_14,
    fontFamily: fontsFamily.regular
  },
    //!SECTION header Styles
    back: {
      height: 15,
      width: 15,
    },
    profile: {
      height: 45,
      width: 45,
      borderRadius: 30,
      marginLeft: 10
    },
    onlineTxt: {
      fontFamily: FontFamily.regular,
      fontSize: 12,
      color: Colors.label,
      marginTop: 5
    },
    name: {
      fontFamily: FontFamily.bold,
      fontSize: size.size_16,
      color: Colors.white
    },
    nameDiv: {
      width: '65%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: 10
    },
    headerProfile: {
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center'
    },
    borderImg: {
      height: 18,
      width: 18,
      margin: 12
    },
    borderImgicon: {
      fontSize: size.large,
      height: 18,
      fontFamily: fontsFamily.icon,
      color: color.white,
      height: 18,
      width: 18,
      margin: 12
    },
  
    filter: {
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      borderColor: color.brownDusty
    },
    containerHeader: {
      backgroundColor: color.blackBg,
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    on: {
      height: 10,
      width: 10,
      borderRadius: 10,
      backgroundColor: color.green,
      marginTop: 5
    },
    subHeader: {
      fontFamily: FontFamily.bold,
      fontSize: size.size_14,
      color: Colors.label,
      textAlign: 'center',
      marginTop: 5
    },
    input: {
      marginTop: 20,
      height: DEVICE_HEIGHT * 0.15,
      marginBottom: 10,
      padding: 7,
      borderRadius: 10,
      alignItems: 'flex-start',
      shadowColor: 'transparent',
      backgroundColor: color.blackLight
    },
  
    radio: {
      height: 15,
      width: 15,
      alignSelf: 'center'
    },
    genderOptView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 15
    },
    genderOpt: {
      fontFamily: FontFamily.bold,
      fontSize: size.size_14,
      color: Colors.label,
      textAlign: 'center',
      marginLeft: 10,
    },
    genderContainer: {
      flexDirection: 'row',
      backgroundColor: Colors.transparent,
      borderRadius: 8,
      marginTop: 10
    },
  
    blackDiv: {
      flexDirection: 'row',
      backgroundColor: Colors.blackLight,
      borderRadius: 8,
      marginTop: 10,
      paddingHorizontal: 10,
      justifyContent: 'space-between'
    },
    talktime: {
      fontFamily: FontFamily.bold,
      fontSize: size.size_16,
      color: Colors.label,
      textAlign: 'center',
    },
    offerVal: {
      textDecorationStyle: 'solid',
      textDecorationLine: 'line-through'
    },
    underlineTxt: {
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
      color: color.label
    },
  
  
    moreRechargesView: {
      flexDirection: 'row',
      marginTop: 0,
      justifyContent: 'space-between'
    },
  
  
  
  
  
  
  });
  
  
  
  
  
  
  
