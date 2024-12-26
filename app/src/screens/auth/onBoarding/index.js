import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper'

//SECTION CUSTOM IMPORTS
import image from '../../../../rsc/theme/image';
import Styles from './styles';
import { AppConstants } from '../../../constants/appConstants';
import { SubmitButton } from '../../../Component/UIComponent';
import color from '../../../../rsc/theme/color';
import { DEVICE_WIDTH } from '../../../Utils/size';
import { SCREEN_CONSTANT } from '../../../navigation/constant';
import { useTranslation } from 'react-i18next';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import { DataManager } from '../../../Utils/dataManager';
import { ScrollViewComponent } from '../../../Component/basicComponent';

const { width, height } = Dimensions.get('screen');



export default function OnboardingScreen({ navigation }) {
  const [showRealApp, setShowRealApp] = useState(false);
  const welcomeScreens = useSelector(state => state.authReducer.welcomeScreens);
  console.log(welcomeScreens, 'welcomeScreensnsns',height/2.4)
  const { onboarding } = AppConstants
  const swiperRef = useRef()
  const [first, setfirst] = React.useState(0)
  const {t, i18n} = useTranslation();

//REVIEW  AppIntro Slider Data Array
const slides = [
  {
    id: 1,
    title: t('common:onboarding.title1'),
    subtitle: t('common:onboarding.description1'),
    image: image.onboarding_bg
  },
  {
    id: 2,
    title: t('common:onboarding.title2'),
    subtitle: t('common:onboarding.description2'),
    image: image.onboarding_bg

  },
  {
    id: 3,
    title: t('common:onboarding.title3'),
    subtitle: t('common:onboarding.description3'),
    image: image.onboarding_bg3

  }
];

  //REVIEW  AppIntro Slider Main View
  const AppIntroSliderMain = () => {
    return slides.map((item) => {
      return (<ScrollViewComponent>
        <View style={Styles.onboarding_Content}>
          <View style={Styles.onboarding_Img}>
            <FastImage
              style={{ width: item.id == 3 ? width - width * 0.15 : width, height: height/2.4 }}
              resizeMode={item.id == 3 ? "contain" : "cover"}
              source={item.image}
            />
          </View>
          <Text style={Styles.titleStyle}>{item?.title}</Text>
          <Text style={Styles.paragraphStyle}>{item.subtitle}</Text>
          <View style={Styles.btnContainer}>
            {RenderBtnView(item?.id)}
            {/* <View style={Styles.pagination}>
           
            </View> */}
          </View>

        </View>
        </ScrollViewComponent>
      )
    })
  };

  //REVIEW  AppIntro Slider Skip Button
  const onSkip = async() => {
    setShowRealApp(true);
    await DataManager.setFirstTime()
    // navigation.navigate('GetStarted')
    navigation.navigate(SCREEN_CONSTANT.LOG_IN)

  };

  const skipButtonMain = () => {
    return (
      <TouchableOpacity style={[Styles.skipButton]} onPress={onSkip}>
        <Text style={Styles.skipButtonText}>{t('common:onboarding.skip')}</Text>
      </TouchableOpacity>
    );
  };

  //REVIEW  AppIntro Slider Prev Button
  const sliderRef = useRef();
  const [index, setIndex] = useState(0);




  const RenderBtnView = (id) => {
    return (<View style={{width:'100%',marginBottom:10}}>
      {id == 1 ? <SubmitButton
        onPress={() => swiperRef.current?.scrollBy(1)}
        label={t('common:onboarding.next')} /> :

       id==2 ?<View style={Styles.btnRow}>
          <SubmitButton
            onPress={() => swiperRef.current?.scrollBy(-1)}
            propsStyle={{width:DEVICE_WIDTH *0.36,backgroundColor:color.blackBtn}}
            label={t('common:onboarding.prev')} />
              <SubmitButton
            onPress={() => swiperRef.current?.scrollBy(1)}
            propsStyle={{width:DEVICE_WIDTH *0.36}}
            label={t('common:onboarding.next')} />
        </View>:
        <>
        <SubmitButton
        onPress={() => {  
          DataManager.setFirstTime()
          navigation.navigate(SCREEN_CONSTANT.LOG_IN)}}
        label={t('common:onboarding.getStarted')} />
        {alreadyContent()}
        </>
      }
    </View>
    )
  }

  //REVIEW Already Content Bottom
  const alreadyContent = () => {
    return (
      <View style={Styles.already}>
        <CustomTextView
          containerStyle={Styles.alreadyText}
          label={t('common:signUp.alreadyAccount')}/>
        <TouchableOpacity>
          <CustomTextView
            onPress={() => navigation.navigate(SCREEN_CONSTANT.SIGN_UP)}
            containerStyle={Styles.loginText}
            label={t('common:signUp.login')}
          />
        </TouchableOpacity>
      </View>
    );
  };


  // //REVIEW  AppIntro Slider Done Button
  // const onDone = () => {
  //   setShowRealApp(true);
  //   navigation.navigate('GetStarted')
  // };

  // const RenderDoneButton = () => {
  //   return (
  //     <View style={Styles.buttonNext}>    
  //       <Text style={Styles.buttonNextText}>{onboarding.done}</Text>
  //     </View>
  //   );
  // };

  return (
    <View style={Styles.flex}>
      {skipButtonMain()}
      <Swiper
        ref={swiperRef}
        showsPagination={true}
        renderPagination={(index, total, context)=><View style={Styles.pagination}>
        {[1, 2, 3].map((i, k) => {
          return <View style={{ height: 8, width: k == first ? 20 : 8, marginLeft: 5, borderRadius: 4, backgroundColor: k == first ? color.darkRed : color.brownDusty }} />
        })}
      </View>}
        onIndexChanged={(i) => setfirst(i)}
        loop={false}
      >
        {AppIntroSliderMain()}

      </Swiper>
    </View>
  );
}
