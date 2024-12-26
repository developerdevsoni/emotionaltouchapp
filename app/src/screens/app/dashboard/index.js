
import React, { useContext } from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-native-slider';

import { ScrollViewComponent } from '../../../Component/basicComponent';
import color from '../../../../rsc/theme/color';
import { size } from '../../../../rsc/theme/fonts';
import fontsFamily from '../../../../rsc/theme/fontsFamily';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch()
  const { app, auth } = useContext(AuthContext);
  const [deleteModal, setDeleteModalVisible] = React.useState(false)
  const [selected, setQuery] = React.useState()

  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;


  //console.log(languageCode, 'teststst')

  //REVIEW Header Top Main
  const HeaderTop = () => {
    return (
      <View style={Styles.backBtn}>
        <Header
          onPressBack={() => navigation.goBack()}
          label={t('common:dashBoard.header')}
          subLabel={''}
          containerStyle={[Styles.containerHeader]}
          isBack={true}
        // rightIcon={image.vert}
        // rightIconPress={() => alert('dsdsd')}
        />
      </View>
    );
  };



 




  const TopList = ({ label, count, onPress, isBorder }) => {
    return <TouchableOpacity
      onPress={onPress}
      style={[Styles.lists, isBorder ? { borderBottomWidth: 1, borderColor: color.brownDusty } : { backgroundColor: color.blackLight }]}>
      <View style={Styles.logoProfileRow}>
        <CustomTextView
          containerStyle={Styles.listTxt}
          numberOfLines={1}
          label={label}
        />
      </View>
      <View style={Styles.rightIconDiv}>
        <CustomTextView
          containerStyle={Styles.count}
          numberOfLines={1}
          label={count}
        />
      </View>
    </TouchableOpacity>
  }


  const LeaveSection=()=>{
   return <View style={Styles.list}>
    <TopList
      onPress={() => console.log('sss')}
      label={t('common:dashBoard.totalLeaves')}
      isBorder={true}
      count={'0'}
    />
    <TopList
      onPress={() => console.log('sss')}
      label={t('common:dashBoard.totalLeaves')}
      isBorder={true}
      count={'0'}
    />
    <TopList
      onPress={() => console.log('sss')}
      label={t('common:dashBoard.leavesleft')}
      count={'3'}
    />
  </View>

  }




  return (
    <SafeAreaView style={Styles.flex}>
      {HeaderTop()}
      <ScrollViewComponent>
        <View style={Styles.top}>
          <View style={Styles.rowTop}>
            <CustomTextView
              containerStyle={Styles.headListItem}
              numberOfLines={1}
              label={'Today'}
            />
            <View>
              <Slider
                value={0.7}
                trackStyle={Styles.track}
                style={Styles.slider}
                thumbStyle={{ height: 1, width: 1 }}
                thumbTouchSize={{ height: 1, width: 1 }}
                step={0.1}
                minimumTrackTintColor={color.darkRed}
              />
              <CustomTextView
                containerStyle={[Styles.headListItem, { fontFamily: fontsFamily.regular }]}
                numberOfLines={1}
                label={t('common:dashBoard.listening')+' 68 Min'}
              />
            </View>

          </View>
          <CustomTextView
            containerStyle={Styles.descc}
            numberOfLines={2}
            label={t('common:dashBoard.listenDesc')}
          />
        </View>
        <CustomTextView
          containerStyle={Styles.headList}
          numberOfLines={1}
          label={'Aug, 2023'}
        />
        <CustomTextView
          containerStyle={[Styles.headList, { fontSize: size.size_16 }]}
          numberOfLines={1}
          label={t('common:dashBoard.totalPenalty') + t('common:COMMON_LABELS.rupee') + '100'}
        />

        {LeaveSection()}
       
        <View style={Styles.list}>
          <TopList
            onPress={() => console.log('sss')}
            label={t('common:dashBoard.extraLeaves')}
            isBorder={true}
            count={'0'}
          />
          <TopList
            onPress={() => console.log('sss')}
            label={t('common:dashBoard.penalPerLeave')}
            isBorder={true}
            count={'0'}
          />
          <TopList
            onPress={() => console.log('sss')}
            label={t('common:dashBoard.penalty')}
            count={'3'}
          />
        </View>
        <View style={[Styles.list,{marginBottom:20}]}>
          <TopList
            onPress={() => console.log('sss')}
            label={t('common:dashBoard.missesSession')}
            isBorder={true}
            count={'0'}
          />
          <TopList
            onPress={() => console.log('sss')}
            label={t('common:dashBoard.penalper3miss')}
            isBorder={true}
            count={'0'}
          />
          <TopList
            onPress={() => console.log('sss')}
            label={t('common:dashBoard.penalty')}
            count={'3'}
          />
        </View>

      </ScrollViewComponent>
    </SafeAreaView>
  )
}
