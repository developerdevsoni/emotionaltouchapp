import React, { useContext } from 'react';
import {
  FlatList,
  SafeAreaView,
  Share,
  Text,
  View,

} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import Header from '../../../Component/basicComponent/header';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollViewComponent } from '../../../Component/basicComponent';
import icons from '../../../../rsc/theme/icons';
import PopupModal from '../../../Component/UIComponent/rc_modal';
import color from '../../../../rsc/theme/color';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import { SubmitButton } from '../../../Component/UIComponent';
import FastImage from 'react-native-fast-image';
import { DEVICE_WIDTH } from '../../../Utils/size';
import Slider from 'react-native-slider';
import { size } from '../../../../rsc/theme/fonts';
import { Listener } from '../../../Component/UIComponent/allListener';
import { ReviewCard } from '../../../Component/UIComponent/reviewCard';
import { getListenerDetailsAction } from '../../../Redux/Actions/homeActions';


export default function ListenerProfile({ navigation,route }) {
  const id=route?.params?.id
  console.log(id,'00000>>>')
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const [profileModal, setProfileModal] = React.useState(false)
  const detail = useSelector(state => state.homeReducer.detail);
  console.log(detail,'00000>>>')

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

  const reviews = [
    {
      img: 'https://picsum.photos/id/237/200/300',
      name: 'Anushka',
      msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      unseen: '10',
      time: '10:45 AM',
      date:'02-08-2023',
      isOnline: true
    },
    {
      img: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
      name: 'Harry Devgan',
      msg: 'Yes, It’s perfect form me, that you.',
      unseen: '',
      time: '10:45 AM',
      date:'02-08-2023',

      isOnline: false
  
    },
    {
      img: 'https://picsum.photos/200/300/?blur',
      name: 'Amisha',
      msg: 'My boyfriend broke up with me over an...',
      unseen: '10',
      time: '10:45 AM',
      date:'02-08-2023',

      isOnline: true
  
    },
    {
      img: 'https://picsum.photos/200/300?grayscale',
      name: 'Sapana',
      msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      unseen: '10',
      time: '10:45 AM',
      date:'02-08-2023',

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
 
  ]

  React.useEffect(()=>{
        dispatch(getListenerDetailsAction('3'))

  },[])




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
          rightIcon2={icons.report}
          rightIconPress2={() => setProfileModal(true)}
        />
      </View>
    );
  };



  const reportPopup = () => {
    return <PopupModal
      style={{ backgroundColor: color.brownDusty }}
      visible={profileModal}
      onClose={() => setProfileModal(false)}
      heading={t('common:listnerProfile.report') + ' Anushka?'}
      icon={icons.report}
    >
      <CustomTextView
        containerStyle={Styles.deleteAlert}
        label={t('common:listnerProfile.descReport')}
      />
      <View style={Styles.deleteBtns}>
        <SubmitButton
          onPress={() => setProfileModal(false)}
          propsStyle={Styles.yesBtn}
          label={t('common:listnerProfile.reportBtn')} />
      </View>
    </PopupModal>
  }

  const AgeGenderLanguage = () => {
    return <View style={Styles.langGenderDiv}>
      <View style={Styles.genderDiv}>
        <CustomTextView
          containerStyle={Styles.icon}
          label={icons.info}
        />

        <CustomTextView
          containerStyle={Styles.gender}
          label={detail?.basic_details?.gender}

        />
        <CustomTextView
          containerStyle={Styles.age}
          label={', '+detail?.basic_details?.age+' years'}
        />
      </View>
      <View style={[Styles.genderDiv, { borderBottomWidth: 0 }]}>
        <CustomTextView
          containerStyle={Styles.icon}
          label={icons.lang}
        />

        <CustomTextView
          containerStyle={Styles.gender}
          label={detail?.basic_details?.language ??'English,Hindi '}
        />

      </View>
    </View>
  }


  const charges = () => {
    return (
      <View>

        <View style={Styles.desc}>
          {options.map((i, k) => {
            return <><View
              style={Styles.listDiv}
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

            </View>
              {k !== 2 && <View style={{ height: 1, backgroundColor: color.brownDusty }} />}
            </>
          })}

        </View>
      </View>
    );
  };

  const renderStar = (rate) => {
    return [1, 2, 3, 4, 5].map((i) => {
      if (rate >= i) {
        return <CustomTextView
          containerStyle={Styles.starF}
          label={icons.starF}
        />
      }
      else {
        return <CustomTextView
          containerStyle={Styles.starEmpty}
          label={icons.starEmpty}
        />
      }
    })

  }

  const InterestCharges = () => {
    return <View style={{ flexDirection: 'row' }}>
      <View style={{ width: '50%' }}>
        <CustomTextView
          containerStyle={[Styles.details, {}]}
          label={t('common:listnerProfile.interest')}
        />
        {['Breakup', 'Relationship'].map((i, k) => {
          return <View style={[Styles.optionDiv, { marginTop: k == 0 ? 0 : 10, }]}>
            <CustomTextView
              containerStyle={[Styles.detailsOption, {}]}
              label={i}
            />
          </View>
        })}
      </View>
      <View style={{ width: '50%' }}>
        <CustomTextView
          containerStyle={[Styles.details, {}]}
          label={t('common:listnerProfile.charges')}
        />
        {charges()}
      </View>

    </View>
  }

  const ratingBars = (number, value) => {
    console.log(value,'valieueue')
    let sliderV=isNaN(value) ?0:value
    console.log(detail?.separate_review_count?.rating5/detail?.review_basic_data?.total_reviews,'dsdsds')
    return <View style={Styles.ratingBars}>
      <View style={Styles.ratingTxt}>
        <CustomTextView
          containerStyle={[Styles.hrs, {}]}
          label={number}
        />
        <CustomTextView
          containerStyle={[Styles.starF, { fontSize: size.size_16 }]}
          label={icons.starF}
        />
      </View>
      <View style={{ width: '70%' }}>
        <Slider
          value={sliderV}
          trackStyle={Styles.track}
          style={Styles.slider}
          thumbStyle={{ height: 1, width: 1 }}
          thumbTouchSize={{ height: 1, width: 1 }}
          step={0.1}
          minimumTrackTintColor={sliderV &&color.darkRed}
        />

      </View>
    </View>
  }


  const ratingsView = () => {
    return <View style={Styles.ratingMainContainer}>

      <View style={Styles.ratingGeneralData}>
        <Text>  <CustomTextView
          containerStyle={[Styles.rateTitle, {}]}
          label={detail?.review_basic_data?.average_rating}
        />
          <CustomTextView
            containerStyle={[Styles.rateTitle, { color: color.label }]}
            label={' / '}
          />
          <CustomTextView
            containerStyle={[Styles.rateTitle5, {}]}
            label={'5'}
          />
          <CustomTextView
            containerStyle={[Styles.totalrate, {}]}
            label={' ('+detail?.review_basic_data?.total_reviews+')'}
          /></Text>
        <View style={{ flexDirection: 'row' }}>
          {renderStar(4)}
        </View>
        <CustomTextView
          containerStyle={[Styles.hrs, {}]}
          label={'(2859) \nListening Hrs'}
        />
      </View>
      <View style={{ width: '60%' }}>
        {ratingBars(5,  detail?.separate_review_count?.rating5/detail?.review_basic_data?.total_reviews)}
        {ratingBars(4,  detail?.separate_review_count?.rating4/detail?.review_basic_data?.total_reviews)}
        {ratingBars(3,  detail?.separate_review_count?.rating3/detail?.review_basic_data?.total_reviews)}
        {ratingBars(2,  detail?.separate_review_count?.rating2/detail?.review_basic_data?.total_reviews)}
        {ratingBars(1,  detail?.separate_review_count?.rating1/detail?.review_basic_data?.total_reviews)}


      </View>

    </View>
  }


  const About=()=>{
  return <View style={[Styles.aboutDiv]}>


            <CustomTextView
              containerStyle={Styles.about}
              label={detail?.basic_details?.about}
            />

          </View>
  }


  const listenerItem = (item) => {
    return <ReviewCard
    onPressAvatar={()=> setStoryModal(true)}
      img={{ uri: item.img }}
      name={item.name}
      review={item.msg}
      unseen={item?.unseen}
      time={item?.time}
      date={item?.date}
      onPress={() => alert('dsds')}

    />
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


  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      <ScrollViewComponent containerStyle={Styles.scroll}>
        <View style={Styles.doubleShade}>
          <View style={Styles.firstShade} />

          <View style={Styles.secondShade}>

          </View>
          <View style={Styles.profileDiv}>
            <FastImage
              source={{ uri: detail?.basic_details?.profile_photo }}
              style={Styles.profile}
            />
            <View style={[Styles.online, { backgroundColor: true ? color.green : color.darkRed }]} />
          </View>
        </View>
        <CustomTextView
          containerStyle={Styles.profileName}
          label={detail?.basic_details?.display_name}
        />
        <CustomTextView
          containerStyle={Styles.profileUsername}
          label={detail?.basic_details?.full_name}

        />

        <View style={Styles.width90}>
          <CustomTextView
            containerStyle={Styles.details}
            label={t('common:listnerProfile.details')}
          />
          {AgeGenderLanguage()}

          <CustomTextView
            containerStyle={[Styles.details]}
            label={t('common:listnerProfile.about')}
          />
          {About()}

          {InterestCharges()}
          <CustomTextView
            containerStyle={[Styles.details]}
            label={t('common:listnerProfile.ratings')}
          />
          {ratingsView()}
        </View>
        <View style={Styles.reviewRoot}>
        <CustomTextView
            containerStyle={[Styles.details]}
            label={t('common:listnerProfile.myReview')}
          />
           <FlatList
        bounces={true}
        data={reviews}
        extraData={reviews}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => listenerItem(item, index)}
        keyExtractor={item => item?.workId}
        ListFooterComponent={() => <View style={{ paddingBottom: 20 }} >
            <CustomTextView
            onPress={()=> alert('Pagination Added')}
            containerStyle={[Styles.details, {textAlign:'center'}]}
            label={t('common:listnerProfile.seeAll')}
          />
          </View>
          }
      />
        </View>
      </ScrollViewComponent>
      {reportPopup()}
    </SafeAreaView>
  )
}
