import * as tslib_1 from "tslib";
import * as React from 'react';
import { FlatList, Platform, View } from 'react-native';
import styles from './styles';
import Item from './Item';
var itemAmountPerScreen = 20;
var borderWidth = 1;
var ReactNativeInfinityListSlider = /** @class */ (function (_super) {
    tslib_1.__extends(ReactNativeInfinityListSlider, _super);
    function ReactNativeInfinityListSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.flatList = React.createRef();
        _this.onLayout = function (event) {
            _this.setState({
                width: event.nativeEvent.layout.width,
                oneItemWidth: Math.round(event.nativeEvent.layout.width / itemAmountPerScreen)
            });
            _this.init();
        };
        _this.onSliderMoved = function (event) {
            var oneItemWidth = 9;
            console.log(event.nativeEvent.contentOffset.x,'event.nativeEvent.contentOffset.x')
            var _a = _this.props, onValueChange = _a.onValueChange, initialPositionValue = _a.initialPositionValue, maximumValue = _a.maximumValue, decimalPlaces = _a.decimalPlaces;
            var newValue = initialPositionValue +
                Math.floor(event.nativeEvent.contentOffset.x / oneItemWidth) *
                    _this.props.multiplicity;
            console.log(newValue,'newValue------>>>>>')
            if (maximumValue && newValue > maximumValue) {
                newValue = maximumValue;
            }
            var setValue = parseFloat(parseFloat(newValue.toString()).toFixed(decimalPlaces));
            _this.setState({
                value:setValue 
            });
            onValueChange(setValue);
        };
        _this.generateArrayBlock = function () {
            var _a = _this.props, arrayLength = _a.arrayLength, maximumValue = _a.maximumValue, multiplicity = _a.multiplicity;
            var length = arrayLength;
            if (maximumValue) {
                length = maximumValue / multiplicity;
                length += itemAmountPerScreen;
            }
            return new Array(length).fill(0);
        };
        _this.init = function () {
            setTimeout(function () { return _this.scrollToElement(0); }, 100);
        };
        _this.scrollToElement = function (value) {
            return _this.flatList.current &&
                _this.flatList.current.scrollToOffset({
                    offset: (value * _this.state.oneItemWidth) / _this.props.multiplicity,
                    animated: false
                });
        };
        _this.renderItem = function (element) { return (<Item oneColumnSize={_this.state.oneItemWidth} borderWidth={borderWidth} index={element.index} style={_this.props.itemStyle} tenthItemStyle={_this.props.tenthItemStyle}/>); };
        _this.renderDefaultThumb = function () { return (<View style={[
            styles.defaultThumb,
            _this.props.thumbStyle ? _this.props.thumbStyle : null
        ]}/>); };
        _this.state = {
            items: _this.generateArrayBlock(),
            width: 0,
            oneItemWidth: 0,
            value: props.initialPositionValue
        };
        return _this;
    }
    ReactNativeInfinityListSlider.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        var width = this.state.width;
        if (width === 0 && nextState.width !== 0) {
            return true;
        }
        if (nextProps.value !== nextState.value) {
            this.setState({
                value: nextProps.value
            });
            this.scrollToElement(nextProps.value);
        }
        return false;
    };
    ReactNativeInfinityListSlider.prototype.render = function () {
        var _this = this;
        var _a = this.props, renderThumb = _a.renderThumb, scrollEnabled = _a.scrollEnabled, mainContainerStyle = _a.mainContainerStyle;
        var _b = this.state, items = _b.items, width = _b.width;
        return (<View style={[styles.mainContainer, mainContainerStyle]} onLayout={this.onLayout}>
        <FlatList style={{ flex: 1 }} ref={this.flatList} 
        getItemLayout={function (data, index) { return ({
            length: _this.state.oneItemWidth,
            offset: _this.state.oneItemWidth * index,
            index: index
        }); }} 
        decelerationRate={0.5}
        scrollEnabled={scrollEnabled}
         data={width === 0 ? [] : items}
          keyboardShouldPersistTaps="always"
           horizontal 
           onScrollEndDrag={this.onSliderMoved} 
           onScroll={this.onSliderMoved} 
           onMomentumScrollBegin={this.onSliderMoved} 
           onMomentumScrollEnd={this.onSliderMoved} 
           keyExtractor={function (element, index) { return index.toString(); }} 
           renderItem={this.renderItem} 
           showsHorizontalScrollIndicator={false}
           initialNumToRender={400}
           />
        {renderThumb ? renderThumb() : this.renderDefaultThumb()}
      </View>);
    };
    ReactNativeInfinityListSlider.defaultProps = {
        multiplicity: 1,
        decimalPlaces: 1,
        arrayLength: 10000,
        scrollEnabled: true,
        mainContainerStyle: null,
        itemStyle: null,
        tenthItemStyle: null,
        initialPositionValue: 0
    };
    return ReactNativeInfinityListSlider;
}(React.Component));
export default ReactNativeInfinityListSlider;
