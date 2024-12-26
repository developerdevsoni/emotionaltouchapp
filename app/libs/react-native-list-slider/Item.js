import * as tslib_1 from "tslib";
import * as React from 'react';
import { View,Text } from 'react-native';
import styles from './styles';
var Item = /** @class */ (function (_super) {
    tslib_1.__extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.render = function () {
        //  console.log(this.props,'thisssssss')
        var _a = this.props, oneColumnSize = _a.oneColumnSize, borderWidth = _a.borderWidth, index = _a.index, style = _a.style, tenthItemStyle = _a.tenthItemStyle;
        return (<>
        <View style={[
            styles.subBlock,
            { width: 4, marginLeft:5,backgroundColor:  'rgba(233, 73, 96, 0.6)',borderRadius:10 },
            (index + 1) % 5 === 0 ? { borderRightWidth: borderWidth + 2, height: 10 } : null,
            style,
            (index + 1) % 5 === 0 ? tenthItemStyle : null,
        ]}/>
        {(index+1) % 10 === 0 &&<Text style={{position:'absolute',textAlign:'center',bottom:0,borderColor: 'rgba(233, 73, 96, 0.6)',color: 'rgba(233, 73, 96, 0.6)',left:-4,fontFamily:'Montserrat-SemiBold'}}>{index+1}</Text>}
        </>
        );
    };
    Item.defaultProps = {
        style: null,
        tenthItemStyle: null,
    };
    return Item;
}(React.PureComponent));
export default Item;
