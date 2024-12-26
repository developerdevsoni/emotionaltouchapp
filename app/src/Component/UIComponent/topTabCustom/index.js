import React from 'react'
import { ActivityIndicator, Modal, TouchableOpacity,Text, Animated, View } from 'react-native'
import  styles  from './styles'
import { DEVICE_WIDTH } from '../../../Utils/size';

export const TopTabCustom = ({ options, onPress, selectedTab }) => {

    return (
        <View style={{ flexDirection: 'row',width:DEVICE_WIDTH, alignSelf:'center' }}>
            {options.map((route, index) => {
               
               

                return (
                    <TouchableOpacity
                        onPress={() => onPress(route)}
                        style={[selectedTab==route ? styles.selectedTab : styles.tab,{width: DEVICE_WIDTH / options?.length}]}>
                        <Text style={selectedTab==route ? styles.selectedTabText : styles.tabTxt}>{route}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}