
import React, { useContext } from 'react';
import {
  
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

//SECTION CUSTOM IMPORTS
import Styles from './style';
import CustomTextView from '../../../Component/UIComponent/rc_textView';
import Header from '../../../Component/basicComponent/header';
import { useTranslation } from 'react-i18next';

import { AuthContext } from '../../../navigation/context';
import { useDispatch, useSelector } from 'react-redux';
import color from '../../../../rsc/theme/color';

import { ScrollViewComponent } from '../../../Component/basicComponent';

export default function SupportCategoryQueries({ navigation }) {
    const dispatch = useDispatch()
    const { app, auth } = useContext(AuthContext);
    const [expandedQuestion, setExpandedQuestion] = React.useState(null);

    const { t, i18n } = useTranslation();
    const languageCode = i18n.language;

    const queryData = [
        {
          question:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt?',
          answer:
            'Vestibulum magna arcu, lobortis sed laoreet rhoncus, pulvinar consequat magna. Praesent porttitor molestie ornare. Etiam dapibus ue sapien. ',
        },
        {
          question: 'What is React Native?',
          answer:
            'React Native is a JavaScript framework for building mobile applications using React.',
        },
        {
          question: 'What platforms does React Native support?',
          answer:
            'React Native supports iOS, Android, and the web (using React Native Web).',
        },
        // more questions and answers...
      ];
    
    //console.log(languageCode, 'teststst')

    //REVIEW Header Top Main
    const HeaderTop = () => {
        return (
            <View style={Styles.backBtn}>
                <Header
                    onPressBack={() => navigation.goBack()}
                    label={t('common:supportUs.header1')}
                    subLabel={''}
                    containerStyle={[Styles.containerHeader]}
                    isBack={true}
                // rightIcon={image.vert}
                // rightIconPress={() => alert('dsdsd')}
                />
            </View>
        );
    };

    function toggleQuestion(question) {
        if (expandedQuestion === question) {
          setExpandedQuestion(null);
        } else {
          setExpandedQuestion(question);
        }
      }

    const renderItem = ({ item,index }) => {
        return <Question
        key={item.question}
        question={item.question}
        answer={item.answer}
        index={index}
        />
    }


    function Question({question, answer,index}) {
        const isExpanded = expandedQuestion === question;
    
        return (
          <TouchableOpacity
            style={[Styles.questionBox,expandedQuestion ==index  &&{backgroundColor:color.blackLight}]}
            onPress={() => toggleQuestion(index)}>
            <View style={Styles.questionContainer}>
              <Text style={Styles.question}>{question}</Text>
           
            </View>
            {expandedQuestion==index &&
            
            <Text style={Styles.answer}>{answer}</Text>}
          </TouchableOpacity>
        );
      }



    const TopList = ({ name, count, onPress }) => {
        return <TouchableOpacity
            onPress={onPress}
            style={Styles.lists}>
            <View style={Styles.logoProfileRow}>

                <CustomTextView
                    containerStyle={Styles.listTxt}
                    numberOfLines={1}
                    label={name}
                />
                <CustomTextView
                    containerStyle={Styles.listTxtRegular}
                    numberOfLines={1}
                    label={t('common:supportUs.queries')}
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



    return (
        <SafeAreaView style={Styles.flex}>
            {HeaderTop()}
            <ScrollViewComponent>
               
                  <CustomTextView
                    containerStyle={Styles.headListQuery}
                    numberOfLines={1}
                    label={'Profile'}
                />
                
                <FlatList
                    contentContainerStyle={Styles.width90}
                    data={queryData}
                    extraData={queryData}
                    keyExtractor={item => item}
                    renderItem={renderItem}
                    ListFooterComponent={() => <View style={{ height: 50 }} />}
                />

            </ScrollViewComponent>
        </SafeAreaView>
    )
}
