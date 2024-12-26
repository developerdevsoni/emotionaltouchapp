import { View, TouchableOpacity, StyleSheet } from "react-native"
import CustomTextView from "./rc_textView"
import { Colors, FontFamily } from "../../../rsc/theme"
import { size } from "../../../rsc/theme/fonts"
import image from "../../../rsc/theme/image"
import color from "../../../rsc/theme/color"
import FastImage from "react-native-fast-image"

export const DropDown = ({ heading, selected, options, onSelect, isOpen,onPress }) => {
    console.log(options,'opdsopds')
    return <>
        <CustomTextView
            containerStyle={styles.heading}
            numberOfLines={1}
            label={heading}
        />
        <View style={styles.listContainer}>
            <TouchableOpacity 
            onPress={onPress}
            style={styles.head}>
                <CustomTextView
                    containerStyle={styles.txt}
                    numberOfLines={1}
                    label={selected}
                />
                <FastImage
                    style={{ height: 12, width: 15 }}
                    resizeMode='contain'
                    source={isOpen ? image.down : image.right}
                />

            </TouchableOpacity>
            {isOpen && <>
                {options.map((i) => {
                    return <TouchableOpacity
                        onPress={() => onSelect(i)}
                        style={styles.listDiv}>

                        <CustomTextView
                            containerStyle={styles.listText}
                            numberOfLines={1}
                            label={typeof i=='string' ?i :i.name}
                        />

                    </TouchableOpacity>
                })}
            </>}
        </View>
    </>
}


const styles = StyleSheet.create({
    container: {
      color: 'black',
      textAlign: 'auto',
    },
    txt:{ fontFamily: FontFamily.bold, fontSize: size.size_14, color: Colors.label, textAlign: 'center', },
    head:{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, width: '100%', paddingVertical: 15, justifyContent: 'space-between', backgroundColor:Colors.blackLight},
    heading:{ fontFamily: FontFamily.bold, fontSize: size.size_16, color: Colors.label, marginTop: 15 },
    listText:{ fontFamily: FontFamily.bold, fontSize: size.size_14, color: Colors.label, textAlign: 'center', },
    listDiv:{ borderTopWidth: 1, borderTopColor: color.brownDusty, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, width: '100%', paddingVertical: 15, justifyContent: 'space-between',  backgroundColor:Colors.black20},
    listContainer:{ backgroundColor: Colors.blackLight, borderRadius: 8, marginTop: 10,overflow:'hidden' },
  });