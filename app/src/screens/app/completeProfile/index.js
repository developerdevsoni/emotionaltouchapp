
import React, { useContext } from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Switch,
  Modal,
  StyleSheet
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-native-slider';

import { ImagePicker, ScrollViewComponent } from '../../../Component/basicComponent';

import color from '../../../../rsc/theme/color';
import icons from '../../../../rsc/theme/icons';
import FastImage from 'react-native-fast-image';
import { SubmitButton, TextBox } from '../../../Component/UIComponent';
import image from '../../../../rsc/theme/image';
import { PickerModal } from '../../../Component/UIComponent/PickerModal';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../Utils/size';
// import { Camera, useCameraDevices, useCameraDevice, useFrameProcessor } from 'react-native-vision-camera';
import { RNCamera } from 'react-native-camera';
import PopupModal from '../../../Component/UIComponent/rc_modal';
import { CustomAlert } from '../../../../rsc/theme/customAlert';
import { getAllCountries } from 'react-native-country-picker-modal';
import { getTopicsListAction } from '../../../Redux/Actions/authActions';
import { completeProfileStep1, completeProfileStep2, completeProfileStep3 } from '../../../Redux/Actions/profileActions';
import { useIsFocused } from '@react-navigation/native';
import { Loader } from '../../../Component/UIComponent/Loader';
export default function CompleteProfile({ navigation }) {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;
  const { app, auth } = useContext(AuthContext);
  const [deleteModal, setDeleteModalVisible] = React.useState(false)
  const [selected, setStep] = React.useState(t('common:completeProfile.personalInfo'))
  const [gender, setGender] = React.useState(null)
  const [genderVisible, setGenderVisible] = React.useState(false)
  const [uploadVisible, setUpload] = React.useState(false)
  const [age, setAge] = React.useState(null)
  const [topicId, setTopicId] = React.useState(null)
  const profile = useSelector(state => state.authReducer.profileData);
console.log(profile,'profile')
  const [availablibilityModal, setAvailabilityModal] = React.useState(false);
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const isFocused = useIsFocused()
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [doc, setDoc] = React.useState('Passport')
  const [imageUploadIsLoading, setImageUploadIsLoading] = React.useState(false);
  const [profilePicutre, setProfile] = React.useState(null);
//topicsList
const topicsList = useSelector(state => state.authReducer.topicsList);
 console.log(topicsList,'ldslldsldsll')
  const [docFile, setDocFile] = React.useState(null)
  const [selfie, setSelfie] = React.useState(null)

  const [firstname, setname] = React.useState('')
  const [username, setUserName] = React.useState('')
  const [displayName, setDisplayName] = React.useState('')
  const [about, setAbout] = React.useState('')
  const [availability, setAvailability] = React.useState('')

  const [service, setService] = React.useState('')
  const [ageVisible, setAgeVisible] = React.useState(false)
  const [topicVisible, setTopicVisible] = React.useState(false)

  const [selectedServ, setSelectedServ] = React.useState([]);

  const genderOptions = ['Male', 'Female', 'Other']
  const ageOptions = ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]



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

  let steps = [
    {
      icon: icons.user,
      label: t('common:completeProfile.personalInfo')
    },
    {
      icon: icons.camSwipe,
      label: t('common:completeProfile.selfie'),
    },
    {
      icon: icons.copy,
      label: t('common:completeProfile.idProoff')
    },
  ]

  const options = [
    {
      name: 'Passport',
      icon: icons.passport,
    },
    {
      name: 'Driving License',
      icon: icons.license,
    },
    {
      name: 'ID Card',
      icon: icons.idCard,
    },

  ]
  // passport:'Passport',
  // license: 'Driving License',
  // idCard: 'ID Card',
  React.useEffect(()=>{
    if(profile)
    {
      if(profile.profile_step !=null)
      {
       setStep(returnStepVal(profile.profile_step))
       if(profile.profile_step ==3 && isFocused)
       {
        CustomAlert('Profile Completed.',color.green)
        navigation.goBack()
       }
    }
  }

  },[profile])

  React.useEffect(()=>{
     dispatch(getTopicsListAction())
  },[])

  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={t('common:completeProfile.header')}
          subLabel={''}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
        />
      </View>
    );
  };

  const onChangeOp = (i) => {
    let arr = [...selectedServ];

    if (arr.includes(i)) {
      let d = arr.filter((ite) => ite !== i)
      setSelectedServ(d);
    }
    else {
      arr.push(i)
      setSelectedServ(arr)
    }
  }


  const RenderStep = () => {
    switch (selected) {
      case t('common:completeProfile.personalInfo'):
        return renderStep1()
        break;
      case t('common:completeProfile.selfie'):
        return renderStep2()
        break;
      case t('common:completeProfile.idProoff'):
        return renderStep3()
        break;
      default:
        break;
    }
  }


  const returnStepVal = (val) => {
    switch (val) {
      case 0:
        return t('common:completeProfile.personalInfo')
        break;
      case 1:
        return t('common:completeProfile.selfie')
        break;
      case 2:
        return t('common:completeProfile.idProoff')
        break;
      default:
        return t('common:completeProfile.personalInfo')
        break;
    }
  }

  const returnText = () => {
    switch (selected) {
      case t('common:completeProfile.personalInfo'):
        return ' 1/3'
        break;
      case t('common:completeProfile.selfie'):
        return ' 2/3'
        break;
      case t('common:completeProfile.idProoff'):
        return ' 3/3'
        break;
      default:
        break;
    }
  }
  const returnSliderVal = () => {
    switch (selected) {
      case t('common:completeProfile.personalInfo'):
        return 0.33
        break;
      case t('common:completeProfile.selfie'):
        return 0.66
        break;
      case t('common:completeProfile.idProoff'):
        return 1
        break;
      default:
        return 0.33
        break;
    }
  }



  const renderStep2 = () => {
    // return 



    return <>
      {selfie ? <View style={Styles.stepDiv}>
        <ImagePicker
          onStart={() => setImageUploadIsLoading(true)}
          isFront={true}
          onError={() => setImageUploadIsLoading(false)}
          onCaptureSuccess={(imageObject) => {


            // let data = {
            let doc = {
              uri: imageObject.assets[0]?.uri,
              name: imageObject.assets[0]?.fileName,
              type: imageObject.assets[0]?.type
            }
            setSelfie(doc)
          }}
        >
          <FastImage
            source={{ uri: selfie.uri }}
            style={Styles.selfie}
          >
            <CustomTextView
              label={icons.edit}
              containerStyle={[Styles.editIcon]}
            />
          </FastImage>

        </ImagePicker>

      </View>
        : <View style={Styles.stepDiv}>

          <FastImage
            source={image.completeProfile}
            style={Styles.profile}
          />
          <CustomTextView
            label={t('common:completeProfile.title')}
            containerStyle={Styles.title}
          />
          <CustomTextView
            label={t('common:completeProfile.label')}
            containerStyle={Styles.label}
          />
        </View>}
        
      {selfie ?
        <View style={Styles.btnDiv}>
          <SubmitButton
            // disabled={!selfie}
            // onPress={() => { setStep(t('common:completeProfile.idProoff')) }}
            onPress={()=> onSubmitSelfie()}
            label={selfie ? t('common:completeProfile.uploadSelfie') : t('common:completeProfile.takeSelfie')} />
        </View>
        : <ImagePicker
          onStart={() => setImageUploadIsLoading(true)}
          onError={() => setImageUploadIsLoading(false)}
          isFront={true}

          onCaptureSuccess={(imageObject) => {

            let doc = {
              uri: imageObject.assets[0]?.uri,
              name: imageObject.assets[0]?.fileName,
              type: imageObject.assets[0]?.type
            }
            setSelfie(doc)
          }}
        >
          <View style={Styles.btnDiv}>
            <SubmitButton
              disabled={!selfie}
              // onPress={() => { setStep(t('common:completeProfile.idProoff')) }}
              label={selfie ? t('common:completeProfile.uploadSelfie') : t('common:completeProfile.takeSelfie')} />
          </View>
        </ImagePicker>}
    </>
  }

  const onSubmitSelfie=()=>{
      let data={
        selfie_photo:selfie
      }

      dispatch(completeProfileStep2(data))
  }

  const renderStep3 = () => {
    return <>
      <View style={Styles.stepDiv}>

        <FastImage
          source={image.completeProfile2}
          style={[Styles.profile, { borderRadius: 0 }]}
          resizeMode='contain'
        />
        <CustomTextView
          label={t('common:completeProfile.title1')}
          containerStyle={Styles.title}
        />
        <CustomTextView
          label={t('common:completeProfile.label1')}
          containerStyle={Styles.label}
        />

      </View>
      {options.map((i) => {
        return <TouchableOpacity
          style={Styles.listDiv}
          onPress={() => setDoc(i.name)}
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
            label={doc == i.name && icons.check}
          />
        </TouchableOpacity>
      })}
      <ImagePicker
        onStart={() => setImageUploadIsLoading(true)}
        onError={() => setImageUploadIsLoading(false)}
        onCaptureSuccess={(imageObject) => {

          let doc = {
            uri: imageObject.assets[0]?.uri,
            name: imageObject.assets[0]?.fileName,
            type: imageObject.assets[0]?.type
          }
          setDocFile(doc)
          setUpload(true)
        }}
      >
        <View style={Styles.btnDiv}>

          <SubmitButton
            // onPress={() => setUpload(true)}
            label={t('common:completeProfile.next')} />
        </View>
      </ImagePicker>

    </>
  }

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
            label={selectedServ.includes(i.nameShort) ? icons.check : ''}
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

  const uploadPopup = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={uploadVisible}
        onRequestClose={() => {
          setUpload(false)
        }}>
        <View style={Styles.modalViewMain}>
          <TouchableOpacity
            onPress={() => setUpload(false)}
            style={Styles.close}>
            <FastImage
              style={Styles.radio}
              source={image.close}
            />
          </TouchableOpacity>
          <View style={Styles.centeredView}>


            <View>
              <CustomTextView
                containerStyle={Styles.uploadIcon}
                numberOfLines={1}
                label={icons.idCard}
              />
              <CustomTextView
                containerStyle={Styles.uploadPopupHead}
                numberOfLines={1}
                label={t('common:completeProfile.scan')}
              />
              <FastImage
                source={{ uri: docFile?.uri }}
                style={Styles.uploadImg}

              />

              <View style={{ marginVertical: 20 }}>
                <SubmitButton
                  onPress={() => submitID()}
                  label={t('common:completeProfile.upload')} />

              </View>


            </View>
          </View>
        </View>
      </Modal>
    )
  }

  const submitID=()=>{
    setUpload(false)
    let data={
      id_proof_name:doc,
      id_proof:docFile
    }

    dispatch(completeProfileStep3(data,navigation))
  }


  const submitPersonal = () => {
    if(profilePicutre==null)
    {
      CustomAlert(t('common:validationConstants.empty.emptyProfile'))

      return
    }
    if (firstname.trim().length == 0) {
      CustomAlert(t('common:validationConstants.empty.emptyFirstName'))

      return
    }
    if (username.trim().length == 0) {
      CustomAlert(t('common:validationConstants.empty.emptyUserName'))
      return
    }
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
    if (selectedServ.length == 0) {
      CustomAlert(t('common:validationConstants.empty.emptyServices'))

      return
    }
    if (topicId==null) {
      CustomAlert(t('common:validationConstants.empty.emptyServices'))
      return
    }
    if (about.length == 0) {
      CustomAlert(t('common:validationConstants.empty.emptyAbout'))

      return
    }
    if (availability.length == 0) {
      CustomAlert(t('common:validationConstants.empty.emptyAvailable'))

      return
    }
    
    // app()
    let data = {
      is_anonymous: isEnabled ? 1:0,
      display_name: displayName,
      profile_photo:profilePicutre,
      gender: genderOptions[gender].toLowerCase(),
      age: ageOptions[age],
      topic_id: topicsList[topicId]?.id,
      service: selectedServ.join(','),
      about: about,
      availability: availability,
    }
    console.log('step1 data',data)

    dispatch(completeProfileStep1(data))
    // setStep(t('common:completeProfile.selfie'))

  }


  const renderStep1 = () => {
    return <>
      <View style={Styles.doubleShade}>
        <View style={Styles.firstShade} />
        <View style={Styles.secondShade}>
        </View>

        <View style={Styles.profileDiv}>
          <ImagePicker
            onStart={() => setImageUploadIsLoading(true)}
            onError={() => setImageUploadIsLoading(false)}
            onCaptureSuccess={(imageObject) => {
              // setImageUploadIsLoading(false);
              // setSelectedImage(imageObject);
              // setFilePath({ uri: imageObject.uri });
              console.log(imageObject, 'imageObject')

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
            <FastImage
              source={profilePicutre ?{uri:profilePicutre.uri}: image.logoUser}
              style={Styles.profile}
            />

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

      <View style={Styles.backgroundColorBlack}>
        <View style={[Styles.width90, { marginVertical: 20 }]}>
          <View style={Styles.anonymousDiv}>
            <CustomTextView
              containerStyle={Styles.anonymous}
              numberOfLines={1}
              label={t('common:completeProfile.anonymous')}
            />
            <Switch
              trackColor={{ false: color.brownDusty, true: color.brownDusty }}
              thumbColor={isEnabled ? color.green : color.brownDusty}
              ios_backgroundColor={color.blackLight}
              style={{ borderWidth: 1, borderColor: color.brownDusty }}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />


          </View>
          <TextBox
            label={t('common:completeProfile.firstname')}
            placeholder={t('common:completeProfile.firstname')}
            onType={(t) => setname(t)}
            rightIcon={icons.edit}
            textBoxContainerStyle={Styles.bgBlack}
            labelText={Styles.bgBlack}
            textValue={firstname}
          />
          <TextBox
            label={t('common:completeProfile.username')}
            placeholder={t('common:completeProfile.username')}
            onType={(t) => setUserName(t)}
            textValue={username}
            textBoxContainerStyle={Styles.bgBlack}
            labelText={Styles.bgBlack}
            rightIcon={icons.edit}
          />
          <TextBox
            label={t('common:completeProfile.displayName')}
            placeholder={t('common:completeProfile.displayName')}
            onType={(t) => setDisplayName(t)}
            textValue={displayName}
            textBoxContainerStyle={Styles.bgBlack}
            labelText={Styles.bgBlack}
            rightIcon={icons.edit}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextBox
              label={t('common:completeProfile.gender')}
              placeholder={t('common:completeProfile.gender')}
              onType={(t) => setGender(t)}
              textValue={gender != null && genderOptions[gender]}
              rightIcon={icons.down}
              editable={false}
              isPicker={true}
              textBoxContainerStyle={Styles.bgBlack1}
              labelText={Styles.bgBlack}
              onPressRightIcon={() => setGenderVisible(true)}
            />
            <TextBox
              label={t('common:completeProfile.age')}
              placeholder={t('common:completeProfile.age')}
              onType={(t) => setGender(t)}
              textValue={age != null && ageOptions[age]}
              rightIcon={icons.down}
              editable={false}
              isPicker={true}
              textBoxContainerStyle={Styles.bgBlack1}
              labelText={Styles.bgBlack}
              onPressRightIcon={() => setAgeVisible(true)}
            />
          </View>
          <TextBox
            multiline={true}
            label={t('common:editProfile.service')}
            placeholder={t('common:editProfile.service')}
            onType={(t) => setService(t)}
            textValue={selectedServ.length > 0 && selectedServ.join(',')}
            rightIcon={icons.edit}
            editable={false}
            isPicker={true}
            textBoxContainerStyle={Styles.bgBlack}
            labelText={Styles.bgBlack}
            onPressRightIcon={() => setAvailabilityModal(true)}
          />
            <TextBox
            multiline={true}
            label={t('common:completeProfile.topics')}
            placeholder={t('common:completeProfile.topics')}
            onType={(t) => setService(t)}
            textValue={topicsList.length > 0 && topicId !=null && topicsList[topicId]?.name}
            rightIcon={icons.edit}
            editable={false}
            isPicker={true}

            textBoxContainerStyle={Styles.bgBlack}
            labelText={Styles.bgBlack}
            onPressRightIcon={() => setTopicVisible(true)}
          />


          <TextBox
            multiline={true}
            label={t('common:completeProfile.about')}
            placeholder={t('common:completeProfile.about')}
            onType={(t) => setAbout(t)}
            textBoxContainerStyle={Styles.input}
            labelText={Styles.bgBlack}
            textValue={about}
            rightIcon={icons.edit}
            maxLength={200}
          />
             <TextBox
            multiline={true}
            label={t('common:completeProfile.availability')}
            placeholder={t('common:completeProfile.availability')}
            onType={(t) => setAvailability(t)}
            textBoxContainerStyle={Styles.input}
            labelText={Styles.bgBlack}
            textValue={availability}
            rightIcon={icons.edit}
            maxLength={200}
          />



          <SubmitButton
            onPress={() => submitPersonal()}
            label={t('common:completeProfile.next')} />

        </View>

      </View>
    </>
  }

  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      <ScrollViewComponent>
        <View style={Styles.top}>
          <CustomTextView
            containerStyle={Styles.headList}
            numberOfLines={1}
            label={t('common:completeProfile.step') + returnText()}
          />
          <Slider
            value={returnSliderVal()}
            trackStyle={Styles.track}
            style={Styles.slider}
            thumbStyle={{ height: 1, width: 1 }}
            thumbTouchSize={{ height: 1, width: 1 }}
            step={0.1}
            minimumTrackTintColor={color.darkRed}
          />
          <CustomTextView
            containerStyle={Styles.headList}
            numberOfLines={1}
            label={t('common:completeProfile.header')}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {steps.map((i) => {
              return <TouchableOpacity
                // onPress={() => setStep(i?.label)}
                style={[Styles.stepBorder, selected == i?.label && Styles.selected]}>
                <CustomTextView
                  containerStyle={Styles.headIcon}
                  numberOfLines={1}
                  label={i.icon}
                />
                <CustomTextView
                  containerStyle={Styles.headListOpt}
                  numberOfLines={1}
                  label={i.label}
                />
              </TouchableOpacity>
            })}
          </View>
        </View>
        {RenderStep()}
        {genderVisible ?
          <PickerModal
            items={genderOptions}
            isDropdownVisible={true}
            title={'Gender'}
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

{topicsList.length >0 && topicVisible ?
          <PickerModal
            items={topicsList.map((i)=> i.name)}
            isDropdownVisible={topicVisible}
            title={t('common:completeProfile.topics')}
            selectedValueIndex={topicId}
            onSelect={index => {
              // console.log('indexasa', index)
              if (index) {
                setTopicId(index)
              }
              else {
                setTopicId(0)
              }
              setTopicVisible(false)
            }}
            onClose={() => {
              setTopicVisible(false)
            }}
          />
          : true}

        {uploadPopup()}
        {availablibilityPopup()}
        {isLoading && isFocused && <Loader />}

      </ScrollViewComponent>
    </SafeAreaView>
  )
}
