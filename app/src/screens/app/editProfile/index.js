import React, { useContext } from 'react';
import {
  FlatList,
  SafeAreaView,
  Share,
  Text,
  TouchableOpacity,
  View,

} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import Header from '../../../Component/basicComponent/header';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import { ImagePicker, ScrollViewComponent } from '../../../Component/basicComponent';
import icons from '../../../../rsc/theme/icons';
import color from '../../../../rsc/theme/color';
import { SubmitButton, TextBox } from '../../../Component/UIComponent';
import FastImage from 'react-native-fast-image';
import { PickerModal } from '../../../Component/UIComponent/PickerModal';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import PopupModal from '../../../Component/UIComponent/rc_modal';
import { DataManager } from '../../../Utils/dataManager';
import { getProfileAction } from '../../../Redux/Actions/authActions';
import { editProfile } from '../../../Redux/Actions/profileActions';
import { CustomAlert } from '../../../../rsc/theme/customAlert';


export default function EditProfile({ navigation }) {
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const [genderVisible, setGenderVisible] = React.useState(false)
  const [ageVisible, setAgeVisible] = React.useState(false)
  const [imageUploadIsLoading, setImageUploadIsLoading] = React.useState(false);
  const [profilePicutre, setProfile] = React.useState(null);
  const [gender, setGender] = React.useState(null)
  const [age, setAge] = React.useState(null)
  const [availablibilityModal, setAvailabilityModal] = React.useState(false);

  const [firstname, setname] = React.useState('')
  const [username, setUserName] = React.useState('')
  const [displayName, setDisplayName] = React.useState('')
  const [about, setAbout] = React.useState('')
  const [service, setService] = React.useState('')
  const [selected, setSelected] = React.useState([]);
  const profile = useSelector(state => state.authReducer.profileData);
  console.log(profile,'lsls')

  React.useEffect(()=>{
    DataManager.getUserId().then((res)=>{
      console.log(res,'userID')
      if(res!=null)
      {
        dispatch(getProfileAction(res))
      }
      else{
        console.log('---PROFILE---')
      }
    })
  },[])


  React.useEffect(()=>{

    if(profile)
    {
      setDisplayName(profile?.display_name)
      setUserName(profile?.email)
      setname(profile?.full_name)
      if(profile?.gender)
      {
         let gender= genderOptions.findIndex((i)=> i.toLowerCase()==profile.gender.toLowerCase())
         setGender(gender)

      }
      if(profile?.age)
      {
         let age= ageOptions.findIndex((i)=> i==profile?.age)
         setAge(age)

      }
      if(profile?.service)
      {
        let serv=profile?.service.split(',')
        setSelected(serv)
      }
      if(profile?.about)
      {
        setAbout(profile?.about)

      }


    }

  },[profile])


  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;
  const options = [
    {
      name: t('common:beAListener.chat'),
      icon: icons.message,
    },
    {
      name: t('common:beAListener.call'),
      icon: icons.phone,
    },
    {
      name: t('common:beAListener.videoCall'),
      icon: icons.video,
    },

  ]
  const optionsCALL = [
    {
      name: t('common:messages.chat'),
      icon: icons.message,
      nameShort:'chat'
    },
    {
      name: t('common:messages.call'),
      icon: icons.phone,
      nameShort:'call'

    },
    {
      name: t('common:messages.videoCall'),
      icon: icons.video,
      nameShort:'vcall'

    },

  ]

  const genderOptions = ['Male', 'Female', 'Other']
  const ageOptions = ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]




  //console.log(languageCode, 'teststst')

  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={''}
          subLabel={''}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
          rightIcon={icons.share}
          rightIconPress={() => onShare()}
          // rightIcon={icons.vert}
          // rightIconPress={() => alert(true)}
        />
      </View>
    );
  };
  const onChangeOp = (i) => {
    let arr = [...selected];

    if (arr.includes(i.toLowerCase())|| arr.includes(i)) {
      let d = arr.filter((ite) => ite !== i.toLowerCase())
      setSelected(d);
    }
    else {
      arr.push(i)
      setSelected(arr)
    }
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  const availablibilityPopup = () => {
    return <PopupModal
      style={{ backgroundColor: color.blackBtn }}
      visible={availablibilityModal}
      onClose={() => setAvailabilityModal(false)}
      heading={t('common:editProfile.service')}
      icon={icons.clock}

    >
      {optionsCALL.map((i, k) => {
        return <TouchableOpacity
          style={Styles.listDiv1}
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
            label={selected.includes(i.nameShort)||selected.includes(i.nameShort.toLowerCase())? icons.check : ''}
          />
        </TouchableOpacity>
      })}
      <View style={Styles.deleteBtns}>
        <SubmitButton
          onPress={() => setAvailabilityModal(false)}
          propsStyle={Styles.yesBtn}
          label={t('common:messages.save')} />

      </View>

    </PopupModal>
  }

  const onUpdateProfile=()=>{
      // if(profilePicutre==null)
      // {
      //   CustomAlert(t('common:validationConstants.empty.emptyProfile'))
  
      //   return
      // }
      if (firstname.trim().length == 0) {
        CustomAlert(t('common:validationConstants.empty.emptyFullName'))
  
        return
      }
      // if (username.trim().length == 0) {
      //   CustomAlert(t('common:validationConstants.empty.emptyUserName'))
      //   return
      // }
      if (displayName.trim().length == 0) {
        CustomAlert(t('common:validationConstants.empty.emptyDisplayName'))
  
        return
      }
      if (gender == null) {
        CustomAlert(t('common:validationConstants.empty.emptyGender'))
  
        return
      }
      if (age == null) {
        CustomAlert(t('common:validationConstants.empty.emptyAge'))
  
        return
      }
      if (selected.length == 0) {
        CustomAlert(t('common:validationConstants.empty.emptyServices'))
  
        return
      }
    
      if (about.length == 0) {
        CustomAlert(t('common:validationConstants.empty.emptyAbout'))
  
        return
      }
     
      
      // app()
      let data = {
        // is_anonymous: isEnabled ? 1:0,
        full_name:firstname,
        display_name: displayName,
        profile_photo:profilePicutre,
        gender: genderOptions[gender].toLowerCase(),
        age: ageOptions[age],
        // topic_id: topicsList[topicId]?.id,
        service: selected.join(',').toLowerCase(),
        about: about,
      }
      console.log('step1 data',data)
  
      dispatch(editProfile(data,navigation))
      // setStep(t('common:completeProfile.selfie'))
  
  }

  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      {/* <ScrollViewComponent containerStyle={Styles.scroll}> */}
        <View style={Styles.doubleShade}>
          <View style={Styles.firstShade} />

          <View style={Styles.secondShade}>

          </View>
          <View style={Styles.profileDiv}>
            <FastImage
              source={{ uri:profilePicutre ?profilePicutre.uri : profile?.profile_photo?? 'https://picsum.photos/id/237/200/300' }}
              style={Styles.profile}
            />
          <ImagePicker
            onStart={() => setImageUploadIsLoading(true)}
            isFront={true}
            onError={() => setImageUploadIsLoading(false)}
            onCaptureSuccess={(imageObject) => {
           
              // let data = {
               let profile_picutre={
                  uri: imageObject.assets[0]?.uri,
                  name: imageObject.assets[0]?.fileName,
                  type: imageObject.assets[0]?.type
                }

                setProfile(profile_picutre)
              
              // dispatch(UpdateProfilePhotoAction(data))
            }}
          >
             <View style={[Styles.online, { backgroundColor: color.darkRed }]} >
            <CustomTextView
              containerStyle={Styles.pen}
              numberOfLines={1}
              label={icons.pen}
            />
          </View>
          </ImagePicker>
          </View>
        </View>
        <ScrollViewComponent containerStyle={Styles.scroll}>


        <View style={[Styles.width90,Styles.profileFields ]}>
          <TextBox
            label={t('common:editProfile.fullname')}
            placeholder={t('common:editProfile.fullname')}
            onType={(t) => setname(t)}
            rightIcon={icons.edit}
            textValue={firstname}
          />
          <TextBox
            label={t('common:editProfile.username')}
            placeholder={t('common:editProfile.username')}
            onType={(t) => setUserName(t)}
            textValue={username}
            editable={false}
            rightIcon={icons.edit}
          />
          <TextBox
            label={t('common:editProfile.displayName')}
            placeholder={t('common:editProfile.displayName')}
            onType={(t) => setDisplayName(t)}
            textValue={displayName}
            rightIcon={icons.edit}
          />
          <TextBox
            label={t('common:editProfile.gender')}
            placeholder={t('common:editProfile.gender')}
            onType={(t) => setGender(t)}
            textValue={gender!=null && genderOptions[gender]}
            rightIcon={icons.down}
            editable={false}
            isPicker={true}
            onPressRightIcon={() => setGenderVisible(true)}
          />
          <TextBox
            label={t('common:editProfile.age')}
            placeholder={t('common:editProfile.age')}
            onType={(t) => setAge(t)}
            textValue={age!=null && ageOptions[age]}
            rightIcon={icons.down}
            editable={false}
            isPicker={true}
            onPressRightIcon={() => setAgeVisible(true)}
          />
              <TextBox
            multiline={true}
            label={t('common:editProfile.service')}
            placeholder={t('common:editProfile.service')}
            onType={(t) => setService(t)}
            textValue={selected.length > 0 && selected.join(',')}
            rightIcon={icons.edit}
            editable={false}
            isPicker={true}
            onPressRightIcon={() => setAvailabilityModal(true)}
          />
          <TextBox
            multiline={true}
            label={t('common:editProfile.about')}
            placeholder={t('common:editProfile.about')}
            onType={(t) => setAbout(t)}
            textBoxContainerStyle={Styles.input}
            textValue={about}
            rightIcon={icons.edit}
            maxLength={200}
          />

      

          <SubmitButton
            onPress={() => onUpdateProfile()}
            label={t('common:editProfile.update')} />

        </View>
        {genderVisible ?
          <PickerModal
            items={genderOptions}
            isDropdownVisible={true}
            title={t('common:editProfile.gender')}
            selectedValueIndex={gender}
            onSelect={index => {
              console.log('indexasa', index)
              if (index) {
                setGender(index)
              }
              else {
                setGender(0)
              }
              setGenderVisible(false)
            }}
            onClose={() => {
              setGenderVisible(false)
            }}
          />
          : true}

        {ageVisible ?
          <PickerModal
            items={ageOptions}
            isDropdownVisible={true}
            title={t('common:editProfile.age')}
            selectedValueIndex={age}
            onSelect={index => {
              // console.log('indexasa', index)
              if (index) {
                setAge(index)
              }
              else {
                setAge(0)
              }
              setAgeVisible(false)
            }}
            onClose={() => {
              setAgeVisible(false)
            }}
          />
          : true}
      </ScrollViewComponent>
{availablibilityPopup()}

    </SafeAreaView>
  )
}
