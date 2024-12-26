import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogDisplay} from './log';

export async function storeDataToLocal(objectData) {
  try {
    const appLocalStorageData = await AsyncStorage.getItem(
      'AppLocalStorageData',
    );
    if (appLocalStorageData === null) {
      await AsyncStorage.setItem(
        'AppLocalStorageData',
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
        'AppLocalStorageData',
        JSON.stringify(newStorageData),
      );
      return newStorageData;
    }
  } catch (error) {
    throw error;
  }
}

export async function getDataFromLocal() {
  try {
    const allLocalStorageData = await AsyncStorage.getItem(
      'AppLocalStorageData',
    );

    if (allLocalStorageData !== null) {
      return JSON.parse(allLocalStorageData);
    } else {
      throw 'No record found';
    }
  } catch (error) {
    throw error;
  }
}

export async function clearLocalStorage() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
}
