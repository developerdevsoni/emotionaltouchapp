declare const styles: {
    mainContainer: {
        width: string;
        height: number;
        position: "relative";
    };
    middleContainer: {
        position: "absolute";
        top: number;
        bottom: number;
        left: number;
        right: number;
        zIndex: number;
        justifyContent: "center";
    };
    backgroundContainer: {
        flex: number;
        justifyContent: "center";
    };
    defaultThumb: {
        position: "absolute";
        left: string;
        borderLeftWidth: number;
        height: number;
        alignSelf: "center";
    };
    mainBlock: {
        borderRightWidth: number;
        borderColor: string;
        height: number;
        flexDirection: "row";
        justifyContent: "center";
        alignItems: "center";
        overflow: "hidden";
    };
    lastBlock: {
        borderRightWidth: number;
    };
    subBlock: {
        height: number;
        backgroundColor: string;
        alignSelf: "center";
        flexDirection: "row";
        borderColor: string;
    };
    subBlockLine: {
        borderRightWidth: number;
        borderColor: string;
        height: string;
    };
    blocksContainer: {
        flexDirection: "row";
    };
};
export default styles;
