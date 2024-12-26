import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'
import { styles } from './styles'
import color from '../../../../rsc/theme/color'
import FastImage from 'react-native-fast-image'
import image from '../../../../rsc/theme/image'
import * as Animatable from 'react-native-animatable';


export const Loader = (props) => {
    const { isLoading } = props
    return (
        <Modal
            transparent
            visible={isLoading}
        >
            <View style={styles.container}>
                <Animatable.Image
                animation={'rotate'}
                iterationCount={'infinite'}
                resizeMode='contain'
                iterationDelay={500}
                source={image.beAlistener}
                style={styles.view}>
                    {/* <ActivityIndicator color={color.lightRed} /> */}
                </Animatable.Image>
            </View>
        </Modal>
    )
}