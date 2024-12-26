import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeDataToLocal = async objectData => {
  try {
    const appLocalStorageData = await AsyncStorage.getItem('AppLocalData');
    if (appLocalStorageData === null) {
      await AsyncStorage.setItem(
        'AppLocalData',
        JSON.stringify(objectData),
      );
      return objectData;
    } else {
      const appLocalStorageDataObject = JSON.parse(appLocalStorageData);
      const newStorageData = {
        ...appLocalStorageDataObject,
        ...objectData,
      };
      await AsyncStorage.setItem(
        'AppLocalData',
        JSON.stringify(newStorageData),
      );
      return newStorageData;
    }
  } catch (error) {
    throw error;
  }
};

export const getDataFromLocal = async () => {
  try {
    const appLocalStorageData = await AsyncStorage.getItem('AppLocalData');
    if (appLocalStorageData) {
      return JSON.parse(appLocalStorageData);
    } else {
      throw 'No data found';
    }
  } catch (error) {
    throw 'No data found';
  }
};
