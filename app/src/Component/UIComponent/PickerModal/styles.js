import { StyleSheet, Dimensions } from 'react-native'
import { size } from '../../../../rsc/theme/fonts'
import color from '../../../../rsc/theme/color'

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    outerContainer: {
        backgroundColor: color.blackLight,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: '3%'
    },
    container: {
        width: Dimensions.get('screen').width,
    },
    dropdownHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: size.size_16,
        color: color.white,
        textAlign: 'center',
    },
    optionView: {
        // width: Dimensions.get('screen').width * 0.0575,
        // height: Dimensions.get('screen').width * 0.0575,
    },
    optionText: {
        color: color.white,
        fontSize: size.size_16,
       
        },
    listItemView: {
        // flex: 1,
        // width: Dimensions.get('screen').width,
        // height: Dimensions.get('screen').height * 0.15,
        // alignItems: 'center',

    },
    itemTextStyle: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize:15,
        color: 'red',
    },
    wheelPicker: {
        alignItems: 'center',
    },
    iconView:{
        padding:15,
        paddingHorizontal:20,
    }

})
