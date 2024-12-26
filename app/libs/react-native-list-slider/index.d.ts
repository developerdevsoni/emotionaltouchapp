import * as React from 'react';
import { FlatList, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Element, RNInfinityListSliderPropTypes, RNInfinityListSliderState } from './types';
declare class ReactNativeInfinityListSlider extends React.Component<RNInfinityListSliderPropTypes, RNInfinityListSliderState> {
    flatList: React.RefObject<FlatList<any>>;
    static defaultProps: {
        multiplicity: number;
        decimalPlaces: number;
        arrayLength: number;
        scrollEnabled: boolean;
        mainContainerStyle: null;
        itemStyle: null;
        tenthItemStyle: null;
        initialPositionValue: number;
    };
    constructor(props: RNInfinityListSliderPropTypes);
    shouldComponentUpdate(nextProps: Readonly<RNInfinityListSliderPropTypes>, nextState: Readonly<RNInfinityListSliderState>, nextContext: any): boolean;
    onLayout: (event: LayoutChangeEvent) => void;
    onSliderMoved: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    generateArrayBlock: () => number[];
    init: () => void;
    scrollToElement: (value: number) => void | null;
    renderItem: (element: Element) => JSX.Element;
    renderDefaultThumb: () => JSX.Element;
    render(): JSX.Element;
}
export default ReactNativeInfinityListSlider;
