import React from 'react'
import { ActivityIndicator, Modal, TouchableOpacity,Text, Animated, View } from 'react-native'
import  styles  from './styles'
import { DEVICE_WIDTH } from '../../../Utils/size';

export const TopTab = ({ state, descriptors, navigation, position }) => {

    return (
        <View style={{ flexDirection: 'row',width:DEVICE_WIDTH, alignSelf:'center' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    console.log(route,'route console')
                    // const event = navigation.emit({
                    //     type: 'tabPress',
                    //     target: route.key,
                    //     canPreventDefault: true,
                    // });

                    if (!isFocused ) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name});
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });

                return (
                    <TouchableOpacity
                        onPress={() => onPress()}
                        style={[isFocused ? styles.selectedTab : styles.tab,{width: DEVICE_WIDTH / state?.routes?.length}]}>
                        <Text style={isFocused ? styles.selectedTabText : styles.tabTxt}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}