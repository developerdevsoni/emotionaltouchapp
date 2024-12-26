import * as React from 'react';
declare type ItemPropTypes = {
    oneColumnSize: number;
    borderWidth: number;
    index: number;
    style?: Object;
    tenthItemStyle?: Object;
};
declare class Item extends React.PureComponent<ItemPropTypes> {
    static defaultProps: {
        style: null;
        tenthItemStyle: null;
    };
    render(): JSX.Element;
}
export default Item;
