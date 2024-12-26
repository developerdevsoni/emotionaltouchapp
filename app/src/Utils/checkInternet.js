import NetInfo from '@react-native-community/netinfo';

export async function checkInternet() {
  try {
    const netInfo = await NetInfo.fetch();
    return netInfo;
  } catch (error) {
    throw error;
  }
}
