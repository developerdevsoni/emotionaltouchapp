import NetInfo from "@react-native-community/netinfo";

export const getInternetStatus = () => {
    return NetInfo.fetch().then((state) =>state.isConnected)
}