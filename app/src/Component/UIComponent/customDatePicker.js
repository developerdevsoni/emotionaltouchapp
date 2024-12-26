import React, { useState } from "react";
import { View, StyleSheet, Text, Platform } from 'react-native'
// import DatePicker from "react-native-date-picker";
import moment from "moment";


//SECTION - CUSTOM IMPORTS
import color from "../../../rsc/theme/color";
import fontsFamily from "../../../rsc/theme/fontsFamily";
import { AppConstants } from "../../constants/appConstants";
import { size } from "../../../rsc/theme/fonts";

export default function CustomDatePicker(props) {
    const {howOldAreYou}=AppConstants
    const { selectedDate } = props
    let d = moment(new Date()).format('yyyy-MM-DD')
    var futureMonth = moment(d).subtract(5, 'Y').format('yyyy-MM-DD');
    console.log(futureMonth,'future')

    const [dateOfCalendar, setCalendar] = React.useState(new Date(futureMonth))
    const [date, setDate] = useState(new Date(futureMonth));
    // let d = dateOfCalendar;
    // console.log(futureMonth, 'sasasassa')
    // setCalendar(futureMonth)
  
    return (
        <View>
            <View style={Styles.headerWrapper}>
                <Text style={Styles.headerText}>{howOldAreYou.day}</Text>
                <Text style={[Styles.headerText]}>{howOldAreYou.month}</Text>
                <Text style={Styles.headerText}>{howOldAreYou.year}</Text>
            </View>
            {/* <DatePicker
                date={date}
                // minimumDate={}
                maximumDate={dateOfCalendar}
                onDateChange={(date) =>{ selectedDate(date), setDate(new Date(date))}}
                mode='date'
                locale="en_IN"
                textColor={color.dakrBlue}
                androidVariant="nativeAndroid"
            /> */}
        </View>
    )
}

const Styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width:Platform.OS=='android'? '80%':'90%',
        alignSelf:'center'
    },
    headerText: {
        marginRight:10,
        color: color.dakrBlue,
        fontFamily:fontsFamily.montserratSemiBold,
        fontSize: size.size_16,
    }
})