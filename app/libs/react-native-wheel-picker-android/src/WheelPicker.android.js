/**
 * @prettier
 * @flow
 * */

 import React from 'react'
 import { requireNativeComponent } from 'react-native'
import { DEVICE_HEIGHT } from '../../../rsc/theme/screenSizes'
 
 const WheelPickerView = requireNativeComponent('WheelPicker', null)
 
 type Props = {
   data: Array<string>,
   isCyclic?: boolean,
   selectedItemTextColor?: string,
   selectedItemTextSize?: number,
   indicatorWidth?: number,
   hideIndicator?: boolean,
   indicatorColor?: string,
   itemTextColor?: string,
   itemTextSize?: number,
   selectedItem?: number,
   backgroundColor?: string,
   onItemSelected?: number => void
 }
 
 export default class WheelPicker extends React.Component<Props> {
   static defaultProps = {
     style: {
       width: DEVICE_HEIGHT * 0.5,
       height: DEVICE_HEIGHT * 0.5,
     },
   }
 
   onItemSelected = (event: any) => {
     if (this.props.onItemSelected) {
       this.props.onItemSelected(event.nativeEvent.position)
     }
   }
 
   render() {
     return (
       <WheelPickerView
        //  indicatorWidth={100}
         {...this.props}
         selectedItemTextColor={'#ffffff'}
         onChange={this.onItemSelected}
       />
     )
   }
 }
 