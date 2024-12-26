import { StyleSheet, Dimensions } from 'react-native'
import color from '../../../../rsc/theme/color'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    view: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // padding:10,
        backgroundColor: color.blackBtn,
        width: Dimensions.get('screen').width * 0.3,
        height: Dimensions.get('screen').width * 0.3,
        borderRadius: Dimensions.get('screen').width * 0.15,
    },
})